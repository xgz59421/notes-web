var wechat = require('wechat');
var express = require('express');

let config = {
    appid:'wx31c2f70c58017a68',
    token:'weixin',
    encodingAESKey:'sBCuKeSCOoSKHFK8HnR1kuS8xzuQOVypYXFCPMQaYOa'
}

let app = new express();
app.listen(3000);

app.get('/',wechat(config,(req,res)=>{
    let msg = req.weixin;
    console.log(req.weixin);
    return msg;
}));

app.post('/',wechat(config,(req,res)=>{
    let msg = req.weixin;
    console.log(msg);
    if(msg.Content.includes('嘿嘿')){
        res.reply('你是不是傻!');
    }else{
        res.reply('今天天气不错!');
    }
}));