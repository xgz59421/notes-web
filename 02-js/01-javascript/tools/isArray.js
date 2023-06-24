// 判断变量是否为数组

let arr = [1, 2, 3, 4, 5]
let obj = {}

//
if (Array.isArray === undefined) {
  Array.isArray = function (obj) {
    console.log('use my isArray')
    return obj.__proto__ == Array.prototype
    // return Object.getPrototypeOf(obj) == Array.prototype;
    // return obj.constructor == Array;
    // return obj instanceof(Array);
  }
}
console.log('Array.isArray:', Array.isArray(arr), Array.isArray(obj))

// 1. Array.isArray
console.log(Array.isArray(arr))

// 2. instanceof
console.log(arr instanceof Array)

// 3. Object.prototype.toString.call
console.log(Object.prototype.toString.call(arr) === '[object Array]')

// 4. __proto__
console.log(arr.__proto__ === Array.prototype)

// 5. Object.getPrototypeOf
console.log(Object.getPrototypeOf(arr) === Array.prototype)

// 6. Array.prototype.isPrototypeOf
console.log(Array.prototype.isPrototypeOf(arr))

// 7. constructor
console.log(arr.constructor === Array)
