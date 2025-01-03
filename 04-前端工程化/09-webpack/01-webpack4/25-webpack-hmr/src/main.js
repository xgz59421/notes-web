import createEditor from './editor'
import background from './better.png'
import './global.css'

const editor = createEditor()
document.body.appendChild(editor)

const img = new Image()
img.src = background
document.body.appendChild(img)

// ============ 以下用于处理 HMR，与业务代码无关 ============

// console.log(createEditor)

// 手动处理editor.js 的 `hmr` 热替换
// 本模块仍然不支持hmr
if (module.hot) {
  let lastEditor = editor
  module.hot.accept('./editor', () => {
    // console.log('editor 模块更新了，需要这里手动处理热替换逻辑')
    // console.log(createEditor)
    // 模拟实现 hmr
    const value = lastEditor.innerHTML
    document.body.removeChild(lastEditor)
    const newEditor = createEditor()
    newEditor.innerHTML = value
    document.body.appendChild(newEditor)
    lastEditor = newEditor
  })
  // 处理 图片的 hmr
  module.hot.accept('./better.png', () => {
    img.src = background
    console.log(background)
  })
}
