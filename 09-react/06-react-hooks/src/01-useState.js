import React, { useState }  from 'react'

function AppUseState() {
  const [count, setCount] = useState(0)
  const [person, setPerson] = useState({name:'张三', age: 20})

  function handleCount() {
    setCount(count=>{
      let newCount = count+1
      // setState 是异步的
      document.title = newCount  // 异步
      return newCount
    })
    // document.title = newCount
  }
  return <div>
    <div>{count}</div>
    {/* <button onClick={()=>setCount(count+1)}>+</button> */}
    <button onClick={handleCount}>+</button>
    
    <div>{person.name } {person.age}</div>
    <button onClick={()=>setPerson({...person, name:'李四'})}>修改</button>
  </div>
}

export default AppUseState