import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

// useEffect 让函数组件拥有处理副作用的能力, 类似于生命周期函数
// 可以把useEffect 看做componentDidMount,componentDidUpdate,componentWillUnMount三个函数的组合
function AppUseEffect() {
  // useEffect(() => {}) // componentDidMount,componentDidUpdate
  // useEffect(() => {}, [input]) // componentDidMount 挂载后
  // useEffect(() => ()=>{})  // componentWillUnMount 卸载前
  const [count, setCount] = useState(0)
  const [person, setPerson] = useState({name:'张三', age: 20})
  // 1. componentDidMount,componentDidUpdate
  useEffect(() => {
    console.log('componentDidMount/componentDidUpdate');
  })
  // 2. componentDidMount
  useEffect(() => {
    console.log('componentDidMount');
  }, [])
  // 3. componentWillUnMount
  useEffect(() => {
    return () => {
      console.log('componentWillUnMount');
    }
  }, [])

  // 4.[count] 中数据改变 触发useEffect
  useEffect(() => {
    console.log('componentDidMount count');
  }, [count])

  // 5. effect使用异步函数
  // 异步函数要写到 函数自调用中
  useEffect(() => {
    (async function () {
      let result = await getData()
      console.log(result);
    })()    
  }, [])

  function getData() {
    // 异步
    return new Promise(resolve=>{
      resolve({msg: 'hello'}) 
    })
  }

  return <div>
    <div>{count}</div>
    <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={()=>ReactDOM.unmountComponentAtNode(document.getElementById('root'))}>卸载组件</button>
    <div>修改person 不会触发 count的effect钩子函数</div>
    <div>{person.name}{person.age}</div>
    <button onClick={()=>setPerson({...person,age:21})}>修改person</button>
  </div>
}

export default AppUseEffect