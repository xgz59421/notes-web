// 常用 Promise 静态方法
// Promise.resolve

function ajax (url) {
  return new Promise(function (resolve, reject) {
    // foo()
    // throw new Error()
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}

// 1. promise.resolve 快速创建一个成功的promise对象
// Promise.resolve('foo')
//   .then(function (value) {
//     console.log(value)
//   })
// 等同于
// new Promise(function (resolve, reject) {
//   resolve('foo')
// })

// 如果传入的是一个 Promise 对象，Promise.resolve 方法原样返回
// var promise = ajax('/api/users.json')
// var promise2 = Promise.resolve(promise)
// console.log(promise === promise2)

// 2. 如果传入的是带有一个跟 Promise 一样的 then 方法的对象，
// Promise.resolve 会将这个对象作为 Promise 执行
// Promise.resolve({
//   then: function (onFulfilled, onRejected) {
//     onFulfilled('foo')
//   }
// })
// .then(function (value) {
//   console.log(value)
// })


// 3.Promise.reject 快速创建一个失败的promise对象
// Promise.reject(new Error('rejected'))
//   .catch(function (error) {
//     console.log(error)
//   })

Promise.reject('anything')
  .catch(function (error) {
    console.log(error)
  })
