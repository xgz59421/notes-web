//闭包的最大用处有两个:
// 1.可以读取外层函数内部的变量 n=999
function f1() {
  var n = 999;
  function f2() {
    console.log(n);
  }
  return f2;
}
var result = f1();
result(); // 999

// 2.让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。
function createIncrementor(start) {
  return function () {
    var result = start++;
    console.log(result);
    return ;
  };
}
var inc = createIncrementor(5);
inc() // 5
inc() // 6
inc() // 7
// 原因是闭包（上例的inc）用到了外层变量（start），
// 导致外层函数（createIncrementor）不能从内存释放。
// 只要闭包没有被垃圾回收机制清除，外层函数提供的运行环境也不会被清除，
// 它的内部变量就始终保存着当前值，供闭包读取。
// 内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题