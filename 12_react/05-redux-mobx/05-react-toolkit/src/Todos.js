import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, loadTodos, selectTodos, TODOS_FEATURE_KEY } from "./store/todos.slice"
import React from 'react';

function Todos() {
  const dispatch = useDispatch()
  // const todos = useSelector(state=>state[TODOS_FEATURE_KEY])
  // 状态选择器
  const todos = useSelector(selectTodos)
  useEffect(() => {
    // dispatch(loadTodos("https://jsonplaceholder.typicode.com/todos"))
    dispatch(loadTodos("http://localhost:3001/todos"))
  }, [dispatch])
  return (
    <div>
      {console.log(todos)}
      <button
        onClick={() =>
          dispatch(addTodo({ id: Math.random(), title: "测试任务" }))
        }
      >
        添加任务
      </button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
