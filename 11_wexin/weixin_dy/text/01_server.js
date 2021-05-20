var express = require('express');

var app = new express();

app.listen(3000);
//指定根页面返回的内容
app.get('/',(req,res)=>{
    res.send('hello world!');
});
// /index 返回static/index01.html
app.get('/index',(req,res)=>{
    res.sendFile(__dirname+'/static/index01.html');
});

// express内置的唯一的中间件：static
app.use(express.static(__dirname+'/static'));
