import * as React from "react"
import Layout from "../../components/layout"
import PageBanner from "../../components/pagebanner"
import { graphql, Link } from "gatsby"
import Seo from "../../components/seo"

export default function Blog({ data }) {
    return (
        <Layout>
            <Seo
                title="Our blog | Hungry Ram Web Design"
                description="Learn tips and tricks on how you can improve your websites by staying updated with our blog posts."
            />
            <PageBanner pageTitle="View our blog" />
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
                                            <img src={node.frontmatter.featured_image} alt={node.frontmatter.image_alt_tag} data-uk-cover/>
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