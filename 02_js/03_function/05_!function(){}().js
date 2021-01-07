// 立即调用的函数表达式（IIFE）
// function(){ /* code */ }();  会报错 
console.log('立即调用的函数表达式');
!function () { console.log('!'); }();
~function () { console.log('~'); }();
-function () { console.log('-'); }();
+function () { console.log('+'); }();
void function () { console.log('void'); }();
(function (){ console.log('1111'); }());
(function (){ console.log('()()'); })();
console.log('end');
// 这样其实也可以 
var i = function(){ return 10; }();
true && function(){ /* code */ }();
0, function(){ /* code */ }();

// !function(){}()

// 1.函数后的();表示要执行这个函数
// 2.而();要求前面必须是一个表达式。（最后有js表达式的定义）
// 3.所以“!”的作用是将function(){}函数体转为一个函数表达式