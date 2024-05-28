// 截取数组元素,  不会改变原始数组
// array.slice(start, end)
// start 可选(包含), end 可选(不包含)
// 返回: 返回一个新的数组

console.log('----------array.slice()---------------')
var array = [1, 2, 3, 4, 5, 6]
console.log('array', array)
// [1, 2, 3, 4, 5, 6]
console.log('array.slice()', array.slice())
// [1, 2, 3, 4, 5, 6]
console.log('array.slice(0)', array.slice(0))
// [1, 2, 3, 4, 5, 6]
console.log('array.slice(3)', array.slice(3))
// [4, 5, 6]
console.log('array.slice(-2)', array.slice(-2))
// [5, 6]
console.log('array.slice(3,4)', array.slice(3, 4))
// [4]
console.log('array.slice(-3,-1)', array.slice(-3, -1))
// [4, 5]
console.log('array', array)
// [1, 2, 3, 4, 5, 6]

// console.log('-------obj转数组--------');
// var obj = { 0: 'a', 1: 'b', length: 2 }
// var arr = Array.prototype.slice.call(obj)
// console.log(obj);
// console.log(arr);