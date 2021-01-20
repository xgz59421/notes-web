// 基本
var [a, b, c] = [1, 2, 3];
console.log(a, b, c);

// 可嵌套
var [a, [[b], c]] = [2, [[3], 4]];
console.log(a, b, c);

// 可忽略
var [a, , b] = [5, 6, 7];
console.log(a, b);

// 剩余运算符
var [a, ...b] = [1, 2, 3];
console.log(a, b);

// 字符串解构
var [a, b, c, d, e] = 'hello';
console.log(a, b, c, d, e);

// 参数默认值
var [a = 3, b = a] = [];     // a = 3, b = 3
console.log(a, b);
var [a = 3, b = a] = [1];    // a = 1, b = 1
console.log(a, b);

// 变量交换
var a = 3;
var b = 5;
[a, b] = [b, a];
console.log(a, b);

console.log('------------------------');
console.log('...收集实参值');
var calc = (base, ...arr) => {
  // var calc = function (base, ...arr) {
  console.log("base", base);
  console.log("arr", arr);
  var total = arr.reduce((prev, elem) => prev + elem);
  console.log(`底薪:${base},奖金总和:${total}`);
}
calc(10000, 1000, 2000);

console.log('------------------------');
console.log('...打散数组');
function calc2(base, b1, b2, b3) {
  console.log(`底薪:${base},奖金1:${b1},奖金2:${b2},奖金3:${b3}`);
}
var arr = [1000, 2000, 3000];
calc2(10000, ...arr);