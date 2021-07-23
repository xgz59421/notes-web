//基本数据类型: number,string,bool,undefined,null, symbol
//引用数据类型: array,object,function

// 判断方法 
// 1. typeof
console.log(typeof null); // 注意 typeof null === 'object'
// console.log(typeof null === 'object');

// 2. instanceof 判断是否是某个类的实例
console.log({} instanceof Object);

// 3. Object.prototype.toString
console.log(Object.prototype.toString.call('hello'));//[object String]
console.log(Object.prototype.toString.call(true))//[object Boolean]
console.log(Object.prototype.toString.call(123));//[object Number]
console.log(Object.prototype.toString.call(null));//[object Null]
console.log(Object.prototype.toString.call(undefined));//[object Undefined]

// 4. constructor
console.log('hello'.constructor == String);
console.log(true.constructor == Boolean);
// console.log(undefined.constructor == Object);

console.log('------------------------');
//1.基本数据存储
var a = 1;
var b = a;  //使用栈内存 会copy一份数据
a = 3;
console.log(b);

//2.引用数据存储
var person1 = {
   name: "tom",
   age: 18
}
var person2 = person1;
person1.name = "lucy";
//使用同一个堆内存保存数据, 两个栈内存保存地址,并且指向同一个堆内存中的数据
console.log(person2);