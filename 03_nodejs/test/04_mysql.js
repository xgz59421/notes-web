const mysql = require("mysql");
//创建连接对象
let connection = mysql.createConnection({
    host:"127.0.0.1",
    port:"3306",
    user:"root",
    password:"",
    database:"tedu"
});
//执行连接
connection.connect();

//执行SQL语句
connection.query("SELECT * FROM emp WHERE eid = ?",[5], function (err, result) {
    if (err)throw err;
    console.log(result);
});
//插入数据  //多次运行会报错 名字唯一
/*
//第一种
connection.query("INSERT INTO emp VALUES(?,?,?,?,?,?)",
    [null,"a123",0,"1998-1-1",4000,10], function (err, result) {
        if (err) throw err;
        console.log(result);
    });

//第二种
let emp = {
    eid:null,               //可略
    ename:"b479",
    sex:1,                  //可略
    birthday: "2000-9-9",
    salary:8988,
    deptId:20               //可略
}
connection.query("INSERT INTO emp SET ?",[emp], function (err, result) {
    if (err) throw err;
    console.log(result)
});
*/

//修改数据
//第一种修改
// connection.query("UPDATE emp SET sex=?,deptId=? WHERE eid=?",
//     [1,10,21], function (err, result) {
//         if (err)throw err;
//         console.log(result);
//     });
// //第2种修改
// let update_emp ={
//     salary: 10000,
//     birthday: "2002-2-2",
//
// }
// connection.query("UPDATE emp SET ? WHERE eid=?",[update_emp,12],function (err, result) {
//     if (err) throw err;
//     console.log(result);
// });

//删除数据
connection.query("DELETE FROM emp WHERE eid = ?",[21], function (err, result) {
    if (err)throw err;
    console.log(result);
});