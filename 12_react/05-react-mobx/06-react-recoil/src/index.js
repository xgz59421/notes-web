import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import { RecoilRoot } from "recoil"
import Input from "./components/Input"
import CharCount from "./components/CharCount"

ReactDOM.render(
  <RecoilRoot>
    {/* 异步组件 */}
    <Suspense fallback={<div>loading...</div>}>
      <Input />
      <CharCount />
    </Suspense>
  </RecoilRoot>,
  document.getElementById("root")
)
