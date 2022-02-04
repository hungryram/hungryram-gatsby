import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/pagebanner"
import showdown from "showdown"
import * as Styles from "../styles/servicedetail.module.css"

export default function ServiceTemplate({ data }) {
  const frontMatter = data.markdownRemark.frontmatter
  const converter = new showdown.Converter();

  return (
    <Layout>
      <PageBanner pageTitle={frontMatter.title} />

      {
        frontMatter.blocks &&
        <div className={`uk-section uk-section-large ${Styles.blockSection}`}>
          <div className="uk-container">
            <div className="uk-child-width-expand@s uk-light uk-grid-large" data-uk-grid>
              {frontMatter.blocks.map((block) => {
                return (
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(block.svg) }} className={Styles.serviceBlock} />
                    <h3>{block.heading}</h3>
                    <p>{block.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      }

      <div className="uk-section">
        <div className="uk-container">
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
      </div>
    </Layout>
  )
}

export const Service = graphql`
query ($slug: String) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    id
    frontmatter {
      title
      image
      image_alt_tag
      blocks {
        body
        heading
        svg
      }
      banner {
        body
        heading
      }
      second_intro {
        heading
        body
      }
      first_intro {
        heading
        body
      }
    }
    html
  }
}


`