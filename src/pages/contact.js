import * as React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/pagebanner"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import contactData from "../../data/profile"

export default function Contact({ data }) {
    return (
        <Layout>
            <Seo
                title={data.contact.frontmatter.title_tag}
                description={data.contact.frontmatter.meta_description}
            />
            <PageBanner pageTitle="Contact" />
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-child-width-1-2@s" data-uk-grid>
                        <div>
                            <h2>Contact the Team</h2>
                            <p>Give us a call, email or text and find out how we can help you</p>
                            <p>Whether you're an existing client or someone who needs help getting started, we'll walk you through everything you may need to get your website running.</p>
                            <ul className="uk-list">
                                    {
                                        contactData.contact_information.email &&
                                        <li>
                                            <a href={`mailto: ${contactData.contact_information.email}`}>{contactData.contact_information.email}</a>
                                        </li>
                                    }
                                    {
                                        contactData.contact_information.office &&
                                        <li>
                                            <a href={`tel: ${contactData.contact_information.office}`}>Office: {contactData.contact_information.office}</a>
                                        </li>
                                    }
                                    {
                                        contactData.contact_information.cell &&
                                        <li>
                                            <a href={`tel: ${contactData.contact_information.cell}`}>Direct: {contactData.contact_information.cell}</a>
                                        </li>
                                    }
                                    {
                                        contactData.contact_information.address &&
                                        <li>
                                            <a href="#">{contactData.contact_information.address}, {contactData.contact_information.city}, {contactData.contact_information.state} {contactData.contact_information.zip_code} </a>
                                        </li>
                                    }
                                </ul>
                        </div>
                        <div>
                        <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" className="uk-grid-small" data-uk-grid action="/thank-you">
                            <input name="bot-field" type="hidden" />
                            <input type="hidden" name="Subject" value="Website Contact Form" />
                            <div class="uk-width-1-2@s">
                                <input class="uk-input" type="text" placeholder="Name*" name="Name" required />
                            </div>
                            <div class="uk-width-1-2@s">
                                <input class="uk-input" type="text" placeholder="Phone*" name="Phone" required />
                            </div>
                            <div class="uk-width-1-1">
                                <input class="uk-input" type="text" placeholder="Email*" name="Email" required />
                            </div>
                            <div class="uk-width-1-1">
                                <textarea class="uk-textarea" rows="5" placeholder="Your Message" name="Message"></textarea>
                            </div>
                            <div class="uk-width-1-1">
                                <button class="uk-button uk-button-secondary">Submit</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const ContactPage = graphql`
{
    contact: markdownRemark(fileAbsolutePath: {regex: "/.*content\\/pages\\/contact/"}) {
      frontmatter {
        title_tag
        meta_description
        title
      }
    }
  }
`