import { observer } from "mobx-react-lite"
import TodoCompleted from "./TodoCompleted"
import TodoEditing from "./TodoEditing"
import TodoRemove from "./TodoRemove"
import classname from "classnames"
import Editing from "./editing"

function Todo({ todo }) {
  return (
    <li
      className={classname({
        completed: todo.isCompleted,
        editing: todo.isEditing
      })}
    >
      <div className="view">
        <TodoCompleted todo={todo} />
        <TodoEditing todo={todo} />
        <TodoRemove id={todo.id} />
      </div>
      <Editing todo={todo} />
    </li>
  )
}

export default observer(Todo)
