/* 作用域链
  1. 函数执行中,需要一个变量,会在局部找,找到就不在继续查找,如果全局找不到,会报错
  2. window在浏览器中是 全局作用域对象
  3. 函数执行完,作用域链中的引用会被释放
*/

var a = 10
function fun1() {
  var a = 100
  a++
  console.log(a)
}
fun1()
console.log(a)
console.log('-----------------------------------')
var b = 10
function fun2() {
  b = 100 //全局作用域
  b++
  console.log(b)
}
fun2()
// 最好在浏览器运行, 此时的b就是window.b
console.log(b)

console.log('-----------------------------------')
var c = 10
function fun(c) {
  c = 100
  c++
  console.log(c)
}
fun(c)
console.log(c)
