const mysql = require("mysql");

let pool = mysql.createPool({
    host:"127.0.0.1",
    port:"3306",
    user:"root",
    passwrod:"",
    database:"xz",
    connectionLimit:15      //连接池的大小
});
//导出数据库连接池
module.exports = pool;