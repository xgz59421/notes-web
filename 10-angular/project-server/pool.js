const mysql = require("mysql");

var sqlobj = {
  connectionLimit: 10,
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  database: "xz"
}
var pool = mysql.createPool(sqlobj);
// //test
// var sql = "select * from xz_user where uname=?";
// pool.query(sql, ["root"], function (err, result) {
//    if (err) throw err;
//    console.log(result);
// });
module.exports = pool;