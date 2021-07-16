import { all } from "redux-saga/effects"
import counterSaga from "./counter.saga"
import authSaga from "./auth.saga"
import articleSaga from "./article.saga"

export default function* rootSaga() {
  yield all([counterSaga(), authSaga(), articleSaga()])
}
