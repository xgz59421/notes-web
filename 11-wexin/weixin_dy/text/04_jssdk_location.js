var express = require('express');
var sign = require('./jssdk/sign');
var config = require('./jssdk/config');
var callWeiXin = require('./jssdk/callWeiXin');

var app = new express();
app.listen(3000);

app.use(express.static('./public'));
app.use(express.static(__dirname+"/static/"));
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",'nodejs-weixin')
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });
app.get('/jq',(req,res)=>{
    res.sendFile(__dirname+"/static/jquery.js");
});
app.get('/sign', function(req, res, next){
    callWeiXin.get(config.appid, config.secret, function(err, access_token, ticket){
      if(err) {
        return res.status(500).json({code: 500});
      } else {
        var url = req.protocol + '://' + req.get('host') + req.originalUrl;
        url = req.headers['referer'] || "";
        var index = url.indexOf("#");
        if(index > 0) {
          // url = url.split(0, index);
        }
        // url = encodeURIComponent(url);
        var signText = sign(ticket, url);
        signText.appId = config.appid;
        res.json(signText);
      }
    });
  });