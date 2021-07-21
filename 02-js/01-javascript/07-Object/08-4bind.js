
// 永久替换this
// 问题: call和apply都是临时替换一次this
// 解决: 用bind创建一个对象专属的函数，并永久绑定函数中的this为指定的对象。


// window对象中, 有一个公用的计算器薪资的函数
function paySalary(base, bonus1, bonus2){
  console.log(`${this.ename}的总工资是:${base+bonus1+bonus2}`);
}
var lilei = { ename:"Li Lei" };
var hmm = { ename:"Han Meimei" };

// lilei 计算自己的薪资
var lileiSalary = paySalary.bind(lilei);
lileiSalary(5000, 1000, 1)
lileiSalary(5000, 1000, 2)
lileiSalary(5000, 1000, 3)

// hmm 计算自己的薪资, 固定基本工资
var hmmSalary = paySalary.bind(hmm, 5000);
hmmSalary(1000, 2)
hmmSalary(1000, 3)
hmmSalary(1000, 4)

// hmm 计算自己的薪资
var hmmSalary = paySalary.bind(hmm, 5000, 1000, 5);
hmmSalary()

