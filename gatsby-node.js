const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const fs = require('fs');

exports.onPostBuild = function() {
  // fs.renameSync(path.join(__dirname, 'public'), path.join(__dirname, 'docs'));

  // fs.mkdirSync(path.join(__dirname, 'public'));

  // fs.renameSync(path.join(__dirname, 'docs'), path.join(__dirname, 'public'));
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}