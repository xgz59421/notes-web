const express = require("express");
const pool = require("../pool");

let router = express.Router();

/*
1.登录 get /v1/login
2.获取用户列表 /v1/userlist
3.根据uid删除用户 /v1/delUser
4.根据uid查询用户 /v1/searchUser
5.根据uid修改用户 /v1/updateUser
6.根据 uname 查询用户信息 /v1/queryUser
7.注册新用户 /v1/reg
*/

//1.登录 get /v1/login
router.get("/v1/login/:uname&:upwd", function (req, res) {
  var obj = req.params;
  console.log(obj);
  var sql = "select * from xz_user where uname = ? and upwd = ? "
  pool.query(sql, [obj.uname, obj.upwd], function (err, result) {
    if (err) throw err;
    console.log(result);
    if (result.length > 0) {
      res.send("1");
    } else {
      res.send("0");
    }
  });
});

//2.获取用户列表 /v1/userlist
router.get("/v1/userlist", function (req, res) {
  var sql = "select * from xz_user;";
  pool.query(sql, function (err, result) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
  });

});
//3.根据uid删除用户 /v1/delUser
router.delete("/v1/delUser/:uid", function (req, res) {
  var uid = req.params.uid;
  console.log("delete uid:", uid);
  var sql = "delete from xz_user where uid =?";
  pool.query(sql, [uid], function (err, result) {
    if (err) throw err;
    console.log(result);
    if (result.affectedRows > 0) {
      res.send("1");
    } else {
      res.send("0");
    }

  });
})
//4.根据uid查询用户 /v1/searchUser
router.get("/v1/searchUser/:uid", function (req, res) {
  var uid = req.params.uid;
  var sql = "select * from xz_user where uid=?";
  console.log(uid);

  pool.query(sql, [uid], function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//5.根据uid修改用户 /v1/updateUser
router.put("/v1/updateUser", function (req, res) {
  var obj = req.body;
  var uid = obj.uid;
  console.log("obj:", obj);

  var sql = "update xz_user set ? where uid= ?";
  pool.query(sql, [obj, uid], function (err, result) {
    if (err) throw err;
    console.log(result);
    if (result.affectedRows > 0) {
      res.send("1");
    } else {
      res.send("0");
    }
  });
});

//6.根据 uname 查询用户信息 /v1/queryUser
router.get("/v1/queryUser/:uname", function (req, res) {
  var obj = req.params;
  console.log(obj);
  console.log(obj.uname);

  var sql = "select * from xz_user where uname = ?";
  pool.query(sql, [obj.uname], function (err, result) {
    if (err) throw err;
    console.log(result);
    if (result.length) {
      res.send("1");
    } else {
      res.send("0");
    }
  });
});

//7.注册新用户 /v1/reg
router.post("/v1/reg", function (req, res) {
  var obj = req.body;
  console.log("注册:", obj);
  var sql = "insert into xz_user set ?";
  pool.query(sql, [obj], function (err, result) {
    if (err) throw err;
    console.log(result);
    if (result.affectedRows > 0) {
      res.send("1");
    } else {
      res.send("0");
    }
  });
});

//8.post login
router.post("/login", function (req, res) {
  var obj = req.body;
  console.log("登录:", obj);
  var sql = "select * from xz_user where uname = ? and upwd = ? "
  pool.query(sql, [obj.uname, obj.upwd], function (err, result) {
    if (err) throw err;
    console.log(result);
    if (result.length > 0) {
      res.send("1");
    } else {
      res.send("0");
    }
  });
});


module.exports = router;