import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

function AppUseEffectDemo() {
  function onScroll() {
    console.log('滚动了');
  }
  // 1. 滚动时打印
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  },[])
  // 2. 引用计数
  const [count, setCount] = useState(0)
  useEffect(() => {
    let timer = setInterval(() => {
      setCount((count)=>{
        let newCount = count + 1
        document.title = newCount
        return newCount
      })
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  })
  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>ReactDOM.unmountComponentAtNode(document.getElementById('root'))}>销毁组件</button>
    </div>
  )
}

export default AppUseEffectDemo

