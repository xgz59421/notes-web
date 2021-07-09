import Counter from "./Counter"
import TodoContainer from "./Todos/Container"
import { RootStoreProvider } from "../store"

function App() {
  return (
    <RootStoreProvider>
      <TodoContainer />
      <Counter />
    </RootStoreProvider>
  )
}

export default App
