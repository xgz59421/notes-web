const http = require("http");
http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/plain;charset=utf8",
    "Access-Control-Allow-Origin": "*" //解决跨域
  });
  res.write("注册成功");
  setTimeout(function () {
    res.end();
  }, 5000);
}).listen(3000);