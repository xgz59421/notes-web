import React, { useEffect, useState } from 'react'

function Test() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('执行定时器');
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  })
  return <div>Test</div>
}

function App() {
  const [state, setState] = useState(true)
  return (
    <div>
      { state && <Test/> }
      <button onClick={()=>setState(prev => !prev)}>toggle</button>
    </div>
  )
}

export default App
