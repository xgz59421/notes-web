const express = require("express");
var app = express();
app.listen(3000);
app.get("/",(req,res)=>{
    res.send("hello word");
});
app.get("/index.html",(req,res)=>{
   res.sendFile(__dirname+"/static/index.html");
})
app.use(express.static(__dirname+"/static"))