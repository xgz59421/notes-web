// 回调函数
function fun2(call) {
  console.log('fun2')
  call && call()
}
//调用: 无回调
fun2()
//调用: 有回调
fun2(function () {
  console.log('回调函数')
})
