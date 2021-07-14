import { takeEvery, put } from "redux-saga/effects"
import axios from "axios"

function* login({ payload }) {
  try {
    let { data } = yield axios.post("/users/login", payload)
    localStorage.setItem("token", data.user.token)
    yield put({ type: "loginSuccess", payload: data.user })
  } catch (ex) {
    const errors = ex.response.data.errors
    const message = []
    for (let attr in errors) {
      for (let i = 0; i < errors[attr].length; i++) {
        message.push(`${attr} ${errors[attr][i]}`)
      }
    }
    yield put({ type: "loginFailed", payload: message })
  }
}

function* loadUser({ payload }) {
  let { data } = yield axios.get("/user", {
    headers: {
      Authorization: `Token ${payload}`,
    },
  })
  yield put({ type: "loadUserSucess", payload: data.user })
}

export default function* authSaga() {
  yield takeEvery("login", login)
  yield takeEvery("loadUser", loadUser)
}
