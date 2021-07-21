// as 属性:  使用元素的样式, 更改元素种类

import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
  color: red;
`
function App() {
  return (
    <Button as='a' href='#'>button</Button>
  )
}

export default App
