import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: fields___slug}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
    `)

  return (
  <div id="header">
    <div id="logo">
      <h1><Link to="/">{siteTitle}</Link></h1>
      {/* <span>Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a></span> */}
    </div>
    <div id="menu">
      <ul>
        {data.allMarkdownRemark.edges.map(el =>
          <li>
            <Link to={el.node.fields.slug === '/_home/' ? '/' : el.node.fields.slug} activeClassName="current_page_item">
              {el.node.frontmatter.title}
            </Link>
          </li>)}
      </ul>
      <div className="contacts-block">
          <span>Телефони для довідок:</span>
          <span>(093) 035-78-94</span>
          <span>(066) 882-42-94</span>
          <span>(067) 364-64-16</span>
      </div>
    </div>
  </div>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
