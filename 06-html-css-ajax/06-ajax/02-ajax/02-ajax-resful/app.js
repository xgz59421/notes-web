const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./router/user");

let app = express();
app.listen(8080);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));


app.use("/user", userRouter);
console.log("重启服务器!")