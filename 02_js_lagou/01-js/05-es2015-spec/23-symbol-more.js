// Symbol 补充

console.log(
  // Symbol() === Symbol()
  Symbol('foo') === Symbol('foo')
)

// Symbol 全局注册表 ----------------------------------------------------
console.log('-----------Symbol.for-----------');
const s1 = Symbol.for('foo')
const s2 = Symbol.for('foo')
console.log(s1 === s2)

console.log(
  Symbol.for(true) === Symbol.for('true')
)

// 内置 Symbol 常量 ---------------------------------------------------
console.log('--------内置 Symbol 常量---------');
console.log(Symbol.iterator)
console.log(Symbol.hasInstance)

const obj2 = {
  [Symbol.toStringTag]: 'XObject'
}
console.log(obj2.toString())

// Symbol 属性名获取 ---------------------------------------------------
console.log('---------Symbol 属性名获取----------');
const obj = {
  [Symbol()]: 'symbol value',
  foo: 'normal value'
}

for (var key in obj) {
  console.log(key)
}
console.log(Object.keys(obj)) // 获取不到symbol 
// console.log(JSON.stringify(obj))

console.log(Object.getOwnPropertySymbols(obj))
