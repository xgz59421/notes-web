const express = require("express");
const pool =require("../pool");
let router = express.Router();

//挂载路由
//1.商品列表 get /list
router.get("/list", function (req, res) {
    let obj = req.query;
    if(!obj.pno)obj.pno = 1;
    if(!obj.count)obj.count = 2;
    obj.count = parseInt(obj.count);
    var start = (obj.pno - 1)* obj.count;
    pool.query("select * from xz_index_product limit ?,?",
        [start, obj.count],function (err, result) {
            if (err) throw err;
            console.log(result)
            res.send({code:200, msg:"product ok", data:result})

        });
});

//2.商品添加

//3.商品修改

//4.商品详情

//5.删除商品


module.exports = router;