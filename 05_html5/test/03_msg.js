// 创建弹幕构造函数 保存弹幕数据
var msgObj = function () {
  // (1)每一个弹幕中文字需要位置(x,y)
  this.x = [];
  this.y = [];
  // (2)每一个弹幕中文字(m)
  this.m = [];
  // (3)每一个弹幕中文字颜色(color)
  this.color = [];
  // (4)每一个弹幕中文字大小(font)
  this.font = [];
  // (5)每一个弹幕中文字速度(spd)
  this.spd = [];
  // (6)每一个弹幕中文字(状态 alive true 显示 false 隐藏)
  this.alive = [];
}
// 弹幕数量
msgObj.prototype.number = 50;

// 弹幕初始值
msgObj.prototype.init = function () {
  console.log("msg init");
  for (let i = 0; i < this.number; i++) {
    this.x[i] = canvas_width;
    this.y[i] = 100;
    this.m[i] = "";
    this.color[i] = "#000";
    this.font[i] = "12px";
    this.spd[i] = 3;
    this.alive[i] = false;

  }
}
// 绘制弹幕
msgObj.prototype.draw = function () {
  // console.log("msg draw");
  ctx.clearRect(0, 0, canvas_width, canvas_height);
  for (let i = 0; i < this.number; i++) {
    this.x[i] -= this.spd[i];
    ctx.font = this.font[i] + " SimHei";
    ctx.fillStyle = this.color[i];
    ctx.fillText(this.m[i], this.x[i], this.y[i]);

    // 弹幕如果移除左边框
    if (this.x[i] < 0) {
      this.x[i] = canvas_width;
      this.alive[i] = false;
    }
  }

}

// 添加弹幕到 弹幕池中 obj={msg:"xxx", color:"#xxx", font:"xxxpx"}
msgObj.prototype.add = function (obj) {
  console.log("msg add");
  for (let i = 0; i < this.number; i++) {
    if (!this.alive[i]) {
      this.alive[i] = true;
      this.color[i] = obj.color;
      this.font[i] = obj.font + " SimHei";
      this.m[i] = obj.msg;
      this.y[i] = Math.random() * canvas_height;
      this.spd[i] = 1 + Math.random() * 3;
      console.log(this.font[i]);

      return;
    }

  }
}