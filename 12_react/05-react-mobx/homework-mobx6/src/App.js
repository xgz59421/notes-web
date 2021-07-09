import React from 'react';
import Apple from './components/apple'
import { RootStore, RootStoreProvider } from "./store/RootStore"
const rootStore = new RootStore()

function App() {
  return <div>
    <RootStoreProvider store={rootStore}>
      <Apple />
    </RootStoreProvider>
  </div>
}

export default App;
