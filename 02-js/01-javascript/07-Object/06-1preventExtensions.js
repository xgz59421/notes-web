// 防扩展: 禁止添加新属性

// "use strict";
var obj = {};
// 判断一个对象是否是可扩展的
console.log("1.判断一个对象是否是可扩展的");
console.log(Object.isExtensible(obj));
// 添加属性id
obj.id = 1001;
console.log(obj);
// 禁止添加新属性
Object.preventExtensions(obj);
obj.name = "scott";
console.log(obj);
console.log("2.判断一个对象是否是可扩展的");
console.log(Object.isExtensible(obj));