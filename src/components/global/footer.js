import * as React from "react";
import * as footerContainer from "../../styles/footer.module.css"
import { Link } from "gatsby"
import data from "../../../data/profile"

export default function Footer() {
    return (
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
                                        <a href="">{data.contact_information.address}, {data.contact_information.city}, {data.contact_information.state} {data.contact_information.zip_code} </a>
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
    )
}