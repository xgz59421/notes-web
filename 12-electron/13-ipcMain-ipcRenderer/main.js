const { app, BrowserWindow, ipcMain, Menu } = require('electron')

const createWindow = function () {

  let mainWin = new BrowserWindow({
    show: false,
    width: 800,
    title: '拉勾教育',
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    }
  })

  let temp = [
    {
      label: 'send',
      click() {
        BrowserWindow.getFocusedWindow().webContents.send('mtp', '来自于自进程的消息')
      }
    }
  ]

  let menu = Menu.buildFromTemplate(temp)
  Menu.setApplicationMenu(menu)

  mainWin.loadFile('index.html')
  mainWin.webContents.openDevTools()

  mainWin.on('ready-to-show', () => {
    mainWin.show()
  })

  mainWin.on('close', () => {
    mainWin = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})

// 主进程接收消息操作
ipcMain.on('msg1', (ev, data) => {
  console.log(data)
  ev.sender.send('msg1Re', '这是一条来自于主进程的异步消息')
})

ipcMain.on('msg2', (ev, data) => {
  console.log(data)
  ev.returnValue = '来自于主进程的同步消息'
})