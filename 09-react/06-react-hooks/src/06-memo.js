import React, { memo, useState } from 'react'

function AppMemo() {
  // 默认组件数据变化会全部渲染
  // memo方法: 如果组件没有数据变化, 阻止组件更新
  // 类似组件中的PureComponent 和 shuoldComponentUpdate
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>+</button>
      <Foo/>
    </div>
  )
}

let Foo = memo(
  function Foo() {
    console.log('foo组件被渲染了');
    return <div>
      我是foo组件
    </div>
  }
)

export default AppMemo
