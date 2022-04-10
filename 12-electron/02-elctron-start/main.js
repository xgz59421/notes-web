const { app, BrowserWindow } = require('electron')

// 当 app 启动之后执行窗口创建等操作
app.whenReady().then(() => {
  const mainWin = new BrowserWindow({
    width: 600,
    height: 400
  })

  // 在当前窗口中加载指定界面让它显示具体的内容
  mainWin.loadFile('index.html')

  mainWin.on('close', () => {
    console.log('close~~~~~~')
  })
})

app.on('window-all-closed', () => {
  console.log('all windows is closed')
  app.quit()
})