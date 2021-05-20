var express = require('express');
var wechat = require('wechat');

let config = {
    token:'weixin',
    appid:'wx9576f25b742cc847',
    EncodingAESKey:'X1lsZ8grM8lU0TWkjrrmaZTj1UaXF40pMIW6ma0HjnB'
};
var app = new express();
app.listen(3000);
app.get('/',wechat(config,(req,res)=>{
    return req.weixin;
}));
/*
app.post('/',wechat(config,(req,res)=>{
    let msg = req.weixin.Content;
    if(msg.includes('js')){
        res.reply('javascript is awesome');
    }else if(msg.includes('html')){
        res.reply('html is a hyper text markup language');
    }else{
        res.reply('hello world');
    }
}));*/

var pool = require('./db/pool.js');
app.post('/',wechat(config,(req,res)=>{
    var msg = req.weixin.Content;
    var sql = 'select * from chat where question like ?';
    pool.query(sql,['%'+msg+'%'],(err,result)=>{
            console.log(result);
            if(result.length>0){
                res.reply(result[0].answer);
            }else{
                res.reply('你好');
            }
    });
}));

