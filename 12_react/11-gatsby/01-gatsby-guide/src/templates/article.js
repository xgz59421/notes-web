import React from "react"
import { graphql } from "gatsby"

export default function Article({ data }) {
  return (
    <div>
      <p>{data.markdownRemark.frontmatter.title}</p>
      <p>{data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </div>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
      id
    }
  }
`
