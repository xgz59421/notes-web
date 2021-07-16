import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {decrement, increment_async} from '../store/actions/counter.actions'

function Counter () {
  const dispatch = useDispatch();
  // state: {couter:{count}, modal:{xxxxx}}
  const {count} = useSelector(state => state.counter)
  return <div>
    <button onClick={() => dispatch(increment_async(6))}>+</button>
    <span>{count}</span>
    <button onClick={() => dispatch(decrement(5))}>-</button>
  </div>
}

export default Counter