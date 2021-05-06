// Generator 函数
// 可以通过 yield 关键字，把函数的执行流挂起，
// 为改变执行流程提供了可能，从而为异步编程提供解决方案

// function * foo () {
//   console.log('zce')
//   return 100
// }

// const result = foo()
// console.log(result) // Generator
// console.log(result.next())

// 生成器函数
function * foo () {
  console.log('1111')
  yield 100
  console.log('2222')
  yield 200
  console.log('3333')
  yield 300
}
// 创建生成器对象
const generator = foo()

console.log(generator.next()) // 第一次调用，函数体开始执行，遇到第一个 yield 暂停
console.log(generator.next()) // 第二次调用，从暂停位置继续，直到遇到下一个 yield 再次暂停
console.log(generator.next()) // 。。。
console.log(generator.next()) // 第四次调用，已经没有需要执行的内容了，所以直接得到 undefined
