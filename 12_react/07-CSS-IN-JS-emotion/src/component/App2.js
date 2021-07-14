// CSS 属性优先级
// props对象中的css 优先级高于组件内部的css

import React from 'react'
import {css} from '@emotion/core'


const styleChild = css`
  width: 100px;
  height: 100px;
  background: skyblue;
`
const styleParent = css({
  background: 'pink'
})

function Child(props) {
  return <div css= {styleChild} {...props}> child </div>
}
function Parent() {
  return <Child css={styleParent}/>
}

function App() {
  return (
    <Parent/>
  )
}

export default App
