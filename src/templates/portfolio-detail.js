import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageBanner from "../components/pagebanner"

export default function PortfolioTemplate({ data }) {
  const frontMatter = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Seo
        title={data.markdownRemark.frontmatter.title_tag}
        description={data.markdownRemark.frontmatter.title_tag}
      />
      <PageBanner pageTitle={frontMatter.title} />
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-child-width-1-2@s uk-grid-large" data-uk-grid>
            <div>
              <img src={frontMatter.featured_image} alt={frontMatter.image_alt_tag} />
            </div>
            <div>
              <div className="uk-card uk-alert uk-card-body">
                <h2>{ frontMatter.client_name }</h2>
                <p>Website: <a href={frontMatter.website_link} target="_blank" rel="noopener" className="uk-link-reset">{frontMatter.title}</a></p>
              </div>
              <div className="uk-margin-large-top">
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Portfolio = graphql`
query ($slug: String) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    id
    frontmatter {
      title
      featured_image
      client_name
      website_link
      title_tag
      meta_description
      image_alt_tag
    }
    html
  }
}
`