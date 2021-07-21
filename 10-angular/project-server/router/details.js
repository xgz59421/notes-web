const express = require("express");
const pool = require("../pool");
const router = express.Router();

//app.use("/details",Details)
//app.use("/detail", detailRouter)
//服务端接口地址http://localhost:3000/details
//客户端请求时:
//http://localhost:3000/details?lid=1

router.get("/", function (req, res) {

   var lid = req.query.lid;
   var output = {
      product: {},
      specs: [],
      pics: []
   }
   if (lid !== undefined) {
      var sql1 = `select * from xz_laptop where lid=?`;
      pool.query(sql1, [lid], (err, result) => {
         if (err) console.log(err);
         output.product = result[0];
         // console.log(output);
         // console.log("1=======================================");
         var family_id = output.product["family_id"];
         var sql2 = `select spec,lid from xz_laptop where family_id=?`;
         pool.query(sql2, [family_id], (err, result) => {
            if (err) console.log(err);
            output.specs = result;
            // console.log(output);
            // console.log("2================================");
            var sql3 = `select * from xz_laptop_pic where laptop_id=?`
            pool.query(sql3, [lid], (err, result) => {
               if (err) console.log(err);
               output.pics = result;
               // console.log("3================================");
               // console.log(output);

               console.log("details request success");
               res.send(output);
            })
         })
      })
   } else {
      res.send(output);
   }

});

router.get("/test1", function (req, res) {

   var sql = `select lid, family_id, title, subtitle, price, promise, spec from xz_laptop where lid<5`;
   pool.query(sql, [], (err, result) => {
      if (err) console.log(err);
      res.send(result)
   })
});

router.get("/test2", function (req, res) {

   var lid = req.query.lid;
   var sql = `select lid, family_id, title, subtitle, price, promise, spec from xz_laptop where lid=?`;
   pool.query(sql, [lid], (err, result) => {
      if (err) console.log(err);
      res.send(result)
   })
});


module.exports = router;