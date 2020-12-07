//引入 express 包
const express = require("express");

//创建web服务器
let app = express();
//监听端口
app.listen(8080);

//路由:根据请求的 url和method方法做出响应
//如 rul:/login method:get
app.get("/login", function (req,res) {
    //req 请求的对象 , res 响应的对象
    res.send("<h2>登录成功</h2>");
});
console.log(__dirname)
app.get("/list", function (req,res) {
    //响应文件
    res.sendFile(__dirname +"/node_http_server.html");
});
app.get("/study",function (req, res) {
    //跳转
    res.redirect("http://www.baidu.com");
});
app.get("/reg",function (req, res) {
    //req请求的对象
    console.log(req.method, req.url)
    //获取查询字符串数据,并解析对象
    console.log(req.query)
    res.send("注册成功,用户名为" + req.query.name);
});

//get /package
//路由传参
app.get("/package/:pname",function (req,res) {
    //获取路由传参的数据 pname
    console.log(req.params)
    res.send(`这是包${req.params.pname}的详情介绍`);
});
app.get("/shopping/:lid/:price", function (req,res) {
    console.log(req.params);
    res.send(`
        编号:${req.params.lid}     <br>
        价格:${req.params.price}
    `);
});

