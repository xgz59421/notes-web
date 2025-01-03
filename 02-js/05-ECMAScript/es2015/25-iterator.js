// 迭代器（Iterator）
// 所有能被'for of'循环的遍历的数据类型, 必须实现'Iterator'接口
const set = new Set(['foo', 'bar', 'baz'])

const iterator = set[Symbol.iterator]()

console.log(iterator.next());  // { value: 'foo', done: false }
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());  // done 为true 循环结束
console.log(iterator.next());  // { value: undefined, done: true }

while (true) {
  const current = iterator.next()
  if (current.done) {
    break // 迭代已经结束了，没必要继续了
  }
  console.log(current.value)
}
