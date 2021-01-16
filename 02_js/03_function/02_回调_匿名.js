
// 1.回调函数
function fun2(call) {
  console.log('fun2');
  call&&call();
}
//调用: 无回调
fun2();
//调用: 有回调
fun2(function () {
  console.log('回调函数');
})


// 2.匿名函数自调用  
(function(){
  // 调用完,立即释放(垃圾回收)
  // 全局污染：全局变量的出现影响到了其它的变量
  // 避免全局污染：使用局部变量
  var num=2;
  console.log('匿名函数自调用', num);
})(); 








