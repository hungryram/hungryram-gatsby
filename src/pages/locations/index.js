import * as React from "react"
import Layout from "../../components/layout"
import PageBanner from "../../components/pagebanner"
import { graphql, Link } from "gatsby"

export default function Locations({ data }) {
    return (
        <Layout>
            <PageBanner pageTitle="Locations" />
            <div className="uk-section">
                <div className="uk-container uk-container-small uk-text-center">
                    <div className="uk-margin-large">
                        <h2>Different locations we've serviced</h2>
                        <p>Below are primary service areas that are local to Hungry Ram in Orange County. Although this list areas that are local to us, our clients have grown all across the United States. Contact us and find out how your website performance can improve significantly without heavy resources like WordPress.</p>
                    </div>
                    <div className="uk-flex uk-flex-center">
                        <div className="uk-width-2xlarge">
                            {data.allMarkdownRemark.nodes.map((node) => {
                                return (
                                    <div>
                                        <Link to={"/locations" + node.fields.slug}>
                                            <h2 className="uk-h3">{node.frontmatter.title}</h2>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const LocationsData = graphql`
{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/locations/"}}) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
        id
      }
    }
  }
  
`