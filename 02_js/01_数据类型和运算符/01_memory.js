//基本数据类型: number,string,bool,undefined,null
//引用数据类型: array,object,function

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