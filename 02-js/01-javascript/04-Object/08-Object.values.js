// values 遍历可枚举的属性值，只包含对象本身可枚举属性值，不包含原型链可枚举属性值
let person = {
  name: 'lily',
  age: 25,
  height: 160
}
console.log(Object.values(person))
