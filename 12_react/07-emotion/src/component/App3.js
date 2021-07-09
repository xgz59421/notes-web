// 创建样式化组件

import React from 'react'
import styled from '@emotion/styled'

// 1. 字符串写法
const Button = styled.button`
  width: 100px;
  height: 30px;
  color: black;
  background: ${props=>props.bgColor || 'skyblue'}
`

// 2. 对象写法
// const Container = styled.div({
//   width: '1000px',
//   background: 'pink',
//   margin: '0 auto'
// })
// 覆盖样式写法一:
// const Container = styled.div(props=>({
//   width: props.w||1000,
//   background: 'pink',
//   margin: '0 auto'
// }))
// 覆盖样式写法二:
const Container = styled.div({
  width: '1000px',
  background: 'pink',
  margin: '0 auto'
}, props=>({
  width: props.w,
  background: props.bgColor
}))

function App() {
  return (
    <Container w={200} bgColor='red'>
      <Button bgColor='green'>我是按钮</Button>
    </Container>
  )
}

export default App
