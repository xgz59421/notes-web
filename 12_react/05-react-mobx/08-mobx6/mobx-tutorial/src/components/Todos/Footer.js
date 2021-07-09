import UnCompletedTodoCount from "./UnCompletedTodoCount"
import { useRootStore } from "../../store"
import { observer } from "mobx-react-lite"

function Footer() {
  const { todoStore } = useRootStore()
  const { changeFilterCondition, filterCondition, clearCompletedTodos } =
    todoStore
  return (
    <footer className="footer">
      <UnCompletedTodoCount />
      <ul className="filters">
        {["All", "Active", "Completed"].map(item => (
          <li>
            <button
              className={filterCondition === item ? "selected" : ""}
              onClick={() => changeFilterCondition(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={clearCompletedTodos} className="clear-completed">
        Clear completed
      </button>
    </footer>
  )
}

export default observer(Footer)
