const { app, BrowserWindow, globalShortcut } = require('electron')

const createWindow = function () {
  let mainWin = new BrowserWindow({
    frame: true,
    show: false,
    title: '拉勾教育',
    icon: './lg.ico',
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  mainWin.loadFile('index.html')

  mainWin.on('ready-to-show', () => {
    mainWin.show()
  })

  mainWin.on('close', () => {
    mainWin = null
  })
}

app.on('ready', createWindow)

app.on('ready', () => {
  // 注册
  let ret = globalShortcut.register('ctrl + q', () => {
    console.log('快捷键注册成功')
  })

  if (!ret) {
    console.log('注册失败')
  }

  console.log(globalShortcut.isRegistered('ctrl + q'))

  console.log(ret, '~~~~~')

})

app.on('will-quit', () => {
  console.log(666)
  globalShortcut.unregister('ctrl + q')
  globalShortcut.unregisterAll()
})

app.on('window-all-closed', () => {
  app.quit()
})