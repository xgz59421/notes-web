// 变量
var a = 10;
eval('a = 2');
console.log('a: ', a);

// 函数
eval(`function b() {
  console.log("this is eval function");
}`);
b();

// 别名
var m = eval;
m('var c = 1');
console.log('别名eval: ',c);

"use strict";
//严格模式下 eval的局部不会影响全局(浏览器下)
var x = 19;
eval(
    //eval的局部作用局
    "var x = 42; console.log(x)"
);
console.log(x);