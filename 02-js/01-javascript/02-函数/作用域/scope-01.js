//全局作用域
if (true) {
  var x = 5
}
console.log(x) // 5

//全局变量
var a = '北京市城管'
//函数作用域
function shi() {
  //局部变量
  var b = '石景山城管'
  //访问全局变量
  console.log(a)
}
shi() // 北京市城管
//在全局作用域下访问局部变量
// console.log(b); //报错

console.log('--------------------')

//全局变量
var n2 = 3
function fn() {
  //函数作用域
  //函数内，不加var是全局变量
  //严格模式下报错
  n1 = 2
  //给全局变量重新赋值
  n2 = 5
}
fn()
console.log('n1:', n1) // 2
console.log('n2:', n2) // 5

console.log('--------------------')
function fun() {
  var m1 = (m2 = m3 = 4)
  /*
  以上等价于
  m3=4;  //没加var，是全局
  m2=m3; //没加var，是全局
  var m1=m2; //加var，是局部
  */
}
fun() // 此处必须有执行, 否则下面都会报错
console.log(m3)
console.log(m2)
console.log(m1) // 报错, 局部变量
