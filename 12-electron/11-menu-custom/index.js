const { remote } = require('electron')
const Menu = remote.Menu
const MenuItem = remote.MenuItem

window.addEventListener('DOMContentLoaded', () => {
  // 获取要应的元素
  let addMenu = document.getElementById('addMenu')
  let menuCon = document.getElementById('menuCon')
  let addItem = document.getElementById('addItem')

  // 自定义全局变量存放菜单项
  let menuItem = new Menu()

  // 生成自定义的菜单
  addMenu.addEventListener('click', () => {
    // 创建菜单 
    let menuFile = new MenuItem({ label: '文件', type: 'normal' })
    let menuEdit = new MenuItem({ label: '编辑', type: 'normal' })
    let customMenu = new MenuItem({ label: '自定义菜单项', submenu: menuItem })

    // 将创建好的自定义菜单添加至 menu 
    let menu = new Menu()
    menu.append(menuFile)
    menu.append(menuEdit)
    menu.append(customMenu)

    // 将menu 放置于 app 中显示
    Menu.setApplicationMenu(menu)
  })

  // 动态添加菜单项
  addItem.addEventListener('click', () => {
    // 获取当前 input 输入框当中的内容
    let con = menuCon.value.trim()
    if (con) {
      menuItem.append(new MenuItem({ label: con, type: 'normal' }))
      menuCon.value = ''
    }
  })
})