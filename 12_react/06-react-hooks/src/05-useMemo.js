import React, { useMemo, useState } from 'react'

function AppUseMemo() {
  // useMemo 类似计算属性, 可检测值的变化,计算出新值
  // useMemo 会缓存计算结果

  const [count, setCount] = useState(0)
  const result = useMemo(() => {
    return count * 2
  }, [count])
  return (
    <div>
      <div>{count}</div>
      <div>useMemo: {result}</div>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default AppUseMemo
