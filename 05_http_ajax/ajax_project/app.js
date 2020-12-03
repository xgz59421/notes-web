const express = require("express");
const bodyParser = require("body-parser");
const ajaxRouter = require("./routes/ajax");

let app = express();
app.listen(8080);
//托管静态资源到public
app.use(express.static("public"));
//中间件 body-parser
app.use(bodyParser.urlencoded({
   extended: false //不使用扩展的qs模块,而是使用querystring模块
}));

//把各个路由器挂载到服务器下, 添加前缀 /user /product
app.use("/ajax", ajaxRouter);