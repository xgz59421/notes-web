
// 1.创建web 服务器
// http 是内置模块 不需要下载
var app = require("http").createServer();
// 2. 创建socket.io 对象 (依赖于app)
var io = require("socket.io")(app);
// 3. 绑定监听端口
app.listen(3000);
// 4. 接受客户端请求
io.on("connection", (socket) =>{
  console.log("有客户端连接到服务器了!");

  // 5. 服务器端接受客户端消息
  // 绑定事件(自定义)
  socket.on("message", (data)=>{
    console.log("客户端向服务器发送的数据: ",data);
  });

  // 6. 触发客户端自定义事件(server)
  socket.emit("sever","im server");

  // 6. 发送消息给所有的客户端
  io.emit("list", "明天开始大降价!!");

  // 7. 接受客户端离开的消息 默认时间disconnect
  socket.on("disconnect", (data)=>{
    console.log("当前客户端离开", data);
    
  });
});





console.log("启动socket 服务器");
