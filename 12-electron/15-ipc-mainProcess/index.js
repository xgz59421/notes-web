const { ipcRenderer } = require('electron')

window.onload = function () {
  // 获取元素
  let oBtn = document.getElementById('btn')

  oBtn.addEventListener('click', () => {
    ipcRenderer.send('openWin2', '来自于 index 进程')

  })

  // 接收消息
  ipcRenderer.on('mti', (ev, data) => {
    console.log(data)
  })
}