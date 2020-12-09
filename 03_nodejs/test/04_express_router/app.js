const express = require("express");
//引入user 路由器
const userRouter = require("./routes/user.js");
const productRouter = require("./routes/product.js");
const indexRouter = require("./routes/index");
let app = express();
app.listen(8080);
// console.log(userRouter);
//使用路由器,给路由器下的每个路由添加前缀,如/user
//访问 http://localhost:8080/user/login
app.use("/user",userRouter);

//创建商品路由器 product.js, 添加路由get /list
//再服务武器下使用
app.use("/product",productRouter)

//首页模块
app.use("/",indexRouter);