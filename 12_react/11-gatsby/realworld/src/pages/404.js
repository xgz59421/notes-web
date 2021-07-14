import React from "react"
import Article from "../templates/article"

export default function NotFound({ location }) {
  const pathname = location.pathname
  if (pathname.startsWith("/article")) {
    const slug = pathname.substr(9)
    return <Article slug={slug} />
  }
  return <div>NotFound</div>
}
