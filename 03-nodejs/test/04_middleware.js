//应用级中间件
const express = require("express");
const queryString = require("querystring");
const bodyParser = require("body-parser");
const compression = require("compression");
let app = express();
app.listen(8080);

//添加中间件,拦截对url为 /list的请求
app.use("/list",function (req, res,next) {
    //不写第一个参数将拦截所有的请求
    console.log("拦截到了对list的请求");
    //如果用户名不是root,响应"没有权限",否则执行下一个路由
    if(req.query.uname != "root"){
        res.send("没有权限")
    }else {
        //执行下一个中间件或路由
        next();
    }
})

//托管静态资源到public目录 (现有 list.html)
app.use(express.static("public"));
//测试 127.0.0.1:8080/list.html

//使用body-paser中间件 //{extended:false}可加可不加
app.use(bodyParser.urlencoded({
    extended:false//内部解析为对象使用querystring, true表示使用扩展qs模块
}));
//所有的路由添加压缩
app.use(compression());
//--------------------中间件end----------------------

//test:创建web服务器 托管静态资源到public目录,
// 创建文件login.html,包含用户名,密码,点击提交(post,/mylogin),
// 在路由中获取数据
app.post("/mylogin",function (req, res) {
    // res.send("登录的用户是:" + req.query.uname)  post不可以用 req.query.uanme
    //获取post请求的数据
    //方法1 推荐使用中间件body-parse
    console.log(req.body)
    //方法2
    // req.on("data",function (chunk) {
    //     var obj =queryString.parse(chunk.toString());
    //     console.log("登录的用户是:" + obj.uname)
    // });
    res.send("登录成功")
});

app.get("/list", function (req, res) {
    res.sendFile(__dirname +"/public/list.html")
});

//test:get /shopping 传递价格price, 在中间件中打9折,最后在路由中响应商品价格
//中间件
app.use("/shopping",function (req, res, next) {
    if(req.query.price){
        req.query.price *=0.9;
    }
    next();
})
app.get("/shopping",function (req, res) {
    res.send("商品价格为:" + req.query.price);
})