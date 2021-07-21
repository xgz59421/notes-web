const express = require("express");
//创建路由器对象
let router = express.Router();
//往路由器中挂在路由
//get login
router.get("/login",function (req, res) {
    res.send("用户登录");
});

router.get("/list",function (req, res) {
    res.send("用户列表");
});


//导出路由器对象
module.exports = router;