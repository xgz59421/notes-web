const { app, BrowserWindow, Menu } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
const Store = require('electron-store')
const menuTemp = require('./src/utils/menuTemp.js')

Store.initRenderer()

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 650,
    minWidth: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      webSecurity: true
    }
  })
  // const urlLocation = isDev ? 'http://localhost:8080' : path.join(__dirname, '../dist/index.html')
  // const urlLocation = 'http://localhost:8080'
  const urlLocation = path.join(__dirname, './dist/index.html')
  mainWindow.loadURL(urlLocation)

  // 打开开发者工具
  mainWindow.webContents.openDevTools()
  // 添加自定义的原生菜单
  const menu = Menu.buildFromTemplate(menuTemp)
  Menu.setApplicationMenu(menu)
})
