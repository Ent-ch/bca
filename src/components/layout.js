
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
  <div id="page" className="container">
    <Header siteTitle={data.site.siteMetadata.title} />
    <div id="main">
      <div id="welcome">
        {children}
      </div>
      <div id="featured">
        {/* <div className="title">
          <h2>Maecenas lectus sapien</h2>
          <span className="byline">Integer sit amet aliquet pretium</span>
        </div> */}
      </div>
      <div id="copyright">
        <span>© 2020 {data.site.siteMetadata.title}. Всі права захищено. </span>
      </div>
    </div>
  </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
