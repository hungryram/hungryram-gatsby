import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/pagebanner"
import Seo from "../components/seo"

export default function LegalDetail({data}) {
    return (
        <Layout>
            <Seo 
            title={data.markdownRemark.frontmatter.title_tag}
            description={data.markdownRemark.frontmatter.meta_description}
        />
<PageBanner pageTitle={data.markdownRemark.frontmatter.title} />
            <div className="uk-section">
                <div className="uk-container">
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                </div>
            </div>
        </Layout>
    )
}

export const LegalPage = graphql`
query ($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      frontmatter {
        title
        title_tag
        meta_description
      }
      html
    }
  }
`