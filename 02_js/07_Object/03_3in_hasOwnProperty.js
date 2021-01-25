function Hero() {
  //放在构造函数中的属性,将成为孩子的自有属性
  // this.name = "jscript"
}
Hero.prototype.name = "javascript";
Hero.prototype.run = function () {
  console.log('im run');
}

var hero1 = new Hero();
hero1.age = 18;


//1.判断哪个属性是 自有属性 还是 原型属性
console.log("1. hasOwnProperty的使用:");
console.log(hero1.hasOwnProperty("age") ? "age是自有属性" : "age是自有属性");
console.log(hero1.hasOwnProperty("name") ? "name是自有属性 " : "name是原型属性");

//2.判断哪个属性可用 
console.log("2. in的使用:");
console.log("age" in hero1);
console.log("name" in hero1);
console.log("salary" in hero1);

// 3. 删除属性
console.log('delete');
console.log(hero1.name, hero1.age);
delete hero1.age; //删除了自有属性
delete Hero.prototype.name; //删除了原型属性
console.log(hero1.name, hero1.age);