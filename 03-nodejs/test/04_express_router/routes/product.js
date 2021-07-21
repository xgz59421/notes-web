const express = require("express");
let router = express.Router();
router.get("/list",function (req, res) {
    res.send("商品列表");
});

module.exports = router;


