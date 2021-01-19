
"use strict";
var eric={
  eid:1001,
  ename:"埃里克",
  salary:12000
}
// defineProperties/defineProperty 
// 1. value:  实际替属性保存属性值
// 2. writable:  控制是否可修改该属性值
// 3. enumerable:  控制是否可用for in循环遍历到该属性
// 4. configurable:
      // 控制2件事: 
      // 1. 是否可删除该属性
      // 2. 是否可修改前两个开关
      // 强调: 一旦改为false，不可逆
// 5. get: [Function: get]
// 6. set: [Function: set]

//公司要求: 
//eid禁止修改——只读
//ename禁止删除
//salary禁止用for in随意遍历
Object.defineProperties(eric,{
  eid:{
    writable:false,//只读
    configurable:false//禁止修改writable开关——双保险
  },
  ename:{
    configurable:false //禁止删除ename属性
  },
  salary:{
    enumerable:false,//禁止for in遍历
    configurable:false//禁止修改enumerable开关——双保险
  }
});

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

//尝试遍历eric中每个属性
for(var key in eric){
  console.log(`${key} : ${eric[key]}`)
}
console.log(eric);
// //enumerable:只防for in不防.salary
console.log(eric.salary);