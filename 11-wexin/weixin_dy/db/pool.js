const mysql = require('mysql');
let pool = mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    database:'db',
    user:'root',
    password:''
});
module.exports = pool;