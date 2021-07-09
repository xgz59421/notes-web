import React from "react"
import { useTextCountState } from "../atoms/textState"

function CharCount() {
  const length = useTextCountState()
  return <div>{length}</div>
}

export default CharCount
