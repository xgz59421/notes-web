console.log('自执行匿名函数：');
!function () { console.log('!'); }();
~function () { console.log('~'); }();
-function () { console.log('-'); }();
+function () { console.log('+'); }();
void function () { console.log('void'); }();
(function (){ console.log('1111'); }());
(function (){ console.log('()()'); })();
console.log('end');

// !function(){}()

// 1.函数后的();表示要执行这个函数
// 2.而();要求前面必须是一个表达式。（最后有js表达式的定义）
// 3.所以“!”的作用是将function(){}函数体转为一个函数表达式