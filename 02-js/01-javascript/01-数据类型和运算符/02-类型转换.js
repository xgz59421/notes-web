//强制转为数值型
var n1=Number('5');
var n2=Number('3a');
var n3=Number(true);
//null和undefined
var n4=Number(null);
var n5=Number(undefined);
console.log(n1, n2, n3, n4, n5);
var n6= +'10.133';
console.log(n6, typeof n6);

//转整型
var p1=parseInt(null);
var p2=parseInt(undefined);
var p3=parseInt(-3.14);
var p4=parseInt('6.18a'); //6
var p5=parseInt('a6.18'); //NaN
console.log(p1, p2, p3, p4, p5);

//转浮点型
var f1=parseFloat('3.14');//3.14
var f2=parseFloat('6.18a');//6.18
var f3=parseFloat('a6.18');//NaN
var f4=parseFloat('5a');//5
console.log(f1, f2, f3, f4);

//数值和布尔型转字符串
var num = 2;
var str = num.toString();//'2'
console.log(str,typeof str);




