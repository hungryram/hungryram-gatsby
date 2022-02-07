import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/pagebanner"
import Showdown from "showdown"
import Seo from "../components/seo"

export default function PortfolioTemplate({ data }) {
  const frontMatter = data.markdownRemark.frontmatter
  const converter = new Showdown.Converter();
  return (
    <Layout>
      <Seo
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.meta_description}
      />
      <PageBanner pageTitle={frontMatter.title} />
      <div className="uk-section">
        <div className="uk-container">
          <h2>{frontMatter.first_intro.heading}</h2>
          <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(frontMatter.first_intro.body) }} />
        </div>
      </div>
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-child-width-1-2@s" data-uk-grid>
            <div>
              <img src="https://res.cloudinary.com/hungryram19/image/upload/v1628214718/hungryram/contact-hungry-ram_antytx.jpg" alt="girl looking at phone" />
            </div>
            <div>
              <h2>{frontMatter.second_intro.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(frontMatter.second_intro.body) }} />
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section">
        <div className="uk-container">
          <div>
            <div>
              <h2>{frontMatter.third_intro.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(frontMatter.third_intro.body) }} />
              
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
      title_tag
      meta_description
      first_intro {
        body
        heading
      }
      second_intro {
        body
        heading
      }
      third_intro {
        body
        heading
      }
    }
  }
}
`