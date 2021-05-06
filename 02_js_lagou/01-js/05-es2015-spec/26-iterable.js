// 实现可迭代接口（Iterable）

// const obj = {
//   // iterable
//   [Symbol.iterator]: function () {
//     // iterator
//     return {
//       next: function () {
//         return {
//           value: 'zce',
//           done: true   //true 循环终止
//         }
//       }
//     }
//   }
// }
// for (const item of obj) {
//   console.log('循环体', item)
// }


const obj = {
  store: ['foo', 'bar', 'baz'],
  // iterable
  [Symbol.iterator]: function () {
    let index = 0;
    const self = this;
    // iterator
    return {
      next: function () {
        const result = {
          value: self.store[index],
          done: index >= self.store.length
        }
        index++
        return result
      }
    }
  }
}

for (const item of obj) {
  console.log('循环体', item)
}
