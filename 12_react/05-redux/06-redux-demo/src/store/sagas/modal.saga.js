import { takeEvery, put, delay } from 'redux-saga/effects';
import { SHOWMODAL_ASYNC, show } from '../actions/modal.actions';

function* showModal_async_fn () {
  yield delay(2000);
  yield put(show());
}

export default function* modalSaga () {
  console.log('modalSaga');
  yield takeEvery(SHOWMODAL_ASYNC, showModal_async_fn)
}