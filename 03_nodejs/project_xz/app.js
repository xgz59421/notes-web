/***
 * 1.创建web服务器,托管静态资源到public目录,
 * 1 创建 user_register.html post /register    注册用户 http://127.0.0.1:8080/user_register.html
 * 2.创建 user_login.html    post /login       登录用户 http://127.0.0.1:8080/user_login.html
 * 3.创建 user_detail.html   get  /detail      检索用户 http://127.0.0.1:8080/user_detail.html
 * 4.创建 user_update.html   get  /update      修改用户 http://127.0.0.1:8080/user_update.html
 * 5.创建 user_list.html     post /list        用户列表 http://127.0.0.1:8080/user_list.html
 * 6.创建 user_delete.html   get  /delete      删除用户 http://127.0.0.1:8080/user_delete.html
 */
const express = require("express");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const bodyParser = require("body-parser");

let app = express();
app.listen(8080);
//托管静态资源到public
app.use(express.static("public"));
//中间件 body-parser
app.use(bodyParser.urlencoded({
    extended:false //不使用扩展的qs模块,而是使用querystring模块
}));

//把各个路由器挂载到服务器下, 添加前缀 /user /product
app.use("/user", userRouter);
app.use("/product",productRouter );
