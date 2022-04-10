const { app, BrowserWindow, Menu } = require('electron')
console.log(process.platform)
const createWindow = function () {
  let mainWin = new BrowserWindow({
    title: '自定义菜单',
    show: false,
    width: 800,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  // 定义自己需要的菜单项
  let menuTemp = [
    {
      label: '文件',
      submenu: [
        {
          label: '打开文件',
          click() {
            console.log('当前需要做的就是打开某一个具体的文件')
          }
        },
        {
          type: 'separator'
        },
        {
          label: '关闭文件夹'
        },
        {
          label: '关于',
          role: 'about'
        }
      ]
    },
    { label: '编辑' }
  ]

  // 利用上述的模板然后生成一个菜单项
  let menu = Menu.buildFromTemplate(menuTemp)

  // 将上述的自定义菜单添加到应用里
  Menu.setApplicationMenu(menu)

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