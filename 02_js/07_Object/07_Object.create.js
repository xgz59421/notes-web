//* Object.create:直接基于一个现有父对象，创建子对象，无需构造函数
// a. 在Object.create()中想给新对象添加新属性，必须使用和defineProperties相同的语法！
// b. 因为有时，开关的默认值为true，而有时开关的默认值为false，没准！
//    所以，最稳妥的办法！就是把所有开关都写出来！完全自定义，自己说了算！
var father={
  money:10000000000,
  car:"infiniti"
}

var lilei = Object.create(father,{
  //错误
  //phone:"iphone 12"
  phone:{
    value:"iPhone 12",
    writable:true,
    enumerable:true,
    configurable:false
  }
});
console.log(lilei.money, lilei.car);
console.log(lilei);