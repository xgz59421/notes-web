/* 
* 把字符串分割为字符串数组
* string.split(separator,limit)
  - separator 可选, 字符串或正则表达式
  - limit     可选, 返回拆了几个字符串
  - 返回类型: Array
*/


var string = "how are you";
console.log('string:', string);
console.log('-----------------');
var array = string.split("");
// 分割每个字符串
console.log('string.split("")', array);
// 按照空格切
var array = string.split(" ");
console.log('string.split(" ")', array);
// 按照空格切, 取2位
var array = string.split(" ", 2);
console.log('string.split(" ", 2):',array);

// 正则
var reg = /\s+/;
var array = string.split(reg);
console.log(array);