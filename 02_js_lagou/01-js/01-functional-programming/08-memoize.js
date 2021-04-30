// 记忆函数
const _ = require('lodash')

function getArea (r) {
  console.log(r)
  return Math.PI * r * r
}

// let getAreaWithMemory = _.memoize(getArea)
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))


// 模拟 memoize 方法的实现

function memoize (f) {
  let cache = {}
  return function () {
    let key = JSON.stringify(arguments)
    // if (call[key]) {
    //   return call[key]
    // } else {
    //   call[key] = fn(...arguments)
    //   return call[key]
    // }
    // call[key] = call[key] || fn(...arguments)
    cache[key] = cache[key] || f.apply(f, arguments)
    return cache[key]
  }
}

let getAreaWithMemory = memoize(getArea)
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(5))