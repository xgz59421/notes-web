const { app, BrowserWindow, Menu } = require('electron')

const createWindow = function () {
  let mainWin = new BrowserWindow({
    show: false,
    width: 800,
    height: 600,
    icon: './lg.ico',
    title: '拉勾教育',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  // 01 自定义菜单的内容
  let menuTemp = [
    {
      label: '角色',
      submenu: [
        { label: '复制', role: 'copy' },
        { label: '剪切', role: 'cut' },
        { label: '粘贴', role: 'paste' },
        { label: '最小化', role: 'minimize' },
      ]
    },
    {
      label: '类型',
      submenu: [
        { label: '选项1', type: 'checkbox' },
        { label: '选项2', type: 'checkbox' },
        { label: '选项3', type: 'checkbox' },
        { type: "separator" },
        { label: 'item1', type: "radio" },
        { label: 'item2', type: "radio" },
        { type: "separator" },
        { label: 'windows', type: 'submenu', role: 'windowMenu' }
      ]
    },
    {
      label: '其它',
      submenu: [
        {
          label: '打开',
          icon: './open.png',
          accelerator: 'ctrl + o',
          click() {
            console.log('open操作执行了')
          }
        }
      ]
    }
  ]

  // 02 依据上述的数据创建一个 menu 
  let menu = Menu.buildFromTemplate(menuTemp)

  // 03 将上述的菜单添加至 app 身上
  Menu.setApplicationMenu(menu)

  mainWin.loadFile('index.html')

  mainWin.on('ready-to-show', () => {
    mainWin.show()
  })

  mainWin.on('close', () => {
    mainWin = null
  })
}

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  app.quit()
})
