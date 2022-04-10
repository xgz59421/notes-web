const { app, BrowserWindow } = require('electron')

// 将创建窗口独立成一个函数
function createWindow() {
  let mainWin = new BrowserWindow({
    x: 100,
    y: 100,  // 设置窗口显示的位置，相对于当前屏幕的左上角
    show: false,  // 默认情况下创建一个窗口对象之后就会显示，设置为false 就不会显示了
    width: 800,
    height: 400,
    maxHeight: 600,
    maxWidth: 1000,
    minHeight: 200,
    minWidth: 300,  // 可以通过 min max 来设置当前应用窗口的最大和最小尺寸
    resizable: false  // 是否允许缩放应用的窗口大小 
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