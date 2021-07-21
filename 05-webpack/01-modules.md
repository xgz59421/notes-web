```js
`commonJS`: (in Node.js)
`是以同步模式加载模块`
`规范`:
  1. 一个文件就是一个模块
  2. 每个模块都有单独的作用域
  3. 通过`module.exports`导出
  4. 通过`require`函数载入模块

'AMD': (算是过渡)
'Asynchronous Module Definition'
'库: Require.js'

'Es Moduels': (in Browers)
'ES2015 (ES6)'
'特性':
  1. 自动采用严格模式, 忽略'use strict'
  2. 每个模块都是单独`私有的作用域`
    <script type="module">
      var foo = 100
      console.log(foo)
      console.log(this) // 不会是window
    </script>
    <script type="module">
      console.log(foo)
    </script>
  3. Es Moduels 是通过CORS去请求外部JS模块的
  4. Es Moduels 的Script标签会延迟执行脚本
  5. ES6是新特性, 低版本的浏览器基本不支持, 添加type="module"的属性
  6. 必须在服务才能运行
```

`es modules 的导入和导出`:
```js
`export.js` :
  // 分开导出
  // export var name = 'foo module'
  // export function hello () {
  //   console.log('hello')
  // }
  // export class Person {}
  // 一起导出
  var name = 'foo module'
  function hello () {}
  class Person {}
  export { name, hello, Person }
`import.js`
  import { name, hello, Person } from './export.js'
  
  // 0. 导入模块成员变量是只读的
  // name = 'tom' // 报错

  // 1. 以./ ../开头, js不可省略
  // import { name } from './module.js'

  // 2. 导入项目绝对路径
  // import { name } from '/04-import/module.js'  

  // 3. 导入外部js, 类似cdn 路径
  // import { name } from 'http://localhost:3000/04-import/module.js'

  // 4. 导出所有成员
  // import * as mod from './module.js'

  //5. 动态导入模块
  // import('./module.js').then(function (module) {
  //   console.log(module)
  // })

  // 6. default
  // import { name, age, default as title } from './module.js'
  // abc 相当于 default as abc
  // import abc, { name, age } from './module.js' 
  
  // 7. 导出导入的成员
  // import { Button } from './button.js'
  // import { Avatar } from './avatar.js'
  // export { Button, Avatar }
  // 简写如下
  // export { default as Button } from './button.js'
  // export { Avatar } from './avatar.js'

```

`es modules 在 node.js中运行`: 
```js
  详情查看示例, (略, 了解即可)
```