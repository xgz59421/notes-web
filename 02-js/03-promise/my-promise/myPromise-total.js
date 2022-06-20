/*
Promise 是一个构造函数，是异步编程的一种解决方案。
所谓Promse,它本身就是一个容器，里面保存着异步操作的结果，这和回调函数类似。

Promise 容器本身不是异步的，而里面封装一个异步任务。
他有三种状态，即：1.pending(进行中)、2.resolved(成功)、3.rejected(失败)。状态只能变为一种。

尽可能还原 Promise 中的每一个 API, 并通过注释的方式描述思路和原理.
*/

// 3.Promise 中有三种状态
const PENDING = 'pending'; // 等待
const FULFILLED = 'fulfilled'; // 成功
const REJECTED = 'rejected'; // 失败

// 1.Promise 就是一个类 
class MyPromise {
  // 2.在执行这个类的时候 需要传递一个执行器进去 执行器会立即执行
  // 如果执行器有错误, 直接抛出
  constructor (executor) {
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error)
    }
  }

  status = PENDING;
  value = undefined;
  reason = undefined;
  callbackResolve = [];
  callbackReject = [];
  // 4.resolve和reject函数是用来更改状态的
  resolve = (value) => {
    // 5.一旦状态确定就不可更改
    if (this.status !== PENDING) return;
    this.status = FULFILLED;
    this.value = value;
    // 8.改为处理多个then
    // this.callbackResolve && this.callbackResolve(this.value);
    while (this.callbackResolve.length) this.callbackResolve.shift()();

  }
  reject = (reason) => {
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.reason = reason;
    // this.callbackReject && this.callbackReject(this.reason);
    while (this.callbackReject.length) this.callbackReject.shift()();
  }
  // 6.判断状态
  then = (callbackResolve, callbackReject) => {
    // 13. 如果then 没有参数就 将参数返回
    callbackResolve = callbackResolve ? callbackResolve : value=>value;
    callbackReject = callbackReject ? callbackReject : reason=>{throw reason};
    // 9.处理then链式调用(返回一个promise即可)
    let promise2 = new MyPromise((resolve, reject)=>{
      if (this.status == FULFILLED) {
        // 成功回调
        setTimeout(() => {
          try {
            let r = callbackResolve(this.value);
            // 10.处理返回值r是普通值还是promise
            resolvePromise(promise2, r, resolve, reject)
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else if (this.status == REJECTED) {
        // 失败回调
        setTimeout(() => {
          try {
            let r = callbackReject(this.reason);
            resolvePromise(promise2, r, resolve, reject)
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else {
        // 7.异步回调(先将回调保存起来)
        this.callbackResolve.push(()=>{
          setTimeout(() => {
            try {
              let r = callbackResolve(this.value);
              resolvePromise(promise2, r, resolve, reject)
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
        this.callbackReject.push(()=>{
          setTimeout(() => {
            try {
              let r = callbackReject(this.reason);
              resolvePromise(promise2, r, resolve, reject)
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    })
    return promise2;
  }
  // 16. finally
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
  // 17.catch
  catch = (failCallback)=>{
    return this.then(undefined, failCallback)
  }
  // 14. all
  static all = (array) => {
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
          current.then(value=>addData(i, value), reason=>reject(reason));
        } else {
          addData(i, current);
        }     
      }
    })
  }
  // 15. resolve
  static resolve = (value) =>{
    // promise对象直接返回
    if (value instanceof MyPromise) return value;
    // 普通数据
    return new MyPromise((resolve)=>resolve(value))
  }
}
function resolvePromise(promise2, r, resolve, reject) {
  // 12. 如果返回值是promise本身, 则会出现循环报错
  if (promise2 === r) {
    reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  // 11.如果是普通值 直接调用resolve 
  // 如果是promise对象 根据promise对象返回的结果 决定调用resolve 还是调用reject
  if (r instanceof MyPromise) {
    r.then(resolve, reject);
  } else {
    resolve(r);
  }
}



console.log('--------------test----------------');

function other () {
  return new MyPromise( (resolve, reject)=> {
    resolve('promise other'); 
  })
}
let promise = new MyPromise((resolve, reject) => {
  // 测试异步
  // setTimeout(() => {
  //   resolve('promise resolve');
  // }, 2000);
  // resolve('promise resolve');
  reject('promise reject');
})
promise.then(
  value => {
    console.log(value);
    // 测试返回普通纸 
    // return 100
    // 测试返回promise
    // return other()
  }
)
// 测试catch
.catch(err=>{
  console.log('catch');
  console.log(err)
})
// // 测试多个then
// promise.then(
//   value => console.log(value),
//   reason => console.log(reason)
// )
// 测试没有参数
// .then()
// .then(  
//   value => console.log(value),
//   reason => console.log(reason)
// )
// 测试all
// MyPromise.all(['a', 'b', promise, other (), 'end'])
//   .then(result=>{
//     // [ 'a', 'b', '成功1', '成功2', 'end' ]
//     console.log(result); 
//   })

// // 测试resolve
// MyPromise.resolve(10)
//   .then(value=>console.log(value))
// MyPromise.resolve(other())
//   .then(value=>console.log(value))


// 测试 返回了自己本身 promise
// let promise2 = new MyPromise(function (resolve, reject) {
//   resolve('成功');
// });
// // 返回了自己本身 promise
// let p1 = promise2.then(
//   value=>{
//     console.log(value)
//     // 返回一个 mypromise对象
//     return p1
//   },
//   reason=>console.log(reason)
// )
// p1.then(
//   value => console.log(value),
//   reason => console.log(reason.message)
// )

// // 测试finally
// function p1() {
//   return new MyPromise((resolve, reject)=>{
//     setTimeout(() => {
//       resolve('promise1 resolve')
//     }, 2000);
//   })
// }
// promise.finally(()=>{
//   console.log('finally');
//   // 测试2  要等待 p1 执行后  才执行then
//   return p1()
// })
// .then(value=>console.log(value), reason=>console.log(reason))