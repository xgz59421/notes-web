const { clipboard, nativeImage } = require('electron')

window.onload = function () {
  // 获取元素
  let aBtn = document.getElementsByTagName('button')
  let aInput = document.getElementsByTagName('input')
  let oBtn = document.getElementById('clipImg')
  let ret = null

  aBtn[0].onclick = function () {
    // 复制内容
    ret = clipboard.writeText(aInput[0].value)
  }

  aBtn[1].onclick = function () {
    // 粘贴内容
    aInput[1].value = clipboard.readText(ret)
  }

  oBtn.onclick = function () {
    // 将图片放置于剪切板当中的时候要求图片类型属于 nativeImage 实例
    let oImage = nativeImage.createFromPath('./msg.png')
    clipboard.writeImage(oImage)

    // 将剪切板中的图片做为 DOM 元素显示在界面上
    let oImg = clipboard.readImage()
    let oImgDom = new Image()
    oImgDom.src = oImg.toDataURL()
    document.body.appendChild(oImgDom)
  }
}