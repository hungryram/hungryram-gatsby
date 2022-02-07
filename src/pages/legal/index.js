import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import PageBanner from "../../components/pagebanner"

export default function LegalList({ data }){
    return (
        <Layout>
        <PageBanner pageTitle="Legal" />
        <div className="uk-section uk-section-large">
            <div className="uk-container">
                <ul className="uk-list uk-text-center">
                {data.allMarkdownRemark.nodes.map((node) => {
                    return (
                        <li><Link to={"/legal" + node.fields.slug}>{node.frontmatter.title}</Link></li>
                    )
                })}
                </ul>
            </div>
        </div>
        </Layout>
    )
}

export const LegalData = graphql`
{
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/legal/"}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
        id
        html
      }
    }
  }
`