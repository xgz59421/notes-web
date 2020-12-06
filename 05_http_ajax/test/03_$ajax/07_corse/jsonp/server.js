const express = require("express");
const bodyParser = require("body-parser");
var app = express();
app.listen(3000);
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
// http://127.0.0.1:3000/test
app.get("/test", function (req,res) {
  //req 请求的对象 , res 响应的对象
  var fn = req.query.callback;
  var obj ={
    name: 'zhangsan',
    age: 18
  }
  // res.send(obj)
  res.write(fn+`(${JSON.stringify(obj)})`);
  res.end();
});
console.log("重启服务器");
console.log("jsonp解决跨域");