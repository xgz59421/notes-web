import React, { useEffect, useRef, useState } from 'react'

function AppUseRef() {
  // useRef 获取DOM对象
  // 保存数据 (跨组件周期), 
  // 1. 即使组件重新渲染,保存的数据仍然还在
  // 2. 保存的数据被更改, 不会触发组件重新渲染 (不是状态数据)
  // const ref = useRef(initialValue)
  const box = useRef()

  const [count, setCount] = useState(0)
  let timer = useRef();
  useEffect(() => {
    timer.current = setInterval(() => {
      // count 变化, 组件重新渲染, timer又被重新赋值为null
      setCount(count=>count + 1)  
    }, 1000);
    return () => {
      clearInterval(timer.current)
    }
  }, [])
  const stopCount = ()=> {
    console.log(timer);
    clearInterval(timer.current)
  }
  return (
    <div ref={box}>
      <button onClick={()=>console.log(box)}>获取DOM对象</button>
      <div>{count}</div>
      <button onClick={stopCount}>停止</button>
    </div>
  )
}

export default AppUseRef
