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

// 删除属性
console.log(hero1.name, hero1.age)
delete hero1.age //删除了自有属性
delete Hero.prototype.name //删除了原型属性
console.log(hero1.name, hero1.age)
