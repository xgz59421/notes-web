const { ipcRenderer } = require('electron')

window.onload = function () {
  // 获取元素
  let aBtn = document.getElementsByTagName('button')

  // 01 采用异步的 API 在渲染进程中给主进程发送消息
  aBtn[0].addEventListener('click', () => {
    ipcRenderer.send('msg1', '当前是来自于渲染进程的一条异步消息')
  })

  // 02 采用同步的方式完成数据通信
  aBtn[1].addEventListener('click', () => {
    let val = ipcRenderer.sendSync('msg2', '同步消息')
    console.log(val)
  })


  // 当前区域是接收消息
  ipcRenderer.on('msg1Re', (ev, data) => {
    console.log(data)
  })

  ipcRenderer.on('mtp', (ev, data) => {
    console.log(data)
  })
}