import React from "react"

export default function NotFound({ location }) {
  const pathname = location.pathname
  console.log(pathname);
  return <div>NotFound</div>
}
