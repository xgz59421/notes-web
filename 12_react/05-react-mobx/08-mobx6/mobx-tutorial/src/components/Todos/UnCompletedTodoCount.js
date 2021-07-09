import { observer } from "mobx-react-lite"
import { useRootStore } from "../../store"

function UnCompletedTodoCount() {
  const { todoStore } = useRootStore()
  const { unCompletedTodosCount } = todoStore
  return (
    <span className="todo-count">
      <strong>{unCompletedTodosCount}</strong> item left
    </span>
  )
}

export default observer(UnCompletedTodoCount)
