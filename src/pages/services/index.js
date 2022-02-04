import * as React from "react"
import Layout from "../../components/layout"
import PageBanner from "../../components/pagebanner"
import { graphql, Link } from "gatsby"
import * as serviceList from "../../styles/servicelist.module.css"

export default function Services({ data }) {
    return (
        <Layout>
            <PageBanner />
            <div className="uk-section">
                <div className="uk-container">
                    <h1>Services</h1>
                    <div className="uk-child-width-1-3@s uk-grid-collapse uk-grid-row-collapse" data-uk-grid>
                        {data.allMarkdownRemark.nodes.map((node) => {
                            return (
                                <div>
                                    <div className={`uk-card uk-card-body ${serviceList.serviceList}`}>
                                        <Link to={"/services" + node.fields.slug} className="uk-link-reset">
                                            <div>
                                                <h3 class="uk-text-default">{node.frontmatter.title}</h3>
                                                <p>{node.frontmatter.description}</p>
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

export const ServiceData = graphql`
{
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/services/"}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        frontmatter {
          title
          description
        }
        fields {
          slug
        }
        id
      }
    }
  }
  
`