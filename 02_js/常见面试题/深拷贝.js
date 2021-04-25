// 深拷贝不会拷贝引用类型的引用，而是将引用类型的值全部拷贝一份

// 1.乞丐版的深拷贝 JSON.stringify()以及JSON.parse()
// 它是不可以拷贝 undefined ， function， RegExp 等等类型
var objbase = {
  a: 1,
  b: 2,
  c: [1,2,3,4,5],
  d: undefined,
  e: function () {console.log('f');},
  f: /公安|公共安全/g,
  g: null
}
var strjson = JSON.stringify(objbase);
// console.log(strjson, typeof strjson);
var objjson = JSON.parse(strjson);
// console.log(objjson, typeof objjson);
objjson.a = 2;
console.log(objjson);
console.log('初始obj',objbase);
