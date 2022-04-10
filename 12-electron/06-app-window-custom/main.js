const { app, BrowserWindow } = require('electron')

// 将创建窗口独立成一个函数
function createWindow() {
  let mainWin = new BrowserWindow({
    frame: false,
    width: 800,
    height: 400,
    webPreferences: {  // 用于控制窗口加载的网页是否集成 node.js 环境
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })
  mainWin.loadFile('index.html')
  mainWin.on('close', () => {
    console.log('mainWin is closed')
    mainWin = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  console.log('all window is closed')
  app.quit()
})