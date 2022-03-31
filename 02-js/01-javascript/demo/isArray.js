
// 判断变量是否为数组 

let arr = [1, 2, 3, 4, 5];
let obj = {}

// 1. Array.isArray
console.log(Array.isArray(arr));

// 2. instanceof
console.log(arr instanceof Array);

// 3. Object.prototype.toString.call
console.log(Object.prototype.toString.call(arr) === '[object Array]');

// 4. __proto__
console.log(arr.__proto__ === Array.prototype);

// 5. Object.getPrototypeOf
console.log(Object.getPrototypeOf(arr) === Array.prototype);

// 6. Array.prototype.isPrototypeOf
console.log(Array.prototype.isPrototypeOf(arr));

// 7. constructor
console.log(arr.constructor === Array);
