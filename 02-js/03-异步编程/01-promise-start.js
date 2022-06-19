
/** Promise (语义: 承诺)
 * Promise 异步操作有三种状态：
 *  pending（进行中）、fulfilled（已成功）、rejected（已失败）
 * 优点: 
 *  1. 为多个回调函数中抛出的错误
 *  2. 执行多个异步操作
 *  3. 避免了层层嵌套的回调函数
 * 缺点:
 *  1. 一旦开始执行就无法取消
 *  2. 无法进度追踪
 */

let promise = new Promise(function (resolve, reject) {
  if (1) {
    resolve(100) // 承诺达成
  } else {
    reject(200) // 承诺失败
    // reject(new Error('promise rejected')) // 承诺失败
  }

})

promise.then(
  function (value) {
    // 即便没有异步操作，then 方法中传入的回调仍然会被放入队列，等待下一轮执行
    console.log('resolved', value)
  }, 
  function (error) {
    console.log('rejected', error)
  }
)

// promise.then(value=>console.log('resolved', value))
//        .catch(error=>console.log('rejected', error))

console.log('end')
