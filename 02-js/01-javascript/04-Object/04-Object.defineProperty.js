// "use strict";
var eric = {
  eid: 1001,
  ename: '埃里克',
  salary: 12000
}
// 尝试获得eric对象的eid属性底层的缩微小对象
var obj = Object.getOwnPropertyDescriptor(eric, 'eid')
console.log(obj)
console.log('-----------------------------------')
// 公司要求:
// eid禁止修改(只读)
Object.defineProperty(eric, 'eid', {
  writable: false, //只读
  configurable: false //禁止修改writable
})
Object.defineProperty(eric, 'ename', {
  // ename禁止删除
  configurable: false
})
// salary禁止用for in随意遍历
Object.defineProperty(eric, 'salary', {
  value: 300, //实际替属性保存属性值
  writable: true, //控制是否可修改该属性值
  enumerable: false, //控制是否可用for in循环遍历到该属性
  // 强调: 只防for in, 不防点属性 (.salary)
  configurable: false
})
// 试图重新打开writable开关
// Object.defineProperty(eric,"eid",{
//   writable:true,
//   configurable:true
// })//Cannot redefine property: eid

//         重新定义    属性
// 试图修改eid属性
// eric.eid=-2;//报错:Cannot assign to read only property 'eid'
// 不能赋值给只读属性eid
// 尝试删除ename属性:
// delete eric.ename;//报错:Cannot delete property 'ename'
// 不能删除ename属性
// 尝试遍历eric中每个属性
for (var key in eric) {
  console.log(`${key} : ${eric[key]}`)
}
console.log(eric)
// enumerable:只防for in 不防.salary
console.log(eric.salary)
