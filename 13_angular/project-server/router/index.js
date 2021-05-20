const express = require("express");
const pool = require("../pool");

let router = express.Router();

router.get("/", function (req, res) {
   var sql = `SELECT * FROM xz_index_product where seq_recommended!=0 order by seq_recommended`;
   pool.query(sql, [], function (err, result) {
      if (err) throw err;
      console.log("index request success");

      res.send(result);
   });
});



module.exports = router;