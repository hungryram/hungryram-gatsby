import * as React from "react"
import Layout from "../../components/layout"
import PageBanner from "../../components/pagebanner"
import { graphql, Link } from "gatsby"

export default function Blog({ data }) {
    return (
        <Layout>
            <PageBanner />
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-child-width-1-2@s" data-uk-grid>
                        {data.allMarkdownRemark.nodes.map((node) => {
                            return (
                                <div>
                                    <div className="uk-card">
                                        <Link to={"/blog" + node.fields.slug} className="uk-link-reset">
                                        <div className="uk-card-media-top uk-cover-container">
                                            <canvas height="400"></canvas>
                                            <img src={node.frontmatter.featured_image} data-uk-cover/>
                                        </div>
                                        <div className="uk-card-body more-projects">
                                            <h3 className="uk-h4">{node.frontmatter.title}</h3>
                                            <p>{node.excerpt}</p>
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const BlogListData = graphql`
{
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/blog/"}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        frontmatter {
          title
          featured_image
          image_alt_tag
          blog_date_published
        }
        fields {
          slug
        }
        id
        excerpt(pruneLength: 100, truncate: true)
      }
    }
  }
  
`