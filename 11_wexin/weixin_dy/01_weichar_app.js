//node_modules
//01_weichat_app.js
//?1:加载相应模块
//  express;wechat
const express = require("express");
const wechat = require("wechat");  
//2:创建配置对象
var config = {
  appid:"wx31c2f70c58017a68",
  token:"weixin"
}
var app = express();
app.listen(3000);

app.post("/",wechat(config,(req,res)=>{
    var msg = req.weixin.Content;
    console.log(msg);
    res.reply("今天刚测试手下留情!!!")
}));
app.get("/",wechat(config,(req,res)=>{
  var msg = req.weixin.Content;
  if(msg.indexOf("bye")!=-1){
    res.reply("你是不是傻!");
  }else{
    res.reply("今天刚测试手下留情!!!")
  }
}));
