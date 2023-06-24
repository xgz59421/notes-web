// 设置 prototype 方法

function Student(sname, sage) {
  this.sname = sname
  this.sage = sage
}
Student.prototype.play = function () {
  console.log('play')
}
var father = {
  money: 1000,
  car: 'infiniti',
  eat: function () {}
}

var lilei = new Student('Li Lei', 11)

// 方法1：
// Student.prototype = father;
// var lilei=new Student("Li Lei",11);

// 方法2：
// lilei.__proto__ = father;

// 方法3：
Object.setPrototypeOf(lilei, father)

console.log('lilei.__proto__:')
console.table(lilei.__proto__)

console.log(lilei.money, lilei.car)
