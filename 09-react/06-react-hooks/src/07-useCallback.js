import React, { memo, useState, useCallback } from 'react'

function AppUseCallback() {
  // useCallback 性能优化, 缓存函数, 使组件渲染时得到相同的函数实例
  const [count, setCount] = useState(0)
  // const resetCount = ()=>{
  //   setCount(0)
  // }
  const resetCount = useCallback(()=>setCount(0), [setCount],)
  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>+</button>
      <Foo resetCount={resetCount}/>
    </div>
  )
}

let Foo = memo(
  function Foo(props) {
    console.log('foo组件被渲染了');
    return <div>
      我是foo组件
      <button onClick={props.resetCount}>resetCount</button>
    </div>
  }
)

export default AppUseCallback
