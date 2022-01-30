import * as React from "react"
import Layout from "../../components/layout"
import PageBanner from "../../components/pagebanner"
import { graphql } from "gatsby"

export default function BlogList({ data }) {
    return (
        <Layout>
            <PageBanner />
            <h1>Blog List</h1>
            <div className="uk-section">
                <div className="uk-container">
                    <div data-uk-grid>
                        <div>
                            {data.allMdx.nodes.map((node) => {
                                return (
                                    <h2>{ node.frontmatter.title }</h2>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const BlogData = graphql`
query Blog {
    allMdx {
      nodes {
        frontmatter {
          title
          description
        }
      }
    }
  }
`