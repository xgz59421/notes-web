const { app, BrowserWindow } = require('electron')

// 将创建窗口独立成一个函数
function createWindow() {
  let mainWin = new BrowserWindow({
    show: true,
    width: 800,
    height: 600,
    frame: true,  // 用于自定义 menu ，设置为 false 可以将默认的菜单栏隐藏
    // transparent: true,
    autoHideMenuBar: true,
    icon: 'lg.ico',  // 设置一个图片路径，可以自定义当前应用的显示图标
    title: "拉勾教育",  // 自定义当前应用的显示标题
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
    console.log('mainWin is closed')
    mainWin = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  console.log('all window is closed')
  app.quit()
})