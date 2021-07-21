/*
  处理异步
  let promise = new MyPromise(function (resolve, reject) {
    setTimeout(() => {
      resolve('成功');
    }, 2000);
  });
  // then() 进入2秒等待, 直到执行了resolve()
  promise.then(
    value=>console.log(value), 
    reason=>console.log(reason)
  );
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
  successCallback = undefined;
  failCallback = undefined;
  resolve = value => {
    if (this.status !== PENDING) return;
    this.status = FULFILLED;
    this.value = value;
    // 判断成功回调是否存在, 如果存在则执行
    this.successCallback && this.successCallback(this.value);
  }
  reject = reason => {
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.reason = reason;
    // 判断失败回调是否存在, 如果存在则执行
    this.failCallback && this.failCallback(this.reason);
  }
  then = (successCallback, failCallback) => {
    if (this.status == FULFILLED) {
      successCallback(this.value)
    } else if(this.status == REJECTED) {
      failCallback(this.reason)
    } else {
      // 等待状态, 将回调存储起来
      this.successCallback = successCallback
      this.failCallback = failCallback
    }
  }
}

let promise = new MyPromise(function (resolve, reject) {
  setTimeout(() => {
    resolve('成功');
  }, 2000);
  // reject('失败');
});
promise.then(
  value=>console.log(value), 
  reason=>console.log(reason)
);
