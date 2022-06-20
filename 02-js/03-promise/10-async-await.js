// async await 
// async await 是 generator生成器的 语法糖
function ajax (url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response)
      } else {
        reject(new Error(xhr.statusText))
      }
    }
    xhr.send()
  })
}

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

const promise = main()
// console.log('promise:', promise)
promise.then(() => {
  console.log('all completed')
})

// // test
// function sayhellow(name) {
//   return new Promise((resolve, reject) => {
//     console.log(name, "say hi!")
//     resolve(name) // 返回name字符串
//   })
// }
// // 点名
// async function CallRoll() {
//   await sayhellow('tom')
//   console.log('tom end')
//   await sayhellow('jack')
//   console.log('jack end')
//   await sayhellow('lucy')
//   console.log('lucy end')
//   await sayhellow('lily')
//   console.log('lily end')
// }

// CallRoll()