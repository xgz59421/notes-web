import React from "react"
import { Router } from "@reach/router"
import Settings from "../components/settings"
import PrivateRoute from "../components/PrivateRoute"
import Create from "../components/create"

export default function App() {
  return (
    <Router>
      {/* 客户端路由 */}
      {/* <Settings path="/app/settings"/> */}
      {/* 受保护的客户端路由 */}
      <PrivateRoute component={Settings} path="/app/settings" />
      <PrivateRoute component={Create} path="/app/create" />
    </Router>
  )
}
