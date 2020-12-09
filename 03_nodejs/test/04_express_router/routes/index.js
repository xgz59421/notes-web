const express = require("express");
let router = express.Router();

router.get("/index",function (req, res) {
    res.send("这是首页")
});

module.exports = router;