// js不提倡用递归, 能用循环尽量使用循环
// 使用递归：要有结束的条件，结合return
function getSum(n) {
  if (n === 1) {
    console.log('00000000')
    return 1
  }
  return n + getSum(n - 1) //最后在这里执行 并且退出
}
var r = getSum(5)
console.log(r)
