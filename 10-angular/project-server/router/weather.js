const express = require("express");
const router = express.Router();
const http = require("http");

router.get("/", function (req, res) {
   http.get("http://localhost:3000/", function (res2) {
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

module.exports = router;