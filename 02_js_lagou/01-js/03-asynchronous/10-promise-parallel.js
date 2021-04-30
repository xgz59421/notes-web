// Promise 并行执行

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

// ajax('/api/users.json')
// ajax('/api/posts.json')

// promise.all 等待数组中所有任务成功结束才执行 .then

// var promise = Promise.all([
//   ajax('/api/users.json'),
//   ajax('/api/posts.json')
// ])

// promise.then(function (values) {
//   console.log(values)
// }).catch(function (error) {
//   console.log(error)
// })

// ajax('/api/urls.json')
//   .then(value => {
//     const urls = Object.values(value)
//     const tasks = urls.map(url => ajax(url))
//     return Promise.all(tasks)
//   })
//   .then(values => {
//     console.log(values)
//   })

// Promise.race 实现超时控制

const request = ajax('/api/posts.json')
const timeout = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('timeout')), 500)
})

// race 等待promise 数组成功完成第一个任务就结束 执行.then()
// 本例一般解决ajax 请求超时一种方式
Promise.race([
  request,
  timeout
])
.then(value => {
  console.log(value)
})
.catch(error => {
  console.log(error)
})
