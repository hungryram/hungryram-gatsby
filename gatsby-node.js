const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query {
            allMdx {
            nodes {
                frontmatter {
                title
                description
                }
                slug
            }
            }
        }
    `)

    data.allMdx.nodes.forEach(node => {
        actions.createPage({
            path: "/portfolio/" + node.slug,
            component: path.resolve('./src/templates/portfolio-detail.js'),
            context: { slug: node.slug }
        })
    })
}