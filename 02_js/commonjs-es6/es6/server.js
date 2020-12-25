//引入express 模块
const express = require('express')

//实例化一个 express 服务器对象
var app = express()

//设定监听 8080 端口, 如果8080端口被占用则报错,成功则显示 Server Listening on 8080...
app.listen(8080, ()=> console.log('Server Listening on 8080...'))

//设定服务器提供静态服务的根目录为当前文件夹
app.use(express.static('./'));