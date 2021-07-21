const http = require("http");
//向其他服务器发请求
var url = "http://101.96.128.94:9999";//www.codeboy.com
url = "http://www.weather.com.cn/data/sk/101010100.html"; //北京的天气数据 
http.get(url,function (res) {
    //获取响应的对象
    // console.log(res)
    //响应的状态码
    console.log(res.statusCode);
    //响应的结果 (首页如果是html 响应的就是 html)
    //时间:监听是否有数据响应过来
    res.on("data",function (chunk) {
        console.log(chunk.toString())
    })
});
