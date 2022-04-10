const path = require('path')
const { shell, ipcRenderer } = require('electron')

// window.onload = function () {
//   // 1 获取元素 
//   let oBtn1 = document.getElementById('openUrl')
//   let oBtn2 = document.getElementById('openFolder')

//   oBtn1.addEventListener('click', (ev) => {
//     ev.preventDefault()

//     let urlPath = oBtn1.getAttribute('href')

//     shell.openExternal(urlPath)
//   })

//   oBtn2.addEventListener('click', (ev) => {
//     shell.showItemInFolder(path.resolve(__filename))
//   })
// }

ipcRenderer.on('openUrl', () => {
  let iframe = document.getElementById('webview')
  iframe.src = 'https://www.lagou.com/'
})