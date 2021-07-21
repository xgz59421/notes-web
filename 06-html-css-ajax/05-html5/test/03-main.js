// 创建全局变量

// 保存弹幕对象
var msg;
// 画布和视频
var canvas, video;
// 画笔/画布中上下文
var ctx;
// 画布宽高
var canvas_width, canvas_height;
// 输入内容
var inputMsg, inputFont, inputColor, inputBtn;



// 创建入口函数game
function game() {
  init();
  gameloop();
}

// 创建初始化函数
function init() {
  console.log("init");

  canvas = document.getElementById("canvas");
  canvas_width = canvas.width;
  canvas_height = canvas.height;
  ctx = canvas.getContext("2d");
  video = document.getElementById("video");
  inputMsg = document.getElementById("inputMsg");
  inputFont = document.getElementById("inputFont");
  inputColor = document.getElementById("inputColor");
  inputBtn = document.getElementById("inputBtn");

  msg = new msgObj();
  msg.init();

  inputBtn.addEventListener("click", handleMsg);
}

// 获取用户输入内容
function handleMsg() {
  console.log(inputMsg.value);
  console.log(inputFont.value);
  console.log(inputColor.value);

  var obj = {
    msg: inputMsg.value,
    color: inputColor.value,
    font: inputFont.value
  }
  msg.add(obj);
}

// 创建循环绘制函数
function gameloop() {
  // console.log("gameloop");
  // 创建一个智能定时器  
  requestAnimationFrame(gameloop);
  msg.draw();
}

//将网页内容加载后 调用 game  !!不要加() game() 会立即调用
document.body.onload = game;