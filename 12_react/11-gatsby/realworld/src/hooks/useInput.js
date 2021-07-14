import { useState } from "react"

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  return {
    input: {
      value,
      onChange(e) {
        setValue(e.target.value)
      },
    },
    setValue,
  }
}
export default useInput
