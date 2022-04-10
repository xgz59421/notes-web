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
ipcMain.on('openWin2', (ev, data) => {
  // 接收到渲染进程中按钮点击信息之后完成窗口2 的打开
  let subWin1 = new BrowserWindow({
    width: 400,
    height: 300,
    parent: BrowserWindow.fromId(mainWinId),
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      // 解决报错: Uncaught ReferenceError: require is not defined
      contextIsolation:false
    }
  })
  subWin1.loadFile('subWin1.html')

  subWin1.on('close', () => {
    subWin1 = null
  })

  // subWin1直接拿到 sub 进程的窗口对象，因此我们需要考虑的就是等到它里面的所有内容
  // 窗口加载完成之后再执行数据发送
  subWin1.webContents.on('did-finish-load', () => {
    subWin1.webContents.send('its', data)
  })
})

ipcMain.on('stm', (ev, data) => {
  // 当前我们需要将 data 经过 main 进程转交给指定的渲染进程
  // 此时我们可以依据指定的窗口 ID 来获取对应的渲染进程，然后执行消息的发送
  let mainWin = BrowserWindow.fromId(mainWinId)
  mainWin.webContents.send('mti', data)
})

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})