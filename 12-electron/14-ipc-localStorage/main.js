const { app, BrowserWindow, ipcMain } = require('electron')

// 定义全局变量存放主窗口 Id
let mainWinId = null

const createWindow = function () {
  let mainWin = new BrowserWindow({
    frame: true,
    show: false,
    title: '拉勾教育',
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      // 解决报错: Uncaught ReferenceError: require is not defined
      contextIsolation:false
    }
  })

  mainWin.loadFile('index.html')

  mainWinId = mainWin.id

  mainWin.on('ready-to-show', () => {
    mainWin.show()
  })

  mainWin.on('close', () => {
    mainWin = null
  })
}

// 接收其它进程发送的数据，然后完成后续的逻辑
ipcMain.on('openWin2', () => {
  // 接收到渲染进程中按钮点击信息之后完成窗口2 的打开
  let subWin1 = new BrowserWindow({
    width: 400,
    height: 300,
    parent: BrowserWindow.fromId(mainWinId),
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })
  subWin1.loadFile('subWin1.html')

  subWin1.on('close', () => {
    subWin1 = null
  })
})
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})