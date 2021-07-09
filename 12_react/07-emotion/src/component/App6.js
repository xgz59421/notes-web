// CSS 嵌套选择器 &(表示组件本身)

import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 200px;
  height: 200px;
  color: green;
  background: skyblue;
  &:hover{
    background: pink;
  }
  &>span{
    color: yellow;
  }

`
function App() {
  return (
    <Container>
      container
      <span>span</span>
    </Container>
  )
}

export default App
