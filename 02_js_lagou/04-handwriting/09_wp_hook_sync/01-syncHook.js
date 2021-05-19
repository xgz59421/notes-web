// hook: 普通钩子, 监听之间互不影响
// 1. 导入
const { SyncHook } = require('tapable')

// 2. 实例化
let hook = new SyncHook(['name', 'age'])

// 3. 监听
hook.tap('fn1', function (name, age) {
  console.log('fn1--->', name, age)
})

hook.tap('fn2', function (name, age) {
  console.log('fn2--->', name, age)
})

// 4. 触发监听
hook.call('zoe', 18)
