
var str='12';
console.log( Number(str) );

// Number的属性
// console.log(Number.MAX_VALUE, Number.MIN_VALUE)

// Number的方法

// 1. toFixed() 指定小数位数(string 类型)
console.log('----------toFixed----------');
var b = 0.1 + 0.2;
console.log(b);
console.log("保留1位:", b.toFixed(1), typeof b.toFixed(1));
var price = 6988.00;
console.log(price.toFixed(2))

// 2.toString() 转字符串
console.log('----------toString----------');
var num = 5;
var num1 = num.toString();
console.log(num1, typeof num1)
var num2 = num.toString(2);
console.log("转2进制",num2)

// 3.isNaN() 检测是否为NaN
console.log('----------isNaN----------');
console.log(isNaN('10'));

// 4.isFinite() 检测一个值是否为有限值
console.log('----------isFinite----------');
console.log(-2/0);//Infinity
console.log(isFinite(-2/0));//false
console.log(isFinite(2/3));

// 5. parseInt() 转整数
console.log('----------parseInt----------');
var p1 = Number.parseInt(null);
var p2 = parseInt(undefined);
var p3 = parseInt(-3.14);
var p4 = parseInt('6.18a'); //6
var p5 = parseInt('a6.18'); //NaN
console.log(p1, p2, p3, p4, p5);

// 6. parseFloat() 转浮点数
console.log('----------parseFloat----------');
var f1 = parseFloat('3.14');//3.14
var f2 = parseFloat('6.18a');//6.18
var f3 = parseFloat('a6.18');//NaN
var f4 = parseFloat('5a');//5
console.log(f1, f2, f3, f4);

// 7. isInteger() 是否为整数。
console.log('----------isInteger----------');
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.1));



