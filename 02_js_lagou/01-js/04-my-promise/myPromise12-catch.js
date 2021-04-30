/*
  catch
*/
const PENDING = 'pending'; // 等待
const FULFILLED = 'fulfilled'; // 成功
const REJECTED = 'rejected'; // 失败

class MyPromise {
  constructor(executor){
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
    // 如果then 没有参数就 将参数返回
    successCallback = successCallback ? successCallback : value=>value;
    failCallback = failCallback ? failCallback : reason=>{throw reason}
    let promise2 = new MyPromise((resolve, reject)=>{
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
  finally = (callback)=>{
    return this.then(value=>{
      // 用 MyPromise.resolve  可以处理 异步等待效果
      return MyPromise.resolve(callback().then(()=>value))
      // callback()
      // return value;
    }, reason=>{
      return MyPromise.resolve(callback().then(()=>{throw reason}))
      // callback()
      // throw reason;
    })
  }
  catch = (failCallback)=>{
    return this.then(undefined, failCallback)
  }
  static all = (array)=> {
    let result = [];
    let index = 0;
    return new MyPromise((resolve, reject)=>{
      function addData(key, value) {
        result[key] = value;
        index++;
        if (index == array.length) {
          // 所有异步操作之后执行resovle()
          resolve(result)
        }
      } 
      for (let i = 0; i < array.length; i++) {
        const current = array[i];
        if (current instanceof MyPromise) {
          // 有一个失败则执行 reject()
          current.then(value=>addData(i, value), reason=>reject(reason));
        } else {
          addData(i, current); 
        }  
      }
      // 如果有异步操作, 则获取不到异步操作的值
      // resolve(result)
    })

  }
  // 判断参数是 普通数据 还是 promise对象
  static resolve = (value) =>{
    if (value instanceof MyPromise) return value
    // 普通数据
    return new MyPromise((resolve, reject)=>resolve(value))
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
// let promise = new Promise((resolve, reject)=>{
//   // 测试1
//   reject('faile')
// })
// promise
//   .then(value=>console.log(value))
//   .catch(err=>console.log(err))

let promise = new MyPromise((resolve, reject)=>{
  // reject('success')
  reject('faile')
})
promise
  .then(value=>console.log(value))
  .catch(err=>console.log(err))




