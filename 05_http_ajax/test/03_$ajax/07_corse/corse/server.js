const http = require("http");
http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/plain;charset=utf8",
    //解决跨域
    "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
    "Access-Control-Allow-Origin": "http://127.0.0.1:5501",
    //或
    // "Access-Control-Allow-Origin": "*",

  });
  var obj = {
    name: 'zhangsan',
    age: 18
  }
  res.write(JSON.stringify(obj));
  res.end();

}).listen(3000);
console.log('启动了服务器');