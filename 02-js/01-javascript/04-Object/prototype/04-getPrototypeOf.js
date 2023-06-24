function Hero() {
  //放在构造函数中的属性,将成为孩子的自有属性
  // this.name = "jscript"
}
Hero.prototype.name = 'javascript'
Hero.prototype.run = function () {
  console.log('im run')
}

var hero1 = new Hero()

console.log(Object.getPrototypeOf(hero1))
// console.log(Hero.prototype);
// console.log(hero1.__proto__);
console.log(Object.getPrototypeOf(hero1) == Hero.prototype)
