const { remote } = require('electron')

window.addEventListener('DOMContentLoaded', () => {
  let oBtn = document.getElementById('btn')
  oBtn.addEventListener('click', () => {
    let subWin = new remote.BrowserWindow({
      parent: remote.getCurrentWindow(),
      width: 200,
      height: 200,
      modal: true
    })
    subWin.loadFile('sub.html')
    subWin.on('close', () => {
      subWin = null
    })
  })
})