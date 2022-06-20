// Promise 链式调用

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
/** 错误示例: 回调地狱
$.get('/url1', function (data1) {
  $.get('/url2', data1, function (data2) {
    $.get('/url3', data2, function (data3) {
      $.get('/url4', data3, function (data4) {
         // 略微夸张了一点点
      })
    })
  })
})
 */

/** 错误示例: 嵌套使用 Promise
ajax('/api/urls.json').then(function (urls) {
  ajax(urls.users).then(function (users) {
    ajax(urls.users).then(function (users) {
      ajax(urls.users).then(function (users) {
        ajax(urls.users).then(function (users) {

        })
      })
    })
  })
})
 */

// promise的then方法, 会返回一个全新的promise对象
// then((resolve, reject)=>{  })
ajax('/api/users.json')
  .then(function (value) {
    console.log(1111)
    return ajax('/api/urls.json')
  }) // => Promise
  .then(function (value) {
    console.log(2222)
    console.log(value)
    return ajax('/api/urls.json')
  }) // => Promise
  .then(function (value) {
    console.log(3333)
    return ajax('/api/urls.json')
  }) // => Promise
  .then(function (value) {
    console.log(4444)
    return 'foo'
  }) // => Promise
  .then(function (value) {
    console.log(5555)
    console.log(value)
  })
