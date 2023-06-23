// arr.includes(searchElement, fromIndex)
// fromIndex 可选
// 返回 bool

console.log([1, 2, 3].includes(2))     // true
console.log([1, 2, 3].includes(4))     // false
console.log([1, 2, 3].includes(3, 3))  // false
console.log([1, 2, 3].includes(3, -1)) // true
console.log([1, 2, NaN].includes(NaN)) // true

