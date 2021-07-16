import AppleStore from "./AppleStore"
import React, { createContext, useContext } from "react"

class RootStore {
  constructor() {
    this.AppleStore = new AppleStore()
  }
}

const RootStoreContext = createContext()

const RootStoreProvider = ({ store, children }) => {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  )
}

const useRootStore = () => {
  return useContext(RootStoreContext)
}

export { RootStore, RootStoreProvider, useRootStore }
