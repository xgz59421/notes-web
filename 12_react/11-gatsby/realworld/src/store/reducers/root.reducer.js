import { combineReducers } from "redux"
import counterReducer from "./counter.reducer"
import authReducer from "./auth.reducer"
import articleReducer from "./article.reducer"

export default combineReducers({
  counterReducer,
  authReducer,
  articleReducer,
})
