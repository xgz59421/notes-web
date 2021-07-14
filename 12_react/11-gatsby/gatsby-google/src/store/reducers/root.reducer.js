import { combineReducers } from "redux"
import counterReducer from "./counter.reducer"
import listReducer from './list.reducer'

export default combineReducers({
  counterReducer, listReducer
})
