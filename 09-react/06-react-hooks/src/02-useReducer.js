import React, { useReducer }  from 'react'

function AppUseReducer() {
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return state +1
      case 'decrement':
        return state -1
      default:
        return state
    }
  }
  const [count, dispatch] = useReducer(reducer, 0)
  return <div>
    <button onClick={()=>dispatch({type: 'decrement'})}>-</button>
    <span>{count}</span>
    <button onClick={()=>dispatch({type: 'increment'})}>+</button>
  </div>
}

export default AppUseReducer