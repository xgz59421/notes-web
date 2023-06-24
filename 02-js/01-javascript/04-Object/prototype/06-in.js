function Hero() {
  //放在构造函数中的属性,将成为孩子的自有属性
  // this.name = "jscript"
}
Hero.prototype.name = 'javascript'
Hero.prototype.run = function () {
  console.log('im run')
}

var hero1 = new Hero()
hero1.age = 18

// 判断哪个属性可用
console.log('2. in的使用:')
console.log('age' in hero1)
console.log('name' in hero1)
console.log('salary' in hero1)
