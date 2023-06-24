// keys 遍历可枚举的属性，只包含对象本身可枚举属性，不包含原型链可枚举属性
let arr = ['a', 'b', 'c']
let obj = { foo: 'bar', baz: 42 }
let ArrayLike = { 0: 'a', 1: 'b', 2: 'c' }

Object.keys(arr) // ['0', '1', '2']
Object.keys(obj) // ["foo","baz"]
Object.keys(ArrayLike) // ['0', '1', '2']
