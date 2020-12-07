/*创建web服务器, 托管到静态资源public目录下, 含有 add.html, 用于添加部门数据,
点击提交, 向服务器发请求(get add), 把数据插入到tedu数据库下的 dept表中, 如果添加成功,响应添加成功
*/
const express = require("express");
const mysql = require("mysql")
let app = express();
app.listen(8080);
let connect = mysql.createConnection({//高效 请使用 mysql.createPool()
    host:"127.0.0.1",
    port:"3306",
    user:"root",
    password:"",
    database:"tedu"
});
connect.connect();

//托管静态资源
app.use(express.static("public"));

connect.query("select * from dept", function (err, result) {
    if (err)throw err;
    console.log(result);
});
//创建对应的 路由 get /add
app.get("/add", function (req, res) {
    var dept =req.query;
    console.log(dept);
    connect.query("insert into dept set ?",[dept], function (err, result) {
        if (err) throw err;
        console.log(result);
    })
    res.send("添加成功");
});