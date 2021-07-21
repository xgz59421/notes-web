import { takeEvery, put, delay } from 'redux-saga/effects';
import { INCREMENT_ASYNC, increment } from '../actions/counter.actions';

// takeEvery 接收 action
// put 触发 action

function* increment_async_fn (action) {
  yield delay(2000);
  yield put(increment(action.payload))
}

export default function* counterSaga () {
  // 接收action
  yield takeEvery(INCREMENT_ASYNC, increment_async_fn)
}