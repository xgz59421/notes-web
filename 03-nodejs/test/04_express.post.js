const express = require("express");
const queryString = require("querystring");
let app = express();
app.listen(8080);
//------------------post begin------------------------
//创建服务器,向服务器发请求获取登录的网页 get /login  响应login.html
app.get("/login",function (req,res) {
    res.sendFile(__dirname +"/login.html");
});

//根据表单请求的方法和url创建对应的路由
//post /mylogin
app.post("/mylogin",function (req, res) {
    //如果数据大->> 用流
    req.on("data",function (chunk) {
        // console.log(chunk.toString())
        let obj = queryString.parse(chunk.toString())
        console.log(obj)
    });
    res.send("登录成功")
});
//------------------post end------------------------

//------------------get begin------------------------
app.get("/reg",function (req, res) {
    res.sendFile(__dirname + "/reg.html");
});
//根据表单提交,创建路由
app.get("/myreg",function (req, res) {
    console.log(req.query)
    res.send("注册成功")
});
//-------------------get end-----------------------