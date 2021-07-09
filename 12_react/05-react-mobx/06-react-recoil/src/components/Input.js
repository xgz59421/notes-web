import React from "react"
import { useTextState } from "../atoms/textState"

function Input() {
  const [text, setText] = useTextState()
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      {text}
    </>
  )
}

export default Input
