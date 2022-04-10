const { app, BrowserWindow, shell, Menu } = require('electron')

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
app.on('window-all-closed', () => {
  app.quit()
})