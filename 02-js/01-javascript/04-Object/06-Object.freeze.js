//  冻结：既禁止添加删除属性，又禁止修改属性值
var obj = {
  id: 1001,
  name: 'scott'
}
//判断obj是否被冻结
console.log('1判断obj是否被冻结')
console.log(Object.isFrozen(obj))
//冻结后,不允许对现有属性及属性值有任何修改,不允许扩展
//isExtensible:false, configurable: false, writable: false,
console.log('冻结obj')
Object.freeze(obj)
console.log('2判断obj是否被冻结')
console.log(Object.isFrozen(obj))
console.log('isExtensible:')
console.log(Object.isExtensible(obj))
console.log('getOwnPropertyDescriptor:')
console.log(Object.getOwnPropertyDescriptor(obj, 'id'))

//尝试新增age
obj.age = 18
//尝试修改name
obj.name = 'tom'
//打印obj
console.log(obj)
