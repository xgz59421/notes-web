// Promise all

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

// promise.all 同时请求ajax, 等待数组中所有任务成功结束才执行 .then

// var promise = Promise.all([
//   ajax('/api/users.json'),
//   ajax('/api/posts.json')
// ])
// promise.then(function (values) {
//   console.log(values)
// }).catch(function (error) {
//   console.log(error)
// })

// promise.all 如果遇到错误会 reject 退出
// 本例解决 promise.all问题
var promise = Promise.all([
  ajax('/api/users.json'),
  ajax('/api/posts.json'),
  ajax('/api/posts1.json'),
  ajax('/api/posts.json'),
  ajax('/api/posts.json')
  // p1,p2,p3,p4,p5
].map(p=>p.catch(() => undefined)))
promise
  .then(res=> {
    console.log('then', res)
  })
  .catch((err)=>{
    console.log('catch', err)
  })