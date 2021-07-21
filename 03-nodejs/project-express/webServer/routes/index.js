var express = require('express');
var router = express.Router();

/* global / */
router.get('/', function(req, res, next) {
  res.send('/ something...');
});

module.exports = router;
