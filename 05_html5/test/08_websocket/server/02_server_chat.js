// 多对多聊天室 服务器
var app = require("http").createServer();
var io = require("socket.io")(app);
app.listen(3000);
var clientCount = 0;

io.on("connection", (socket)=>{
  console.log("有客户进入聊天室了!");
  
  clientCount++;
  var nickname = "user:" + clientCount;
  // 将昵称广播给所有用户
  io.emit("enter", nickname + "come in ");
  
  // 接受客户端发来的聊天信息
  socket.on("message", (data)=>{
    // 将聊天信息广播给所有用户
    io.emit("chat", nickname +" says:" + data);
  });

  
  // 某个客户端断开
  socket.on("disconnect",(data)=>{
    io.emit("leave", nickname + "leave");
  })
});

console.log("启动聊天室服务器");
