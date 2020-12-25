const http = require("http");
http.createServer(function (req, res) {

  res.write(`alert("多谢帮我执行了 这条js语句")`);
  setTimeout(function () {
    res.end();
  }, 2000)
}).listen(3000);