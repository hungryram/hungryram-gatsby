import * as React from "react";
import * as footerContainer from "../../styles/footer.module.css"
import { Link } from "gatsby"
import data from "../../../data/profile"

export default function Footer() {
    return (
        <>
            <div className={`uk-section uk-section-small ${footerContainer.topFooter}`}>
                <div className="uk-container">
                    <div className="uk-width-1-1 uk-flex uk-flex-center">
                        <div className="uk-width-large uk-text-center">
                            <h6 className="uk-margin-remove">How we can help you</h6>
                            <h2 className="uk-margin-remove">Tell us about your business</h2>
                            <p>Talk with a developer and find out how Hungry Ram can bring value to your business</p>
                            <div className="uk-margin-medium-top">
                                <a href="https://calendly.com/hungry-ram" className="uk-button uk-button-primary">Let's talk</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className={footerContainer.footer}>

                <div className="uk-section uk-light">
                    <div className="uk-container">
                        <div>
                            <h2>Perfect partner for success</h2>
                        </div>
                        <div className="uk-margin-medium-top uk-child-width-1-4@s" data-uk-grid>
                            <div>
                                <h3 className="uk-h5">Contact Information</h3>
                                <ul className="uk-list">
                                    {
                                        data.contact_information.email &&
                                        <li>
                                            <a href={`mailto: ${data.contact_information.email}`}>{data.contact_information.email}</a>
                                        </li>
                                    }
                                    {
                                        data.contact_information.office &&
                                        <li>
                                            <a href={`tel: ${data.contact_information.office}`}>Office: {data.contact_information.office}</a>
                                        </li>
                                    }
                                    {
                                        data.contact_information.cell &&
                                        <li>
                                            <a href={`tel: ${data.contact_information.cell}`}>Direct: {data.contact_information.cell}</a>
                                        </li>
                                    }
                                    {
                                        data.contact_information.address &&
                                        <li>
                                            <a href="#">{data.contact_information.address}, {data.contact_information.city}, {data.contact_information.state} {data.contact_information.zip_code} </a>
                                        </li>
                                    }
                                </ul>
                            </div>
                            <div>
                                <h3 className="uk-h5">Real Estate Websites</h3>
                                <ul className="uk-list">
                                    <li>
                                        <Link to="/services/real-estate-agent-websites/">Agent Websites</Link>
                                    </li>
                                    <li>
                                        <Link to="/services/real-estate-broker-websites/">Broker Websites</Link>
                                    </li>
                                    <li>
                                        <Link to="/services/agent-idx-websites/">Agent IDX Websites</Link>
                                    </li>
                                    <li>
                                        <Link to="/services/broker-idx-websites/">Broker IDX Websites</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="uk-h5">Small Business Websites</h3>
                                <ul className="uk-list">
                                    <li>
                                        <Link to="/services/small-business-website-design/">Small Business Website Design</Link>
                                    </li>
                                    <li>
                                        <Link to="/services/ecommerce-website-design/">Ecommerce Website Design</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="uk-h5">About Hungry Ram</h3>
                                <p>Providing the best cutting-edge technology and tools to deliver you high-quality websites. Always aiming to provide the highest level of service. Need help growing your business? Let's connect with a web developer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div id="modal-signup" className="uk-flex-top" data-uk-modal>
                <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

                    <button className="uk-modal-close-default" type="button" data-uk-close></button>
                    <div className="uk-text-center uk-dark uk-margin-medium">
                        <h2 className="uk-h3">Find out how our websites are different</h2>
                        <p>Built entirely different from your average websites. Give your website the edge it needs to outrank your competitors</p>
                    </div>
                    <form name="Modal Sign Up" method="POST" netlify-honeypot="bot-field" data-netlify="true" className="uk-grid-small" data-uk-grid action="/thank-you">
                        <input name="bot-field" type="hidden" />
                        <input type="hidden" name="Subject" value="Website Contact Form"/>
                            <div className="uk-width-1-2@s">
                                <input className="uk-input" type="text" placeholder="Name*" name="Name" required/>
                            </div>
                            <div className="uk-width-1-2@s">
                                <input className="uk-input" type="text" placeholder="Phone*" name="Phone" required/>
                            </div>
                            <div className="uk-width-1-1">
                                <input className="uk-input" type="text" placeholder="Email*" name="Email" required/>
                            </div>
                            <div className="uk-width-1-1">
                                <textarea className="uk-textarea" rows="3" placeholder="Your Message" name="Message"></textarea>
                            </div>
                            <div className="uk-width-1-1">
                                <button className="uk-button uk-button-secondary modal-button">Submit</button>
                            </div>
                            <div className="uk-width-1-1 md__content">
                                <small>By submitting this form you agree to our <a href="/legal/privacy-policy">privacy policy</a> and <a href="/legal/terms-and-conditions">terms and condition.</a></small>
                            </div>
                    </form>
                </div>
            </div>
        </>
    )
}