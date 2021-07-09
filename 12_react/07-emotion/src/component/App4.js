// 为任何组件添加样式

import React from 'react'
import styled from '@emotion/styled'

function Demo({className}) {
  return <div className={className}>Demo</div>;
}

// 1. 字符串写法
const Fancy = styled(Demo)`
  color: red
`;
// 2. 对象写法
const Fancy2 = styled(Demo)({
  color: 'skyblue'
})

function App() {
  return (
    <div>
      <Fancy/>
      <Fancy2/>
    </div>
  )
}

export default App
