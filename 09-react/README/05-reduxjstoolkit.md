## @reduxjs/toolkit

### 1. 快速入门 

简化 Redux 中样板代码流程代码的编写，对 Redux 进行的二次封装，使 Redux 的使用变得简单。

 [文档](https://redux-toolkit.js.org/)

1. 下载

   现有应用：`npm install @reduxjs/toolkit react-redux`

   新建应用：`create-react-app react-redux-toolkit --template redux`

2. 创建状态切片

   对于状态切片, 我们可以认为它就是原本 Redux 中的那一个个的小的 Reducer 函数.

   在 Redux 中, 原本 Reducer 函数和 Action 对象需要分别创建, 现在通过状态切片替代, 它会返回 Reducer 函数和 Action 对象.

   ```js
   // src/store/todos.js
   import { createSlice } from "@reduxjs/toolkit"
   
   export const TODOS_FEATURE_KEY = "todos"
   
   const { reducer: TodosReducer, actions } = createSlice({
     name: TODOS_FEATURE_KEY,
     initialState: [],
     reducers: {
       addTodo: (state, action) => {
         state.push(action.payload)
       }
     }
   })
   
   export const { addTodo } = actions
   export default TodosReducer
   ```


3. 创建 Store

   ```js
   // src/store/index.js
   import { configureStore } from "@reduxjs/toolkit"
   import TodosReducer, { TODOS_FEATURE_KEY } from "./todos"
   
   export default configureStore({
     reducer: {
       [TODOS_FEATURE_KEY]: TodosReducer
     },
     devTools: process.env.NODE_ENV !== "production"
   })
   ```

4. 配置 Provider

   ```js
   // src/index.js
   import ReactDOM from "react-dom"
   import App from "./App"
   import { Provider } from "react-redux"
   import store from "./store"
   
   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById("root")
   )
   ```

5. 组件应用状态

   ```js
   // src/Todos.js
   import {
     addTodo,
     TODOS_FEATURE_KEY
   } from "./store/todos"
   import { useDispatch, useSelector } from "react-redux"
   
   function Todos() {
     const dispatch = useDispatch()
     const todos = useSelector(
       state => state[TODOS_FEATURE_KEY]
     )
     return (
       <div>
         <button
           onClick={() =>
             dispatch(addTodo({ title: "测试任务" }))
           }
         >
           添加任务
         </button>
         <ul>
           {todos.map((todo, index) => (
             <li key={index}>{todo.title}</li>
           ))}
         </ul>
       </div>
     )
   }
   
   export default Todos
   ```
   
6. Action 预处理

   当 Action 被触发后, 可以通过 prepare 方法对 Action 进行预处理, 处理完成后交给 Reducer. prepare 方法必须返回对象.

   ```js
   reducers: {
     addTodo: {
       reducer: todosAdapter.addOne,
       prepare: todo => {
         return { payload: { ...todo, id: Math.random() } }
       }
     }
   }
   ```

### 2. 执行异步操作

#### 2.1 方式一

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// 创建执行异步操作的 Action 创建函数
export const loadTodos = createAsyncThunk(
  "todos/loadTodos",
  (payload, thunkAPI) => {
    axios
      .get(payload)
      .then(response => thunkAPI.dispatch(setTodos(response.data)))
  }
)

const { reducer: TodosReducer, actions } = createSlice({
  reducers: {
    setTodos: (state, action) => {
      action.payload.forEach(todo => state.push(todo))
    }
  }
})
```

```js
function Todos() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadTodos("https://jsonplaceholder.typicode.com/todos"))
  }, [])
}
```

#### 2.1 方式二

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const loadTodos = createAsyncThunk("todos/loadTodos", payload => {
  return axios.get(payload).then(response => response.data)
})

const { reducer: TodosReducer, actions } = createSlice({
  // 接收执行异步操作的 Action
  extraReducers: {
    // pending
    // rejected
    // fulfilled
    [loadTodos.fulfilled]: (state, action) => {
      action.payload.forEach(todo => state.push(todo))
    }
  }
})
```

### 3. 配置中间件

`npm i redux-logger`

```js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import logger from "redux-logger"

export default configureStore({
  middleware: [...getDefaultMiddleware(), logger]
})
```

[redux-immutable-state-invariant](https://github.com/leoasis/redux-immutable-state-invariant) 

[redux-thunk](https://www.npmjs.com/package/redux-thunk)

### 4. 实体适配器

将状态放入实体适配器，实体适配器提供操作状态的各种方法，简化操作。

```js
import { createEntityAdapter } from "@reduxjs/toolkit"

const todosAdapter = createEntityAdapter()

const { reducer: TodosReducer, actions } = createSlice({
  initialState: todosAdapter.getInitialState(),
  reducers: {
    addTodo: (state, action) => {
      todosAdapter.addOne(state, action.payload)
    }
  },
  extraReducers: {
    [loadTodos.fulfilled]: (state, action) => {
      todosAdapter.addMany(state, action.payload)
    }
  }
})
```

```js
import { addTodo, loadTodos } from "./store/todos"
import { useSelector } from "react-redux"

function Todos() {
  const todos = useSelector(
    state => state.todos.entities
  )
  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            addTodo({
              title: "测试任务",
              id: Math.random()
            })
          )
        }
      >
        添加任务
      </button>
      {Object.values(todos).map((todo, index) => (
        <li key={index}>{todo.title}</li>
      ))}
    </div>
  )
}

export default Todos
```

代码简化，实体操作方法的第一个参数为 state, 第二个参数为 action, 内部会自动将对数据进行操作.  比如对于 addOne 方法, 它会自动将 action.payload 添加到 state 中.

```js
reducers: {
  addTodo: todosAdapter.addOne
},
extraReducers: {
  [loadTodos.fulfilled]: todosAdapter.addMany
}
```

实体适配器要求每一个实体必须拥有 id 属性作为唯一标识，如果实体中的唯一标识字段不叫做 id，需要使用 selectId 进行声明。

```js
const todosAdapter = createEntityAdapter({ selectId: todo => todo.cid })
```

通过 sortComparer 可以指定实体的排序方式，排序规则和 sort 方法相同。

```js
const todosAdapter = createEntityAdapter({
  sortComparer: (a, b) => {
    // 按照 id 进行升序排列
    return a.id - b.id
  }
})
```

```js
const todosAdapter = createEntityAdapter({
  sortComparer: (a, b) => {
    // 按照 id 进行降序排列
    return b.id - a.id
  }
})
```

### 5. 状态选择器

提供从实体适配器中获取状态的快捷途径. 

```javascript
import { createSelector } from "@reduxjs/toolkit"

const { selectAll } = todosAdapter.getSelectors()

export const selectTodosList = createSelector(
  state => state[TODOS_FEATURE_KEY],
  selectAll
)
```

```js
import { selectTodosList } from "./store/todos"

function Todos() {
 const todos = useSelector(selectTodosList)
}
```

