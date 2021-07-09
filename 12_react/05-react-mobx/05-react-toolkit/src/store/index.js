import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import TodosReducer, { TODOS_FEATURE_KEY } from "./todos.slice"
import logger from "redux-logger"

export default configureStore({
  reducer: {
    [TODOS_FEATURE_KEY]: TodosReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  // 中间件 
  // ...getDefaultMiddleware内置的一些中间件
  // logger新引入的中间件
  middleware: [...getDefaultMiddleware(), logger]
})
