import { observer } from "mobx-react-lite"

function TodoCompleted({ todo }) {
  const { isCompleted, modifyTodoIsCompleted } = todo
  return (
    <input
      className="toggle"
      type="checkbox"
      checked={isCompleted}
      onChange={modifyTodoIsCompleted}
    />
  )
}

export default observer(TodoCompleted)
