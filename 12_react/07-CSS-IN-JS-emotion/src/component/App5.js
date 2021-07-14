// 通过父组件设置子组件样式

import React from 'react'
import styled from '@emotion/styled'

// // 1. 字符串写法
// const Child = styled.div`
//   color: red;
// `
// const Parent = styled.div`
//   ${Child} {
//     color: green;
//   }
// `

// 2. 对象写法
const Child = styled.div({
  color: 'red'
})
const Parent = styled.div({
  [Child]: {
    color: 'green'
  }
})

function App() {
  return (
    <div>
      <Child>child</Child>
      <Parent><Child>parent child</Child></Parent>
    </div>
  )
}

export default App
