// 创建一个对象，保存lilei的个人信息和自我介绍

// var lilei = new Object();
// lilei.name="Li Lei";
// lilei["age"]=11;
// lilei.intr=function(){
//   console.log(`I'm ${this.name}, I'm ${this.age}`);
// }

// 等同于
var lilei = {
  // {}仅仅是new Object()的缩写
  // 不是作用域的意思
  name:"Li Lei",
  age:11,
  intr:function(){
    console.log(`I'm ${lilei.name}, I'm ${lilei.age}`)
  }
}
console.log('--------------访问对象的属性----------------');
console.log(lilei.age);
console.log(lilei["age"]);
lilei.intr();
lilei.age++;//过了一年，李磊长了一岁: 
lilei.intr();
console.log(lilei);


