const mysql = require("mysql");

let pool = mysql.createPool({
   connectionLimit: 15,
   host: "127.0.0.1",
   user: "root",
   password: "",
   database: "xz"
});

// var sql = "select * from xz_user;"
// pool.query(sql,function (err, result) {
//     if (err) throw err;
//     console.log(result)
// });

module.exports = pool;