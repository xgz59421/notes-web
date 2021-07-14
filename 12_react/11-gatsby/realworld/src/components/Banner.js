import React from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Banner() {
  const dispatch = useDispatch()
  const counterReducer = useSelector(state => state.counterReducer)
  console.log('counterReducer', counterReducer);
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">conduit {counterReducer.count}</h1>
        <p>A place to share your knowledge.</p>
        <button onClick={() => dispatch({ type: "increment" })}>+1</button>
        <button onClick={() => dispatch({ type: "increment_async" })}>
          +1
        </button>
      </div>
    </div>
  )
}
