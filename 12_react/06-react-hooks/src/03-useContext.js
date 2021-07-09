import React, { createContext, useContext }  from 'react'

let countContext = new createContext()

function AppUseContext() {
  return <countContext.Provider value={100}>
    <Foo/>
  </countContext.Provider>
}

function Foo() {
  const value = useContext(countContext)
  return <div>我是Foo组件{value}</div>
  // return <countContext.Consumer>
  //   {
  //     value=>{
  //       return <div>{value}</div>
  //     }
  //   }
  // </countContext.Consumer>
}

export default AppUseContext