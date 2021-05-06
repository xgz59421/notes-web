// ECMAScript 2017

const obj = {
  foo: 'value1',
  bar: 'value2'
}

// 1.Object.values -----------------------------------------------------------

// console.log(Object.values(obj))

// 2.Object.entries ----------------------------------------------------------

// console.log(Object.entries(obj))

// for (const [key, value] of Object.entries(obj)) {
//   console.log(key, value)
// }

// console.log(new Map(Object.entries(obj)))

// 获取完整描述信息
// 3.Object.getOwnPropertyDescriptors ----------------------------------------

const p1 = {
  firstName: 'Lei',
  lastName: 'Wang',
  // 只读属性
  get fullName () {
    return this.firstName + ' ' + this.lastName
  }
}

console.log(p1.fullName)

const p2 = Object.assign({}, p1)
p2.firstName = 'zce' // 不会改变只读属性
console.log(p2.fullName)

const descriptors = Object.getOwnPropertyDescriptors(p1)
console.log(descriptors)
const p3 = Object.defineProperties({}, descriptors)
p3.firstName = 'zce'
console.log(p3.fullName)

// String.prototype.padStart / String.prototype.padEnd  --------------------

// const books = {
//   html: 5,
//   css: 16,
//   javascript: 128
// }

// // for (const [name, count] of Object.entries(books)) {
// //   console.log(name, count)
// // }

// for (const [name, count] of Object.entries(books)) {
//   console.log(`${name.padEnd(16, '-')}|${count.toString().padStart(3, '0')}`)
// }

// 在函数参数中添加尾逗号  -----------------------------------------------------

// function foo (
//   bar,
//   baz,
// ) {

// }

// const arr = [
//   100,
//   200,
//   300,
// ]
// const arr = [
//   100,
//   200,
//   300,
//   400,
// ]
// const arr = [
//   100,
//   200,
//   300
// ]
// const arr = [
//   100,
//   200,
//   300,
//   400
// ]
