// waiterfallhook:瀑布沟子, 上一个监听的返回值,传递给下一个
const { SyncWaterfallHook } = require('tapable')

let hook = new SyncWaterfallHook(['name', 'age'])

hook.tap('fn1', function (name, age) {
  console.log('fn1--->', name, age)
  return 'ret1'
})

hook.tap('fn2', function (name, age) {
  console.log('fn2--->', name, age)
  return 'ret2'
})

hook.tap('fn3', function (name, age) {
  console.log('fn3--->', name, age)
  return 'ret3'
})

hook.call('zce', 33)
// zce 33
// ret1 33
// ret2 33
