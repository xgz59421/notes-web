// Promise 方式的 AJAX

function ajax (url) {
  return new Promise(function (resolve, reject) {
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
var url = './api/users.json'
// url = './api/users222.json'
ajax(url).then(function (res) {
  console.log(res)
}, function (error) {
  console.log(error)
})

// js 没有 xhr 
// 执行命令
// yarn webpack-dev-server 05-promise-ajax.js --open