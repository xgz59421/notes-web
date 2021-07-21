const wechat = require("wechat");
const express = require("express");

//登录微信测试帐户获取三个值
let config = {
  appid:"wx31c2f70c58017a68",
  token:"weixin",
  encodingAESKey:"sBCuKeSCOoSKHFK8HnR1kuS8xzuQOVypYXFCPMQaYOa"
}
var app = express();
app.listen(3000);
app.get("/",wechat(config,(req,res)=>{
   var msg = req.weixin;
   console.log(msg);
   return msg;
}));

//微信发送服务器post
app.post("/",wechat(config,(req,res)=>{
   var msg = req.weixin.Content;
   if(msg.indexOf("bye")!=-1){
      res.reply("你是不是傻");
   }else{
      res.reply(msg+"不错");
   }
}))

console.log('start');