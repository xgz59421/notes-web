// prototype 原型对象的所有属性和方法，都能被实例对象共享 (继承)

function Student(sname, sage) {
  this.sname = sname
  this.sage = sage
  //!缺点:每次创建对象都会创建一个新的intr()
  // this.intr = function(){
  //   console.log(`I'm ${this.sname},I'm ${this.sage}`)
  // }
  //
}
// 公用方法放入原型链prototype
// 1.prototype 方法
Student.prototype.intr = function () {
  console.log(`I'm ${this.sname},I'm ${this.sage}`)
}
// 2.prototype 属性
Student.prototype.className = '初一2班'

console.log('----------------------------')
var lilei = new Student('Li Lei', 11)
var hmm = new Student('Han Meimei', 12)
lilei.intr()
hmm.intr()
console.log(lilei.className, hmm.className)
//升初二：
//错误
//lilei.className="初二2班";
//正确:
Student.prototype.className = '初二2班'
console.log(lilei.className, hmm.className)

console.log('----------------------------')
console.log(lilei)
console.log(hmm)

console.log('----------------------------')
console.log(lilei.__proto__ == Student.prototype) //true
//hmm的爹是不是Student的老公!
console.log(hmm.__proto__ == Student.prototype) //true
