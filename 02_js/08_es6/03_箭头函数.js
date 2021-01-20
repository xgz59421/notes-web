// (1). 去掉function，在()和{}之间加=>
// (2). 如果只有一个形参，可以省略()
// (3). 如果函数体只有一句话，可以省略{}
//   如果仅剩的一句话，还是return，则必须省略return。

var fun = function (a, b) {
  return a + b;
}
// 箭头函数
// 简化1
var fun1 =(a, b)=>{
  return a + b;
}
console.log(fun1(1, 3));
// 简化2
var fun2 = (a, b)=>a+b;
console.log(fun2(2, 3));

// 箭头函数特点: 箭头函数内部的this与外部的this保持一致！
var lilei={
  sname:"Li Lei",
  friends:["亮亮","然然","东东"],
  // intr:function(){//ES6:对象方法的":function"都可省略
  // intr:()=>{//错误!
  // console.log('浏览器下:',this===window);
  intr(){
    //1. 简化了function
    //2. 还不会改变原有this——单纯的简写
    //遍历当前lilei对象的friends数组中每个人名
    this.friends.forEach(
      // function(fname){//错误
        // console.log('浏览器下:',this===window);
      item=>{
        // var a=10;//局部变量
        console.log(`${this.sname} 认识 ${item}`);
      }
    );
  }
}
lilei.intr();
