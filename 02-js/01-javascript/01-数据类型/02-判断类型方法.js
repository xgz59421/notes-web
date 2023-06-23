// 判断方法
// 1. typeof
console.log(typeof null) // 'object'
// console.log(typeof null === 'object');

// 2. instanceof 判断是否是某个类的实例
console.log({} instanceof Object) // true

// 3. Object.prototype.toString
console.log(Object.prototype.toString.call('hello')) // [object String]
console.log(Object.prototype.toString.call(true)) // [object Boolean]
console.log(Object.prototype.toString.call(123)) // [object Number]
console.log(Object.prototype.toString.call(null)) // object Null]
console.log(Object.prototype.toString.call(undefined)) // [object Undefined]

// 4. constructor
console.log('hello'.constructor == String) // true
console.log(true.constructor == Boolean) // true
// console.log(undefined.constructor == Object) // 报错, undefined没有constructor这个属性
