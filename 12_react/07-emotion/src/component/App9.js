// 关键帧动画

import React from 'react'
import {css, keyframes} from '@emotion/core'

const move = keyframes`
  0% {
    background: skyblue;
    left: 0;
    top: 0;
  }
  100% {
    background: pink;
    left: 600px;
    top: 300px;
  }
`
const box =css`
  width: 100px;
  height: 100px;
  position: absolute;
  animation: ${move} 2s ease infinite alternate;
`
// ease 运动形式
// infinite 无限循环
// alternate 终点到起点
function App() {
  return (
    <div css={box}>App workds</div>
  )
}

export default App
