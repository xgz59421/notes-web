const express = require('express');
const http = require("http");

var app = express();
app.listen(8080);
app.use(express.static('public'));

app.get("/weather", function (req, res) {
  http.get("http://127.0.0.1:3000/", function (res2) {
    var weaher = "";
    res2.on("data", function (data) {
      console.log(data);
      weaher = data;
      res.writeHead(200, {
        "Content-Type": "text/plain;charset=utf8",
      });
      res.write(weaher);
      res.end();
    });
  });
});