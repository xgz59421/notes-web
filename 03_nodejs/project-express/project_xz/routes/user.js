const express = require("express");
const pool = require("../pool.js");
let router = express.Router();
// console.log(pool)
//挂载路由
/**
 * 1.用户注册 post /register
 * 注册成功 -- 200
 * 用户名为空 -- 401
 * 密码为空 -- 402
 * 邮箱为空 -- 403
 * 电话为空 -- 404
 */
router.post("/register", function (req, res) {
    //app.js已经配置好body-parser中间件
    let obj = req.body;
    console.log(obj)
    console.log(obj.uname)
    //验证数据是否为空, 如果为空做出响应
    if(!obj.uname){
        res.send({code:401,msg:"uname required"});
        return;
    }
    if(!obj.upwd){
        res.send({code:402,msg:"upwd required"});
        return;
    }
    if(!obj.email){
        res.send({code:401,msg:"email required"});
        return;
    }
    if(!obj.phone){
        res.send({code:401,msg:"phone required"});
        return;
    }
    pool.query("INSERT INTO xz_user SET ?",[obj], function (err, result) {
        if(err) throw err;
        console.log(result);
        if(result.affectedRows > 0){
            res.send({code:200,msg:"register suc"})
        }
    })
    // res.send("注册成功");
});

//2.用户登录 post /login
router.post("/login",function (req, res) {
    let obj = req.body;
    console.log(obj);
    if(!obj.uname){
        res.send({code:401,msg:"uname required"});
        return;
    }
    if(!obj.upwd){
        res.send({code:402,msg:"upwd required"});
        return;
    }
    pool.query("select * from xz_user where uname=? and upwd=?",
        [obj.uname,obj.upwd],function (err, result) {
            if (err) throw err;
            console.log(result);
            if(result.length > 0){
                res.send({code:200,msg:"login suc"});
            }else {
                res.send({code:301,msg:"login err"});
            }
        });
});

//3.检索数据
router.get("/detail",function (req, res) {
    console.log(req.query)
    if(!req.query.uid){
        res.send({code:401,msg:"uid required"});
        return;
    }
    pool.query("select * from xz_user where uid = ?",
        [req.query.uid],function (err, result) {
            if(err) throw err;
            console.log(result)
            if(result.length > 0){
                res.send({code:200,msg:"ok",data:result[0]});
            }else {
                res.send({code:301,msg:"not exists"});
            }
        });
});

//4.修改用户
router.post("/update",function (req, res) {
    //1.获取数据
    let obj = req.body;
    console.log(obj);
    //2.验证数据是否为空
    let i = 400;
    for (var key in obj){
        i++;
        if(!obj[key]){
            res.send({code:i,msg:key + "required"});
            return
        }
    }
    pool.query("update xz_user set ? where uid = ?",
        [obj, obj.uid],function (err, result) {
            if (err) throw err;
            console.log(result);
            if(result.affectedRows > 0){
                res.send({code:200,msg:"update suc"});
            }else {
                res.send({code:301,msg:"update err"});
            }
        });

});

//5.用户列表
router.get("/list", function (req, res) {
    let obj = req.query;
    console.log(obj);
    //如果页码为空 默认1
    //大小为空 默认2
    if(!obj.pno) obj.pno = 1;
    if(!obj.count) obj.count = 2;
    obj.count = parseInt(obj.count);
    let start = (obj.pno -1) * obj.count; //(当前页-1)* 每页数量
    let count = obj.count;
    console.log(start, count);
    pool.query("select * from xz_user limit ?,?",
        [start, obj.count],function (err, result) {
            if(err) throw err;
            console.log(result)
            res.send({code:200, msg:"ok", data:result})
        })
});

//6.删除用户
router.get("/delete", function (req, res) {
    let obj = req.query;
    console.log(obj);
    if(!obj.uid){
        res.send({code:401,msg:"uid required"});
        return;
    }
    pool.query("delete from xz_user where uid = ?",
        [obj.uid],function (err, result) {
            if(err) throw err;
            console.log(result);
            if(result.affectedRows > 0){
                res.send({code:200,msg:"delete suc"});
            }else {
                res.send({code:301,msg:"delete fail"});
            }
        })
});



//导出路由器对象
module.exports = router;






