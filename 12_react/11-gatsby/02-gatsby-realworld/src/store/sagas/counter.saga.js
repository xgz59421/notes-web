import { takeEvery, put, delay } from "redux-saga/effects"

function* increment_async() {
  yield delay(1000)
  yield put({ type: "increment" })
}

export default function* counterSaga() {
  yield takeEvery("increment_async", increment_async)
}
