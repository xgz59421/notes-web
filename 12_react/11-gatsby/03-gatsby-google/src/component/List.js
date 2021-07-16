import React, { useState } from 'react'
import style from '../styles/list.module.less'
import { useSelector } from "react-redux"
import AddBox from '../component/AddBox'

function List() {
  // const counterReducer = useSelector(state => state.counterReducer)
  const listReducer = useSelector(state => state.listReducer)
  const [display, setDisplay] = useState(false)
  function hide() {
    console.log('hide-------');
    setDisplay(false)
  }
  function show() {
    console.log('show-------');
    setDisplay(true)
  }
  return (
    <div className={style.container}>
      {/* <h1 className="logo-font">conduit {counterReducer.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "increment_async" })}>
        +1
      </button> */}
      {
        listReducer.map((item, index)=>{
          console.log(item)
          if(item.action === 'add'){
            return <div className={style.box} key={index}>
              <button className={style.boxAdd} onClick={()=>{
                show()
              }}></button>
            </div>
          }else{
            return <div className={style.box} key={index}>
              <a target="_blank" href={item.address} className={style.boxItem}></a>
              <p className={style.text}>{item.name}</p>
            </div>
          }
        })
      }
      <AddBox  hide={hide} display={display}/>
    </div>
  )
}

export default List
