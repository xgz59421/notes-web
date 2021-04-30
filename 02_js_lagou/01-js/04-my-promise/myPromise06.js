/*
  .then 返回了 自己本身 promise 报错
*/
const PENDING = 'pending'; // 等待
const FULFILLED = 'fulfilled'; // 成功
const REJECTED = 'rejected'; // 失败

class MyPromise {
  constructor(executor){
    executor(this.resolve, this.reject);
  }
  status = PENDING;
  value = undefined;
  reason = undefined;
  // then()可能会有多个 将回调改为数组
  successCallback = [];
  failCallback = [];
  resolve = value => {
    if (this.status !== PENDING) return;
    this.status = FULFILLED;
    this.value = value;
    // 判断成功回调是否存在, 如果存在则执行
    // this.successCallback && this.successCallback(this.value);
    while (this.successCallback.length) this.successCallback.shift()(this.value)
  }
  reject = reason => {
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.reason = reason;
    // 判断失败回调是否存在, 如果存在则执行
    // this.failCallback && this.failCallback(this.reason);
    while (this.failCallback.length) this.failCallback.shift()(this.reason)
  }
  then = (successCallback, failCallback) => {
    
    let promise2 = new MyPromise((resolve, reject)=>{
      if (this.status == FULFILLED) {
        // TODO
        // 为了返回promise2, 但是此刻promise2还没有生成, 所以将代码变为异步
        setTimeout(() => {
          let r = successCallback(this.value)
          resolvePromise(promise2, r, resolve, reject)
        }, 0);
      } else if(this.status == REJECTED) {
        failCallback(this.reason)
      } else {
        // 等待状态, 将回调存储起来
        this.successCallback.push(successCallback)
        this.failCallback.push(failCallback)
      }
    });
    return promise2
  }
}

function resolvePromise(promise2, r, resolve, reject) {
  // 如果promise2 === r 是自己本身 则会出现循环报错
  if (promise2 === r) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if (r instanceof MyPromise) {
    // promise对象
    // r.then(value=> resolve(value),  reason=> reject(reason))
    // 简化
    r.then(resolve, reject);
  }else{
    // 普通值
    resolve(r)
  }
}

// ------------------------------------
// 问题描述
// let p = new Promise((resolve, reject)=>{
//   resolve(100);
// })
// let p1 = p.then(function (value) {
//   console.log(value); 
//   // 返回了自己, 形成了promise的循环调用
//   // 运行会报错的
//   // Chaining cycle detected for promise #<Promise>
//   return p1;
// })
// p1.then(function (value) {
//   console.log(value);
// },function (reason) {
//   // console.log(reason.message);
//   console.log(reason);
// })


let promise = new MyPromise(function (resolve, reject) {
  resolve('成功');
  // reject('失败');
});
// TODO  返回了自己本身 promise
let p1 = promise.then(
  value=>{
    console.log(value)
    // 返回一个 mypromise对象
    return p1
  },
  reason=>console.log(reason)
)
p1.then(
  value => console.log(value),
  reason => console.log(reason.message)
)

