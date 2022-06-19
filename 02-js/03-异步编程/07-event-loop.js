/** EventLoop 事件循环
 * https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide
 * 在JavaScript中，任务被分为两种，一种宏任务（MacroTask）也叫Task，一种叫微任务（MicroTask）
 * 宏任务: script代码, setTimeout, setInterval, setImmediate(IE)
 * 微任务: promise, await, process.nextTick(node独有), MutationObserver
 * 
 * ---------------主线程--------------->
 * 宏任务(script代码)-----> 微任务(Event Queue) -------> 宏任务(Event Queue)
 * 
 * 注意:
 * 1. 只有async的函数就是普通函数
 * 2. new promise 是同步的任务，会被放到主进程中去立即执行
 */

async function async1() {
  console.log('1')
  await async2()
  console.log('2')
}
async function async2() {
  console.log('3')
}

console.log('4')

setTimeout(() => {
  console.log('5')
}, 0)

async1()

new Promise(function(reslove) {
  console.log('6')
  reslove()
}).then(function() {
  console.log('7')
})

console.log('8')

// script start
// async1 start
// async2
// promise1
// script end
// asnyc1 end
// promise2
// setTimeOut
