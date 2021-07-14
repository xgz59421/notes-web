import React from 'react'
import style from '../styles/box.module.less'
import useInput from "../hooks/useInput"
import { useDispatch } from "react-redux"

function AddBox({ display, hide }) {
  const name = useInput("")
  const address = useInput("")
  const dispatch = useDispatch()
  return (
    <div className={style.container} style={{ display: display ? 'block' : 'none' }}>
      <div className={style.box}>
        <p className={style.title}>添加快捷方式</p>
        <p>名称</p>
        <input {...name.input} />
        <p>网址</p>
        <input {...address.input} />
        <div>
          <button onClick={() => {
            const nameValue = name.input.value
            const addressValue = address.input.value
            console.log(nameValue, addressValue)
            if(nameValue.length === 0 || addressValue.length === 0) {
              alert('填写数据')
              return 
            }
            dispatch({ 
              type: "add",
              nameValue,
              addressValue
            })
            hide()
          }}>完成</button>

          <button onClick={() => {
            hide()
          }}>取消</button>
        </div>
      </div>
    </div>
  )
}

export default AddBox
