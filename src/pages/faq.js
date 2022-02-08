import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PageBanner from "../components/pagebanner";
import Seo from "../components/seo";

export default function Faq({ data }) {
    const faq = data.faq.frontmatter
    return (
        <Layout>
            <Seo
                title={data.faq.frontmatter.title_tag}
                description={data.faq.frontmatter.meta_description}
            />
            <PageBanner pageTitle={faq.title} />
            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <h2 class="uk-h3">General FAQ</h2>
                    <ul data-uk-accordion>
                        {faq.general_faq.map((node) => {
                            return (
                                <li>
                                    <a className="uk-accordion-title" href="# ">{node.question}</a>
                                    <div className="uk-accordion-content">
                                        <p className="uk-margin-small-left">{node.answer}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <h2 class="uk-h3">Real Estate FAQ</h2>
                    <ul data-uk-accordion>
                        {faq.real_estate_faq.map((node) => {
                            return (
                                <li>
                                    <a className="uk-accordion-title" href="# ">{node.question}</a>
                                    <div className="uk-accordion-content">
                                        <p className="uk-margin-small-left">{node.answer}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <h2 class="uk-h3">Small Business FAQ</h2>
                    <ul data-uk-accordion>
                        {faq.small_business_faq.map((node) => {
                            return (
                                <li>
                                    <a className="uk-accordion-title" href="# ">{node.question}</a>
                                    <div className="uk-accordion-content">
                                        <p className="uk-margin-small-left">{node.answer}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export const FaqData = graphql`
{
    faq: markdownRemark(fileAbsolutePath: {regex: "/.*content\\/pages\\/faq/"}) {
      frontmatter {
        title_tag
        meta_description
        featured_image
        title
        general_faq {
          answer
          question
        }
        real_estate_faq {
          answer
          question
        }
        small_business_faq {
          answer
          question
        }
      }
    }
  }
  
`