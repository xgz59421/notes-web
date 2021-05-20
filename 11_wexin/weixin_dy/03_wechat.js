// weixin/weixin_dy/03_wechat.js
//功能:完成聊天测试程序
//测试微信服务器通讯是否下常
//-下载二个模块 express;wechat
//- wechat 基于node.js 聊天机器模块
//- 文字聊天
//- 记录微信测试帐户appid [wxa56801014e697901]
//  钥匙
//- 记录微信测试帐户令牌  [weixin]
//  暗号
//1:引入二个模块 express wechat
const express = require("express");
const wechat = require("wechat");
//2:创建配置对象 appid token
var config = {
   appid:"wxa56801014e697901",
   token:"weixin"
}
//3:创建express对象并且绑定3000端口
var server = express();
server.listen(3000);
//4:接收微信服务器post请求
server.post("/",wechat(config,(req,res)=>{
	//用户发送给消息
    var msg =  req.weixin.Content;
	console.log(msg);
    //返回
	res.reply("今天刚开张请手下留情!!!");
}));
//5:接收微信服务器get请求
server.get("/",wechat(config,(req,res)=>{
    var msg = req.weixin.Content;
	res.reply(msg);
}));
