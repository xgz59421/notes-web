//* 问题: 有时，函数中的this，默认情况不是我们想要的。
//* 解决: 其实js中提供了一种方法可以将函数中本不想要的this改成想要的this！
// 临时替换本次函数中的this为call()的第一个实参对象.
// func.call(thisValue, arg1, arg2, ...)

//window对象中, 有一个公用的计算器薪资的函数
function paySalary(base, bonus1, bonus2){
  console.log(`${this.ename}的总工资是:${base+bonus1+bonus2}`);
}
var lilei = {ename:"Li Lei"};//_ _proto_ _->Object的原型对象
var hmm = {ename:"Han Meimei"};

// lilei想用计算器函数计算自己的薪资
// 错误: 
//   lilei自己没有,
//   lilei的爹Object的原型对象中也没有
//   所以lilei不能使用计算函数
//   lilei.paySalary(10000,2000,3000);//报错: lilei.paySalary is not a function
// 正确: 
paySalary.call(lilei, 10000, 2000 , 3000);
//                     ↓    ↓       ↓     ↓
// function paySalary(     base, bonus1, bonus2){
//                     ↓
//                  this.ename
// hmm也想计算自己的薪资: 
paySalary.call(hmm, 2, 3, 4);