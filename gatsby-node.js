const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
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
  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    actions.createPage({
      path: "/blog" + slug,
      component: path.resolve(`./src/templates/blog-detail.js`),
      context: { slug: slug },
    })
  })

  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    actions.createPage({
      path: "/portfolio" + slug,
      component: path.resolve(`./src/templates/portfolio-detail.js`),
      context: { slug: slug },
    })
  })

  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    actions.createPage({
      path: "/services" + slug,
      component: path.resolve(`./src/templates/service-detail.js`),
      context: { slug: slug },
    })
  })

  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    actions.createPage({
      path: "/locations" + slug,
      component: path.resolve(`./src/templates/location-detail.js`),
      context: { slug: slug },
    })
  })
}