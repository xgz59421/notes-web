import {
  createSlice,
  createAsyncThunk,  // 异步操作
  createEntityAdapter,  // 实体适配器, 提供操作方法, 简化操作
  createSelector  // 状态选择器
} from "@reduxjs/toolkit"
import axios from "axios"

export const TODOS_FEATURE_KEY = "todos"

// 第一种方式
// export const loadTodos = createAsyncThunk(
//   "todos/loadTodos",
//   (payload, { dispatch }) => {
//     axios.get(payload).then(response => dispatch(setTodo(response.data)))
//   }
// )

// 第二种方式 导出一个promise
export const loadTodos = createAsyncThunk("todos/loadTodos", payload =>
  axios.get(payload).then(response => response.data)
)

const todosAdapter = createEntityAdapter()
// console.log(todosAdapter);

const { reducer: TodosReducer, actions } = createSlice({
  name: TODOS_FEATURE_KEY,
  // initialState: [],
  initialState: todosAdapter.getInitialState(),
  reducers: {
    // addTodo: (state, action)=>{
    //   state.push(action.payload)
    // },
    // addTodo: (state, action)=>{
    //   todosAdapter.addOne(state,action.payload)
    // },
    // 简写
    addTodo: todosAdapter.addOne,
    // prepare: payload=>{
    //   console.log(payload);
    //   return payload
    // },
    // setTodo: (state, action)=>{
    //   action.payload.forEach(todo => state.push(todo));
    // },
    setTodo: todosAdapter.addMany
  },
  extraReducers: {
    // pendding
    // rejected
    // fulfilled
    // [loadTodos.fulfilled]: (state, action)=>{
    //   action.payload.forEach(todo => state.push(todo));
    // }
    [loadTodos.fulfilled]: todosAdapter.addMany
  }
})

export const { addTodo, setTodo } = actions

const { selectAll } = todosAdapter.getSelectors()

export const selectTodos = createSelector(
  state => state[TODOS_FEATURE_KEY],
  selectAll
)

export default TodosReducer
