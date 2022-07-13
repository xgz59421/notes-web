import imgSrc from '../img/01.wb.png'
console.log(imgSrc)
import '../css/img.css'

function packImg() {
  const div = document.createElement('div')

  // 1. 创建 img 标签，设置 src 属性
  const img = document.createElement('img')
  img.width = 600

  // 1.1 如果不配置esModule, 注意在require后加 '.default'
  // img.src = require('../img/01.wb.png').default

  // 1.2 配置当中设置 esModule: false
  // img.src = require('../img/01.wb.png')

  // 1.3 采用 采用 import
  img.src = imgSrc

  div.appendChild(img)

  // 2. css 设置背景图片
  const cssimg = document.createElement('div')
  cssimg.className = 'bgBox'
  div.appendChild(cssimg)

  return div
}

document.body.appendChild(packImg())
