// 创建函数

// 1. 用声明方式:
function fn() {}

// 2. 用赋值方式 变量名称就是函数名称 不存在函数提升
// fun1() //会报错
var fun1 = function () {
  console.log('fun1')
}

// 3. 用new创建: 几乎不用
var foo = new Function('return "hello world";')
