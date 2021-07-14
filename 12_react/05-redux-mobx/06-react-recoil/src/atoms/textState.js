import { atom, selector, useRecoilState, useRecoilValue } from "recoil"

function loadDefault() {
  // 需要使用异步组件
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve("hello Recoil")
    }, 1000)
  })
}

const textState = atom({
  key: "textState",
  default: loadDefault()
})

const textCountState = selector({
  key: "textCountState",
  get: ({ get }) => get(textState).length
})

export function useTextState() {
  return useRecoilState(textState)
}

export function useTextCountState() {
  return useRecoilValue(textCountState)
}
