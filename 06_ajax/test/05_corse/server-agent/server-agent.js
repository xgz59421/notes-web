const http = require("http");
http.createServer(function (req, res) {
   res.writeHead(200, {
      "Content-Type": "text/plain;charset=utf8",
      //解决跨域
      // "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
      // "Access-Control-Allow-Origin": "http://127.0.0.1:5501",
      //或
      // "Access-Control-Allow-Origin": "*",

   });
   res.write("北京 晴 38°");
   res.end();

}).listen(3000);
console.log('启动了服务器');
console.log('服务器代理解决跨域');