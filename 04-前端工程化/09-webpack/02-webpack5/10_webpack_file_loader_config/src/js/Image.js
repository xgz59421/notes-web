import imgSrc from '../img/01.wb.png'
import '../css/img.css'


function packImg() {
  const div = document.createElement('div')

  // 1. img: src
  const img = document.createElement('img')
  img.width = 600
  // img.src = require('../img/01.wb.png').default
  // img.src = require('../img/01.wb.png')
  img.src = imgSrc
  div.appendChild(img)

  // 2. css: 设置背景图片
  const cssImg = document.createElement('div')
  cssImg.className = 'bgBox'
  div.appendChild(cssImg)

  return div
}

document.body.appendChild(packImg())
