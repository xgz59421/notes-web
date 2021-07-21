import React from 'react'
import {css} from '@emotion/core'
// CSS的 使用
// 样式组合 (优先级: 后调用高于先调用)

const style1 = css`
  width: 100px;
  height: 100px;
  background: skyblue;
`
const style2 = css({
  width: '100px',
  height: 100,
  background: 'pink'
})

function App() {
  console.log(style1);
  console.log(style2);
  return (
    <div>
      {/* <div css={{color: 'red'}}>App works</div> */}
      <div css={style1}>App skyblue</div>
      <div css={style2}>App pink</div>
      <div css={[style1, style2]}>样式组合</div>
    </div>
  )
}

export default App
