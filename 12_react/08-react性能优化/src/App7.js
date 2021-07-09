import React, { lazy, Suspense } from "react"
   
function App() {
  let LazyComponent = null
  if (1) {
    LazyComponent = lazy(() => import(/* webpackChunkName: "Home" */ "./component/Home"))
  } else {
    LazyComponent = lazy(() => import(/* webpackChunkName: "List" */ "./component/List"))
  }
  return (
    <Suspense fallback={<div>Loading</div>}>
      <LazyComponent />
    </Suspense>
  )
}

export default App