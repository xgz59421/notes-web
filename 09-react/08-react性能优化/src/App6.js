import React, { lazy, Suspense } from "react"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"

const Home = lazy(() => import(/* webpackChunkName: "Home" */ "./component/Home"))
const List = lazy(() => import(/* webpackChunkName: "List" */ "./component/List"))

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/list">List</Link>
      <Switch>
        <Suspense fallback={<div>Loading</div>}>
          <Route path="/" component={Home} exact />
          <Route path="/list" component={List} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}
   
export default App