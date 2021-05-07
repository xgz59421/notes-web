// Object.assign 方法

// const source1 = {
//   a: 123,
//   b: 123
// }

// const source2 = {
//   b: 789,
//   d: 789
// }

// const target = {
//   a: 456,
//   c: 456
// }
// 将多个源对象的属性复制到一个目标对象中, 相同的值会被覆盖掉
//                              目标对象, 源对象...
// const result = Object.assign(target, source1, source2)

// console.log(target)
// console.log(result === target)

// 应用场景

function func (obj) {
  // obj.name = 'func obj'
  // console.log(obj)

  const funcObj = Object.assign({}, obj)
  funcObj.name = 'func obj'
  console.log(funcObj)
}

const obj = { name: 'global obj' }

func(obj)
console.log(obj)
