// 1. 以./ ../开头, js不可省略
// import { name } from './module.js'

// 2. 导入项目绝对路径
// import { name } from '/04-import/module.js'  

// 3. 导入外部js, 类似cdn 路径
// import { name } from 'http://localhost:3000/04-import/module.js'  
// console.log(name)

// --------------
// 相当于加载
// import {} from './module.js'
// import './module.js'

// ---------------
// 导出所有的模块成员
// import * as mod from './module.js'
// console.log(mod)

// ---------------
// var modulePath = './module.js'
// import { name } from modulePath
// console.log(name)
// 代码中不可以这样使用
// if (true) {
//   import { name } from './module.js'
// }
// 而是这样,  import 返回一个promise
import('./module.js').then(function(module) {
  console.log(module)
})

// ----------------

// import { name, age, default as title } from './module.js'
// abc 相当于 default as abc
import abc, { name, age } from './module.js'
console.log(name, age, abc)