import '../font/iconfont.css'
import '../css/index.css'

function packFont() {
  const div = document.createElement('div')

  const span = document.createElement('span')
  span.className = 'iconfont icon-linggan lg-icon'
  div.appendChild(span)

  return div
}

document.body.appendChild(packFont())
