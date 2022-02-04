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
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-child-width-1-2@s" data-uk-grid>
            <div>
              {
                frontMatter.first_intro.heading &&
                <h2>{frontMatter.first_intro.heading}</h2>
              }
              <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(frontMatter.first_intro.body) }} />
            </div>
            <div>
              <img src={frontMatter.image} alt={frontMatter.image_alt_tag} />
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-child-width-1-2@s uk-flex-middle" data-uk-grid>
            <div>
              {
                frontMatter.second_intro.heading &&
                <h2>{frontMatter.second_intro.heading}</h2>
              }
              {
                frontMatter.second_intro.body &&
                <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(frontMatter.second_intro.body) }} />
              }
            </div>
            <div>
              <ul className="uk-list">
                <li>
                  <Link to="/services/websites-with-ssl-certificates/">
                    <h4>Fully installed SSL certificate</h4>
                  </Link>
                </li>
                <li>
                  <Link to="/services/responsive-web-design/">
                    <h4>Responsive web design for all devices</h4>
                  </Link>
                </li>
                <li>
                  <Link to="/services/web-hosting/">
                    <h4>Blazing-fast hosting</h4>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

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