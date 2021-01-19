// 先打散数组，再替换this
//*a.问题:原函数需要多个实参值，但是多个实参值却是放在一个数组中给的。出现了不一致。
//*b.解决:用apply()函数，代替call()
//*c.如何:要调用的函数.apply(替换this的对象,数组)
// func.apply(thisValue, [arg1, arg2, ...])

//window对象中, 有一个公用的计算器薪资的函数
function paySalary(base, bonus1, bonus2){
  console.log(`${this.ename}的总工资是:${base+bonus1+bonus2}`);
}

var lilei = { ename:"Li Lei" };
var hmm = { ename:"Han Meimei" };

//lilei想用计算器函数计算自己的薪资
var arr=[10000, 2000, 3000];
//错误: 
// paySalary.call(lilei,arr);//undefined,...
//paySalary(         base,   bonus1, bonus2)
//          this.ename
paySalary.apply(lilei,      arr          );
//            |          打散
//            |    10000,2000 ,3000
//            |      ↓     ↓     ↓
//paySalary(  |    base,bonsu1,bonus2)
//            ↓
//           this.ename
paySalary.apply(hmm,      [1,2,3]          );

// 利用这一点，可以做一些有趣的应用
// 1. 求数组中最大的数
var array = [10, 2, 4, 15, 9];
var max = Math.max.apply(null, array) // 15
console.log('max:', max);

// 2. 转换类似数组的对象为数组
var array = Array.prototype.slice.apply({
  0: 1,
  1: 2, 
  2: 2, 
  length: 3,
}) // [];
console.log(array);