/*
  同一个promise对象下面的then方法是可以被调用多次的 (返回的是promise)
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
      // TODO
      // 判断 r 的值是普通值还是promise对象
      // 如果是普通值 直接调用resolve 
      // 如果是promise对象 查看promsie对象返回的结果 
      // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
      if (this.status == FULFILLED) {
        let r = successCallback(this.value)
        resolvePromise(r, resolve, reject)
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

function resolvePromise(r, resolve, reject) {
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
function other () {
  return new MyPromise( (resolve, reject)=> {
    resolve('MyPromise other'); 
  })
}

let promise = new MyPromise(function (resolve, reject) {
  resolve('成功');
  // reject('失败');
});
promise.then(
  value=>{
    console.log(value)
    // 返回一个 mypromise对象
    return other()
  },
  reason=>console.log(reason)
)
.then(
  value => console.log(value),
  reason => console.log(reason)
)

