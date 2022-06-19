
## promise
- [1. 概念](#1)
- [2. promise](#2)
- [3. async await](#3)
- [4. 手写promise](#4)
--------
><h2 id='1'>1. 概念</h2>
```js
`js 异步编程`
  1.主体代码放在主线程调用栈中压栈执行, 异步代码放入消息队列中等待执行
  2.Eventloop(监听调用栈和消息队列中的任务) 监听调用栈执行完毕后, 开始执行消息队列中的任务
  3.依次把消息队列中的任务压栈执行, 直至消息队列中无任务
`EventLoop 事件循环`
  主线程从消息度列中不断的读取事件
`消息队列`
  1.消息队列是暂时存放异步任务的地方,等到同步代码执行完毕以后
  2.Eventloop会从消息队列中依次取出异步任务放到调用栈中再次执行。
`宏任务`
  1.当前调用栈中执行的代码为宏任务
  2.新增的宏任务,在宏任务和微任务执行后, 如setTimeout回调放入消息队列, 通过EventLoop压栈执行
`微任务`
  宏任务执行完立即执行的,如Promise,process.nextTick
```

><h2 id='2'>2. promise</h2>
```js
  var promise = new Promise(function (resolve, reject){
    if(1) resolve();
    if(0) reject();
  }
  promise
    .then(value=>{}, reason=>{})
    .catch(err=>console.log(err))

  ----------all-----------

  Promise.all(['a', 'b', promise, other (), 'end'])
    .then(result=>{
      // [ 'a', 'b', '成功1', '成功2', 'end' ]
      console.log(result); 
    })
  ----------resolve-----------
  Promise.resolve(10)
    .then(value=>console.log(value))
  Promise.resolve(other())
    .then(value=>console.log(value))
```

><h2 id='3'>3. async await</h2>
```js
async function main () {
  try {
    const users = await ajax('/api/users.json')
    console.log(users)

    const posts = await ajax('/api/posts.json')
    console.log(posts)

    const urls = await ajax('/api/urls.json')
    console.log(urls)
  } catch (e) {
    console.log(e)
  }
}
```
><h2 id='4'>4. 手写promise</h2>
```js
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
```