import { useEffect, useRef } from "react"

function Editing({ todo }) {
  const { isEditing, modifyTodoTitle } = todo
  const ref = useRef(null)
  useEffect(() => {
    if (isEditing) {
      ref.current.focus()
    }
  }, [isEditing])
  return (
    <input
      onBlur={() => modifyTodoTitle(ref.current.value)}
      ref={ref}
      className="edit"
      defaultValue={todo.title}
    />
  )
}

export default Editing
