//weixin/weixin_dy/04_homework.js
//功能:完成聊天机器人 程序
//用户发送消息，在数据库查找匹配记录并且返回
//如果没有匹配记录 返回"没听懂请再说一遍"
//1:引入三个模块 express wechat mysql
const express = require("express");
const wechat = require("wechat");
const mysql = require("mysql");
//2:创建一个变量保存连接池
//使用连接池提升软件效率
var pool = mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   database:"xz"	    
});
//3:创建一个变量保存测试帐户配置信息 appid token
var config = {
   appid:"wxa56801014e697901",
   token:"weixin"
};
//4:创建express服务器并且绑定3000端口
var app = express();
app.listen(3000);
//5:接收微信用户发来 / GET
app.get("/",wechat(config,(req,res)=>{
   res.reply("hi");
}));
//6:接收微信用户发来 / POST
app.post("/",wechat(config,(req,res)=>{
  //6.1:接收用户信息
  var msg = req.weixin.Content;
  //6.2:查询数据库是否有匹配记录
  var sql =" SELECT replay FROM xz_chat";
      sql+=" WHERE form LIKE concat('%',?,'%')";
  pool.query(sql,[msg],(err,result)=>{
       if(err)throw err;
       //6.3:如果有匹配记录返回
       //6.4:如果没有返回 没听懂
	   if(result.length==0){
	      res.reply("没听懂!:(");
	   }else{
	      res.reply(result[0].replay);
	   }
  });
}))
