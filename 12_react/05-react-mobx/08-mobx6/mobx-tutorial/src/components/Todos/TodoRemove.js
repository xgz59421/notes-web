import { useRootStore } from "../../store"

function TodoRemove({ id }) {
  const { todoStore } = useRootStore()
  const { removeTodo } = todoStore
  return <button onClick={() => removeTodo(id)} className="destroy" />
}

export default TodoRemove
