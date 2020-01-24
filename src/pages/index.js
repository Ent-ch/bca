import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
  <Layout>
    <SEO title="Home" />
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/_home/" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`