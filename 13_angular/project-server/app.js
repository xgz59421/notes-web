const express = require("express");
const userRouter = require("./router/user");
const indexRouter = require("./router/index");
const detailsRouter = require("./router/details");
const weatherRouter = require("./router/weather");

const bodyParser = require("body-parser");
const cors = require("cors");

var app = express();
app.listen(5050);


app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
//CORS 跨域中间件
app.use(
  cors({
    //          Live Server            VUE脚手架项目
    origin: ["http://127.0.0.1:5500", "http://localhost:8080", "http://localhost:4200", "http://127.0.0.1:4200",],
    credentials: true,
  })
);

app.use("/user", userRouter);
app.use("/index", indexRouter);
app.use("/details", detailsRouter);
app.use("/weather", weatherRouter);

console.log("重启服务器");