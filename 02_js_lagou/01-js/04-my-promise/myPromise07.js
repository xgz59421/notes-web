/*
  1. 抛出错误
  2. 异步的回调
*/
const PENDING = 'pending'; // 等待
const FULFILLED = 'fulfilled'; // 成功
const REJECTED = 'rejected'; // 失败

class MyPromise {
  constructor(executor){
    // TODO
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error)
    }
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
    while (this.successCallback.length) this.successCallback.shift()()
  }
  reject = reason => {
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.reason = reason;
    // 判断失败回调是否存在, 如果存在则执行
    // this.failCallback && this.failCallback(this.reason);
    while (this.failCallback.length) this.failCallback.shift()()
  }
  then = (successCallback, failCallback) => {
    
    let promise2 = new MyPromise((resolve, reject)=>{
        // TODO
      if (this.status == FULFILLED) {
        setTimeout(() => {
          try {
            let r = successCallback(this.value)
            resolvePromise(promise2, r, resolve, reject)
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else if(this.status == REJECTED) {
        setTimeout(() => {
          try {
            let r = failCallback(this.reason)
            resolvePromise(promise2, r, resolve, reject)
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else {
        // TODO
        // 异步情况
        // 等待状态, 将回调存储起来
        this.successCallback.push(()=>{
          // 异步成功回调
          setTimeout(() => {
            try {
              let r = successCallback(this.value)
              resolvePromise(promise2, r, resolve, reject)
            } catch (error) {
              reject(error);
            }
          }, 0);
        })
        this.failCallback.push(()=>{
          // 异步失败回调
          setTimeout(() => {
            try {
              let r = failCallback(this.reason)
              resolvePromise(promise2, r, resolve, reject)
            } catch (error) {
              reject(error);
            }
          }, 0);
        })
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

let promise = new MyPromise(function (resolve, reject) {
  // TODO
  // 测试1
  // throw new Error('executor error')
  // resolve('成功');

  // 测试3 
  // reject('失败');

  // 测试4 异步
  setTimeout(() => {
    resolve('成功1000');
  }, 2000);
});
promise.then(
  value => {
    console.log(value)
    // 测试2
    // throw new Error('then error')
    return 100
  },
  reason => {
    console.log(1);
    console.log(reason)
    // console.log(reason.message)
    return 200
  }
)
.then(
  value => console.log(value),
  reason => {
    console.log(2);
    console.log(reason)
    // console.log(reason.message)
  }
)


