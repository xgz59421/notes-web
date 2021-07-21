import React from "react"
import useLogin from "../hooks/useLogin"
import { navigate } from "gatsby"

export default function PrivateRoute({ component: Component, ...rest }) {
  const [isLogin, loading] = useLogin()
  if (loading) return null
  if (isLogin) return <Component {...rest}></Component>
  navigate("/login")
  return null
}
