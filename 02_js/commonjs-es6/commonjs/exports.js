// exports.js

// node.js 实现的 CommonJS规范, 模块化导出有两种写法
// 特点: 最终只能向外导出一个对象

var m =123;
var addx = function (n1, n2) {
  return n1 + n2;
}

// 导出一个对象
module.exports = {
  m : m,
  addx : addx
}

// 导出的另一种写法
// module.exports.m = m;
// module.exports.addx = addx;

// 偷懒写法
// exports.m = m;
// exports.addx = addx;



