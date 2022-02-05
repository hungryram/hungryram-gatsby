import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/pagebanner"
import Seo from "../components/seo"

export default function About({ data }) {
    return (
        <Layout>
            <Seo 
                title={data.about.frontmatter.title_tag}
                description={data.about.frontmatter.meta_description}
            />
            <PageBanner pageTitle="About" />
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-child-width-1-2@s uk-grid-large" data-uk-grid>
                        <div>
                            <h2>Paving the new web architecture</h2>
                            <p>Hungry Ram Web Design is a small studio founded by Ram Dettmer located in Yorba Linda, CA. We are a team of web designers and graphic designers with a passion for anything tech. There is never a day where we never stop learning and this has helped us stand out from larger agencies.</p>
                            <Link to="/contact" className="uk-button uk-button-primary">Get in touch</Link>
                        </div>
                        <div>
                            <h2>Image here</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-child-width-1-2@s uk-grid-large" data-uk-grid>
                        <div>
                            <h2>Image here</h2>
                        </div>
                        <div>
                            <h2>Paving the new web architecture</h2>
                            <p>We have achieved success by moving away from the direction most agencies were going towards - building on WordPress, or any other website builders out there. Website builders allow for easy customization without having to touch code which allows agencies to deliver faster designs.</p>
                            <p>Back in 2018, we learned that there was a new way to build faster and more secure websites that only experienced independent developers had adopted, and that way was using the jamstack architecture. So we decided to utilize this method and give our clients the upper hand. Jamstack sites are essentially hand-coded from scratch without the need for a database, resulting in a much more secure and faster website.</p>
                            <Link to="/contact" className="uk-button uk-button-primary">Get in touch</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const AboutData = graphql`
query {
    about: markdownRemark(fileAbsolutePath: {regex: "/.*content\\/pages\\/about/"}) {
      frontmatter {
        title_tag
        meta_description
        featured_image
      }
    }
  }
  
`