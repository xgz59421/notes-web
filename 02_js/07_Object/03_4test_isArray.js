//  使用4种方式实现,isArray:检查对象是否是数组类型
//用typeof检查原始类型:
var n = 10;
var s = "hello";
var b = true;
var nu = null; //空地址
var un;
console.log(typeof n, typeof s, typeof b, typeof nu, typeof un);
//typeof无法精确识别引用类型对象 
var fun = function () {};
var arr = [1, 2, 3];
var now = new Date();
var reg = /\d{6}/;
console.log(typeof fun, typeof arr, typeof now, typeof reg);

// 1.判断对象的爹如果是Array.prototype,则是数组
console.log(
  arr.__proto__ == Array.prototype,
  now.__proto__ == Array.prototype,
  reg.__proto__ == Array.prototype
);
// 2.getPrototypeOf()== Array.prototype,则是数组
console.log(
  Object.getPrototypeOf(arr) == Array.prototype,
  Object.getPrototypeOf(now) == Array.prototype,
  Object.getPrototypeOf(reg) == Array.prototype
);
// 3.判断妈妈:如果子对象强行访问父亲的constructor
console.log(
  arr.constructor == Array,
  now.constructor == Array,
  reg.constructor == Array,
);
// 4.instanceOf 判断是否是Array实例
console.log(
  arr instanceof(Array),
  now instanceof(Array),
  reg instanceof(Array),
);


// test      
if (Array.isArray === undefined) {
  Array.isArray = function (obj) {
    console.log("use my isArray");
    return obj.__proto__ == Array.prototype;
    // return Object.getPrototypeOf(obj) == Array.prototype;
    // return obj.constructor == Array;
    // return obj instanceof(Array);
  }
}
console.log(
  "isArray:",
  Array.isArray(arr),
  Array.isArray(now),
  Array.isArray(reg)
);