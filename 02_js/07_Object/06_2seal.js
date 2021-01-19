// 密封: 既防扩展，又禁止删除！
var obj = {
  id: 1001,
  name: "scott"
};
console.log("1.是否可扩展");
console.log(Object.isExtensible(obj));
console.log("2.查看属性配置");
console.log(Object.getOwnPropertyDescriptor(obj, "id"));
//判断一个对象是否被密封
console.log("3.判断obj是否被密封");
console.log(Object.isSealed(obj));
//阻止添加新属性并将所有现有属性标记为不可配置
//configurable: false, isExtensible: false

Object.seal(obj);
console.log('------------------');
console.log("4.判断obj是否被密封");
console.log(Object.isSealed(obj));
console.log("5.是否可扩展");
console.log(Object.isExtensible(obj));
console.log("6.查看属性配置");
console.log(Object.getOwnPropertyDescriptor(obj, "id"));