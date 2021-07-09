import { observer } from "mobx-react-lite"
import { useRootStore } from "../../store"
import Todo from "./Todo"

function Main() {
  const { todoStore } = useRootStore()
  const { filterTodos } = todoStore
  return (
    <section className="main">
      <ul className="todo-list">
        {filterTodos.map(todo => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
    </section>
  )
}

export default observer(Main)
