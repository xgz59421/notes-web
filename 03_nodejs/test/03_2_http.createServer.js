const http = require("http");
const fs = require("fs");
const zlib = require("zlib");
//创建web服务器
let app = http.createServer();
//监听端口号
app.listen(8080);
//请求服务器
//http://127.0.0.1:8080
//http://localhost:8080
//事件:服务器监听是否有请求
app.on("request",function (req, res) {
    //req请求的对象  res响应的对象
    console.log(req.url, req.method);//url 是端口号后面的部分
    // console.log(req.headers);//头信息
    var url = req.url;
    if(url == "/index"){
        //1.响应一个网页
        //响应的文件类型
        res.writeHead(200, {
            "Content-Type":"text/html;charset=utf-8"//设置响应头信息支持的格式及编码
        });
        res.write("<h2>欢迎来到我的个人主页</h2>");
        //结束并且发送响应
        res.end();
    }else if(url == "/fs"){
        // //响应一个自定义html
        // var file = fs.readFileSync("node_http_server.html");
        // res.write(file);
        // //结束并且发送响应
        // res.end();

        //告诉浏览器使用的是那种压缩形式  //gzip 另一种 Deflate
        res.writeHead(200, {
            "Content-Encoding": "gzip"
        });
        //创建一个gzip压缩
        let gzip = zlib.createGzip();
        //创建一个可读取的流,
        //通过管道(pipe)添加到压缩
        //再把压缩通过管道(pipe)响应到浏览器端
        fs.createReadStream("node_http_server.html").pipe(gzip).pipe(res);

    }else if(url == "/"){
        //2.跳转到另一个URL
        res.writeHead(302,{
            // Location:"http://www.baidu.com"
            Location:"/index"  //跳转到主页
        });
        //结束并且发送响应
        res.end();
    }else {
        //3.404 没有找到网页
        res.writeHead(404);
        res.write("404 not found");
        //结束并且发送响应
        res.end();
    }
});



