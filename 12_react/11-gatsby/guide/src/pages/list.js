import React from "react"
import Header from "../components/header"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default function List({ data }) {
  return (
    <div>
      <SEO title="list page" description="list page description" />
      list page works
      <Header />
      {data.allMarkdownRemark.nodes.map(post => (
        <div key={post.id}>
          <p>{post.frontmatter.title}</p>
          <p>{post.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
        }
        html
        id
      }
    }
  }
`
