const { app, BrowserWindow } = require('electron')

const createWindow = function () {
  let mainWin = new BrowserWindow({
    show: false,
    width: 800,
    height: 400,
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