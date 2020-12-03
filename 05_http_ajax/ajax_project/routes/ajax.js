const express = require("express");
const pool = require("../pool.js");
let router = express.Router();

router.get("/test", function (req, res) {
   console.log("接收到请求")
   res.send("第一个ajax")
});

//原生http 的get做登录
router.get("/http_login", function (req, res) {
   var uname = req.query.uname;
   var upwd = req.query.upwd;
   if (!uname || !upwd) {
      res.send("-1");
      return;
   }
   if (!upwd) {
      res.send("密码不能为空");
      return;
   }
   // res.send("用户名:" + uname +",密码:" +upwd);
   var sql = "select * from xz_user where uname=? and upwd=?";
   pool.query(sql, [uname, upwd], function (err, result) {
      if (err) throw err;
      console.log(result);
      if (result.length) {
         res.send("1")
      } else {
         res.send("0")
      }
   })
});

//restful get 无参数
router.get("/restful_userlist", function (req, res) {
   var sql = "select * from xz_user";
   pool.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result)
      res.send(result)
   })
});

//restful 的get 带参数 登录
//测试 http://localhost:8080/ajax/restful_login/yaya&123456
router.get("/restful_login/:uname&:upwd", function (req, res) {
   //接收参数
   var uname = req.params.uname;
   var upwd = req.params.upwd;

   var sql = "select * from xz_user where uname=? and upwd=?";
   console.log(uname, upwd)
   pool.query(sql, [uname, upwd], function (err, result) {
      if (err) throw err;
      if (result.length) {
         res.send("1")
      } else {
         res.send("0");
      }
   })

});

//restful 的 删除
//地址栏不能直接验证 delete方法 get可以
// router.get("/restful_del/:uid",function (req, res){
router.delete("/restful_del/:uid", function (req, res) {
   var uid = req.params.uid;
   console.log(uid);
   var sql = "delete from xz_user where uid=?"
   pool.query(sql, [uid], function (err, result) {
      if (err) throw err;
      console.log(result);
      if (result.affectedRows) {
         res.send("1");
      } else {
         res.send("0");
      }
   })

});

//restful post注册 和 http post 一样
router.post("/restful_post_reg", function (req, res) {
   var obj = req.body;
   console.log(obj)
   console.log(obj.uname)

   res.send("0")
   return
   var sql = "insert into xz_user set ?";
   pool.query(sql, [obj], function (err, result) {
      if (err) throw err;
      console.log(result);
      if (result.affectedRows) {
         res.send("1")
      }
   })
});

//restful的 put 修改
router.put("/restful_update", function (req, res) {
   var obj = req.body;
   console.log(obj);
   console.log(obj.uid);
   var sql = "update xz_user set ? where uid=?"
   var querysql = pool.query(sql, [obj, obj.uid], function (err, result) {
      if (err) throw err;
      console.log(result);
      if (result.affectedRows > 0) {
         res.send("1");
      } else {
         res.send("0");
      }
   })
   // console.log(querysql)
});

//导出路由器对象
module.exports = router;