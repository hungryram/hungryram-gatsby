import * as React from "react"
import Layout from "../../components/layout"
import PageBanner from "../../components/pagebanner"
import { graphql, Link } from "gatsby"
import Seo from "../../components/seo"

export default function Portfolio({ data }) {
  return (
    <Layout>
      <Seo
        title="Portfolio | Hungry Ram Web Design"
        description="View our customers who trust us to build their site and establish a long term relationship"
      />
      <PageBanner pageTitle="Case Studies" />
      <div className="uk-section">
        <div className="uk-container">
          <div data-uk-filter="target: .js-filter">

            {/* <ul className="uk-subnav uk-subnav-pill">
              <li className="uk-active" data-uk-filter-control><a href="#">All</a></li>

              <li data-uk-filter-control='[data-category=""]'>
                <a href="#"></a>
              </li>
            </ul> */}


            <ul className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" data-uk-grid>
              {data.allMarkdownRemark.nodes.map((node) => {
                return (
                  <li data-category="">
                    <div className="uk-card uk-card-default uk-card-body uk-cover-container portfolio-page">
                      <Link to={"/portfolio" + node.fields.slug}>
                        <canvas height="300"></canvas>
                        <img src={node.frontmatter.featured_image} alt="" data-uk-cover />
                      </Link>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const PortfolioData = graphql`
{
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/portfolio/"}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        frontmatter {
          title
          featured_image
          image_alt_tag
          client_name
        }
        fields {
          slug
        }
        id
      }
    }
  }
`