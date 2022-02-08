import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/pagebanner"
import Seo from "../components/seo"
import { BsCheck } from "@react-icons/all-files/bs/BsCheck"

export default function About({ data }) {
    return (
        <Layout>
            <Seo
                title={data.about.frontmatter.title_tag}
                description={data.about.frontmatter.meta_description}
            />
            <PageBanner pageTitle="About" />
            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <h2 className="uk-h3">Our goal is to create the most modern and easy website usability based on user interaction</h2>
                    <p>Hungry Ram Web Design is a small studio founded by Ram Dettmer located in Yorba Linda, CA. We are a team of web designers and graphic designers with a passion for anything tech. There is never a day where we never stop learning and this has helped us stand out from larger agencies.</p>
                    <h2 className="uk-h3">How is Hungry Ram doing things differently?</h2>
                    <p>We have achieved success by moving away from the direction most agencies were going towards - building on WordPress, or any other website builders out there. Website builders allow for easy customization without having to touch code which allows agencies to deliver faster designs.</p>

                    <p>Back in 2018, we learned that there was a new way to build faster and more secure websites that only experienced independent developers had adopted, and that way was using the jamstack architecture. So we decided to utilize this method and give our clients the upper hand. Jamstack sites are essentially hand-coded from scratch without the need for a database, resulting in a much more secure and faster website.</p>
                    <h2 className="uk-h3">Why the name Hungry Ram?</h2>
                    <p>It all started with a joke from a friend that the founder, Ram was always hungry and loved cooking, so he purchased the domain hungryram.com. But Hungry Ram came to be more than just a hungry founder. Hungry Ram could mean you're hungry for success, hungry to reach your goals, and that was how Hungry Ram came to be. Helping businesses in the digital world who are hungry for success became one of our best achievements.</p>
                </div>
            </div>

            <div className="uk-section">
                <div className="uk-position-relative uk-grid-collapse uk-child-width-1-2@s uk-margin" style={{ backgroundColor: "#F5F5F5" }} data-uk-grid>
                    <div className="uk-card-media-left uk-cover-container">
                        <img src="https://res.cloudinary.com/hungryram19/image/upload/v1628214718/hungryram/contact-hungry-ram_antytx.jpg" alt="" data-uk-cover />
                        <canvas height="500"></canvas>
                    </div>
                    <div className="uk-flex uk-flex-middle uk-flex-center">
                        <div className="uk-width-large">
                            <div className="uk-card-body">
                                <h2>We're small but growing!</h2>
                                <p>Our growth comes from our amazing clients who refer us to their friends and family because they love working with us!</p>
                                <ul className="uk-list">
                                    <li><BsCheck /> We have the experience</li>
                                    <li><BsCheck /> Delivering quality web designs</li>
                                    <li><BsCheck /> The best support you will receive</li>
                                    <li><BsCheck /> We keep your site updated</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-flex uk-flex-center">
                        <div class="uk-width-large uk-text-center uk-margin-large-bottom">
                            <h2 class="uk-margin-remove uk-text-bold">Client Testimonials</h2>
                            <p>Clients across the country spreading referrals and positive feedback!</p>
                        </div>
                    </div>
                    <div class="uk-position-relative uk-visible-toggle" tabindex="-1" data-uk-slider>
                        <ul className="uk-slider-items" data-uk-grid>
                            {data.review.nodes.map((node) => {
                                return (
                                    <li className="uk-width-1-2@s">
                                        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-1@s" data-uk-grid>
                                            <div>
                                                <div className="uk-card-body">
                                                    <p>{node.frontmatter.review}</p>
                                                    <h3 className="uk-card-title uk-margin-remove uk-h6">{node.frontmatter.client_name}</h3>
                                                    <h4 className="uk-h6 uk-dark uk-margin-remove">{node.frontmatter.title}</h4>
                                                    <div className="uk-margin-small-top">
                                                        <Link to={"/portfolio" + node.fields.slug} className="accent">View case study</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <a className="uk-position-center-left uk-position-small" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                        <a className="uk-position-center-right uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
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
    },
    review: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/portfolio/"}, frontmatter: {review: {ne: null}}}
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        nodes {
          frontmatter {
            title
            featured_image
            image_alt_tag
            client_name
            review
          }
          fields {
            slug
          }
          id
        }
      }
  }
  
`