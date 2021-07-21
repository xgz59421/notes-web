// bailhook: 熔断钩子, 某个监听返回undefined时后续不再执行
const { SyncBailHook } = require('tapable')

let hook = new SyncBailHook(['name', 'age'])

hook.tap('fn1', function (name, age) {
  console.log('fn1--->', name, age)
})

hook.tap('fn2', function (name, age) {
  console.log('fn2--->', name, age)
  // 熔断 (返回非undefined 可以继续监听后续钩子)
  // return 'ret'  //将不会执行fn3
  return undefined  //继续执行fn3
})

hook.tap('fn3', function (name, age) {
  console.log('fn3--->', name, age)
})

hook.call('lg', 100)
