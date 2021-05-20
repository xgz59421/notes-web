//功能:
// 1. 微信测试 get  回复
// 2. 聊天 (接受发来内容  回复信息)
// 3. 引入 express wechat
const express = require("express");
const wechat = require("wechat");
// 4. 创建配置对象 appid/token
var config = {
  appid: "wx800b72c2d73f7eb7",  //开发者钥匙
  token: "weixin" //令牌
}
// 5. 创建express 服务器 端口4000
var server = express();
server.listen(4000);
// 6. 获取微信测试数据 get /回复
server.get("/", wechat(config, (req, res)=>{
  // 收微信
  console.log(req.weixin);
  console.log(req.weixin.Content);

  // 发微信
  res.reply("hi !!");
}));
// 7. 获取微信聊天数据 post /
server.post("/", wechat(config, (req, res)=>{
  // 收微信
  var msg = req.weixin.Content
  console.log(msg);
  if(!msg){
    // res.reply("hi!");
    res.reply("你好用户, 这是测试订阅号, 你可以输入  你可以输入张岱言/zdy, 张岱劲/zjd, 或郑娜/zn !!!");
    return;
  }
  // 发微信
  if(msg.indexOf("hi") != -1){
    res.reply("你好 !!");
  }else{
    res.reply("test!!");
  }
}));
// 8. 启动程序 node 05_app.js
// 9. 在测试号配置地址



