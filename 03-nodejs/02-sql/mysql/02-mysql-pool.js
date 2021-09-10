const mysql = require("mysql");
//创建连接池对象
let pool = mysql.createPool({
    host:"127.0.0.1",
    port:"3306",
    user:"root",
    password:"",
    database:"tedu",
    connectionLimit:15      //连接池的大小
});

//执行sql命令
pool.query("select * from emp where eid =?" , [5], function (err, result) {
    if (err) throw err;
    console.log(result);
});