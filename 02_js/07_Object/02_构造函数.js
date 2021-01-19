//-js类:
  // 基于构造函数（constructor）和原型链（prototype）
//-构造函数的特点有两个
  // 1.函数体内部使用了this关键字
  // 2.生成对象的时候，必须使用new命令
//-new
  // 1.创建对象实例
  // 2.指向构造函数的prototype属性
  // 3.赋值给函数内部的this

// 定义构造函数描述所有学生类型的对象的统一结构
// 要求: 1.所有学生都要有姓名和年龄属性
//       2.所有学生都要会做自我介绍
function Student(sname,sage){
  this.sname=sname;
  this.sage=sage;
  //!缺点:每次创建对象都会创建一个新的intr()
  this.intr = function(){
    console.log(`I'm ${this.sname},I'm ${this.sage}`)
  }
  
}

console.log('----------------------------');
var lilei = new Student("Li Lei", 11);
var hmm = new Student("Han Meimei", 12);
lilei.intr();
hmm.intr();
console.log('----------------------------');
console.log(lilei);
console.log(hmm)


