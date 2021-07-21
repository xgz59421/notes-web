
// 只要是new 创建出来的都会继承Object.prototype
// Object.prototype.valueOf() 转换对象的原始值 
// Object.prototype.toString() 转换为字符串

// 1.new 创建, 可以将原始类型的值转为对象
console.log('--------无new 创建----------');
var v1 = Number(123);   
var v2 = String('abc');
var v3 = Boolean(true);
console.log(typeof v1, typeof v2, typeof v3); 
console.log(v1 === 123);

// 2.不带有new, 可以将任意类型的值，转为原始类型的值。
console.log('--------new 创建----------');
var v1 = new Number(123);
var v2 = new String('abc');
var v3 = new Boolean(true);
console.log(typeof v1, typeof v2, typeof v3); 
console.log(v1 === 123);

// 3.包装对象实例对应的原始类型的值
console.log('--------valueOf()----------');
var v1 = new Number(123).valueOf();
var v2 = new String('abc').valueOf();
var v3 = new Boolean(true).valueOf();
console.log(typeof v1, typeof v2, typeof v3);

// 4.返回对应的字符串形式
console.log('--------toString()----------');
var v1 = new Number(123).toString();
var v2 = new String('abc').toString();
var v3 = new Boolean(true).toString();
console.log(typeof v1, typeof v2, typeof v3); 

