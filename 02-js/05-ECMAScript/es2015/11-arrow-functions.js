// 箭头函数
// (1). 去掉function，在()和{}之间加=>
// (2). 如果只有一个形参，可以省略()
// (3). 如果函数体只有一句话，可以省略{}
//   如果仅剩的一句话，还是return，则必须省略return。

// function inc (number) {
//   return number + 1
// }

// 最简方式
// const inc = n => n + 1

// 完整参数列表，函数体多条语句，返回值仍需 return
const inc = (n, m) => {
  console.log('inc invoked')
  return n + 1
}

console.log(inc(100))

const arr = [1, 2, 3, 4, 5, 6, 7]

// arr.filter(function (item) {
//   return item % 2
// })

// 常用场景，回调函数
arr.filter(i => i % 2)
