// 创建函数

// 1. 函数声明
function fn(){
}

// 2. 函数表达式 变量名称就是函数名称 不存在函数提升
// fun1() //会报错
var fun1 = function(){  
  console.log('fun1');
};

// 3. new Function
var foo = new Function(
  'return "hello world";'
);
// 等同于
function foo() {
  return 'hello world';
}








