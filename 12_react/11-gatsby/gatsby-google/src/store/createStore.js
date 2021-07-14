import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers/root.reducer"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas/root.saga"

export default function () {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  return store
}
