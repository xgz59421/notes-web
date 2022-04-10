const { ipcRenderer } = require('electron')

window.onload = function () {
  // 获取元素
  let oBtn = document.getElementById('btn')

  oBtn.addEventListener('click', () => {
    ipcRenderer.send('openWin2')

    // 打开窗口2之后，保存数据至....
    localStorage.setItem('name', '拉勾教育')
  })
}