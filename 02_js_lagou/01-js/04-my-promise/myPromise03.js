/*
  处理异步 多个 then()的情况
  successCallback = undefined;
  将回调改为数组
  successCallback = [];
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
  //TODO then()可能会有多个 将回调改为数组
  successCallback = [];
  failCallback = [];
  resolve = value => {
    if (this.status !== PENDING) return;
    this.status = FULFILLED;
    this.value = value;
    // 判断成功回调是否存在, 如果存在则执行
    //TODO
    // this.successCallback && this.successCallback(this.value);
    while (this.successCallback.length) this.successCallback.shift()(this.value)
  }
  reject = reason => {
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.reason = reason;
    // 判断失败回调是否存在, 如果存在则执行
    //TODO
    // this.failCallback && this.failCallback(this.reason);
    while (this.failCallback.length) this.failCallback.shift()(this.reason)
  }
  then = (successCallback, failCallback) => {
    if (this.status == FULFILLED) {
      successCallback(this.value)
    } else if(this.status == REJECTED) {
      failCallback(this.reason)
    } else {
      // 等待状态, 将回调存储起来
      //TODO
      this.successCallback.push(successCallback)
      this.failCallback.push(failCallback)
    }
  }
}

let promise = new MyPromise(function (resolve, reject) {
  setTimeout(() => {
    resolve('成功');
    // reject('失败');
  }, 2000);
  // resolve('成功');
  // reject('失败');
});
promise.then(
  value=>{
    console.log(1)
    console.log(value)
  },
  reason=>console.log(reason)
);
promise.then(
  value=>{
    console.log(2)
    console.log(value)
  },
  reason=>console.log(reason)
);
promise.then(
  value=>{
    console.log(3)
    console.log(value)
  },
  reason=>console.log(reason)
);
