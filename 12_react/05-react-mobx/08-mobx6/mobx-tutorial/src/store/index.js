import CounterStore from "./CouterStore"
import { createContext, useContext } from "react"
import TodoStore from "./TodoStore"

class RootStore {
  constructor() {
    this.counterStore = new CounterStore()
    this.todoStore = new TodoStore()
  }
}

const rootStore = new RootStore()
const RootStoreContenxt = createContext()

export const RootStoreProvider = ({ children }) => {
  return (
    <RootStoreContenxt.Provider value={rootStore}>
      {children}
    </RootStoreContenxt.Provider>
  )
}
export const useRootStore = () => {
  return useContext(RootStoreContenxt)
}
