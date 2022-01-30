import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/pagebanner"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function PortfolioTemplate({ data }) {
  const { description, title } = data.mdx.frontmatter;
  return (
    <Layout>
      <PageBanner />
      <div className="uk-section">
        <div className="uk-container">
          <h1>{title}</h1>
          <p>{description}</p>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}

export const PortfolioDetail = graphql`
query PortfolioTemplate($slug: String) {
    mdx(slug: {eq: $slug}) {
      frontmatter {
        description
        title
      }
      body
    }
  }
  
`