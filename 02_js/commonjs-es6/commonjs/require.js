// 引入: node.js
var app = require("./exports");
console.log(app);
console.log(app.m); //调用引入的变量
console.log(app.addx(1,2)); // 调用引入的方法
