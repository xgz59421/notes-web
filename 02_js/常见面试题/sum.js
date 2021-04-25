// 写一个求和的函数 sum，达到下面的效果
// // Should equal 15
// sum(1, 2, 3, 4, 5);
// // Should equal 0
// sum(5, null, -5);
// // Should equal 10
// sum('1.0', false, 1, true, 1, 'A', 1, 'B', 1, 'C', 1, 'D', 1, 'E', 1, 'F', 1, 'G', 1);
// // Should equal 0.3, not 0.30000000000000004
// sum(0.1, 0.2)
var sum = function () {
  var sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += parseFloat(arguments[i])||0;
  }
  return sum.toFixed(3) * 1000 / 1000  
}

var a = sum(1, 2, 3, 4, 5);
var b = sum(5, null, -5);
var c = sum(0.1, 0.2);
var d = sum('1.0', false, 1, true, 1, 'A', 1, 
'B', 1, 'C', 1, 'D', 1, 'E', 1, 'F', 1, 'G', 1);
console.log(a,b,c,d);