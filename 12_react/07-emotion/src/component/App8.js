// 全局样式 Global

import React from 'react'
import {css, Global} from '@emotion/core'

const styles = css`
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: red;
  }
`

function Demo() {
  return <div><a href='#'>我是Demo中的 a标记</a></div>
}
function App() {
  return (
    <div>
      <Global styles={styles}/>
      <a href='#'>我是a标记</a>
      <Demo/>
    </div>
  )
}

export default App
