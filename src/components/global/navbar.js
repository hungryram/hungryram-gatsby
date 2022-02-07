import * as React from "react"
import { Link } from "gatsby"
import * as navStyles from '../../styles/navbar.module.css';
import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";
import data from "../../../data/profile"

export default function Navbar() {
    const social = data.social_media
    const contact = data.contact_information

    return (
        <div>
            <div className={`uk-position-top uk-visible@m ${navStyles.customTop}`}>
                <div className={navStyles.topNavbar}>
                    <div className="uk-container" data-uk-navbar>
                        <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav">
                                {
                                    social.instagram &&
                                    <li><a href={social.instagram} target="_blank" title="Instagram">Ig</a></li>
                                }
                                {
                                    social.facebook &&
                                    <li><a href={social.facebook} target="_blank" title="Facebook">Fb</a></li>
                                }
                                {
                                    social.yelp &&
                                    <li><a href={social.yelp} target="_blank" title="Yelp">Yp</a></li>
                                }
                            </ul>
                        </div>
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                {
                                    contact.office &&
                                    <li><a href={`tel: ${contact.office}`} target="_blank" title="Office Phone">{contact.office}</a></li>
                                }
                                {
                                    contact.email &&
                                    <li><a href={`mailto: ${contact.email}`} target="_blank" title="Email">{contact.email}</a></li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <nav className="uk-navbar-container uk-navbar-transparent">
                    <div className="uk-container">
                        <div data-uk-navbar>
                            <div className="uk-navbar-left">
                                <Link to="/">
                                    <img src="https://res.cloudinary.com/hungryram19/image/upload/v1631928096/hungryram/2021-hungry-ram-logo-white_bncaxe.png" alt="Hungry Ram Web Design" width="200" />
                                </Link>
                            </div>
                            <div className="uk-navbar-right">
                                <ul className={`uk-navbar-nav ${navStyles.ukNavbarNavParent}`}>
                                    <li><Link to="/">Home</Link></li>
                                    <li>
                                        <a href="#">About <BsChevronDown /></a>
                                        <div className="uk-navbar-dropdown">
                                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                                <li>
                                                    <Link to="/about">About Hungry Ram</Link>
                                                </li>
                                                <li>
                                                    <Link to="/portfolio">Portfolio</Link>

                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Services <BsChevronDown /></a>
                                        <div className="uk-navbar-dropdown">
                                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                                <li>
                                                    <Link to="/services">All Services</Link>
                                                    <Link to="/services/small-business-website-design/">Small Business Websites</Link>
                                                    <Link to="/services/agent-idx-websites/">Agent IDX Websites</Link>
                                                    <Link to="/services/broker-idx-websites/">Broker IDX Websites</Link>
                                                    <Link to="/services/real-estate-agent-websites/">Real Estate Agent</Link>
                                                    <Link to="/services/real-estate-broker-websites/">Real Estate Broker</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Resources <BsChevronDown /></a>
                                        <div className="uk-navbar-dropdown">
                                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                                <li>
                                                    <Link to="/blog">Blog</Link>
                                                </li>
                                                <li>
                                                    <Link to="/faq">FAQ</Link>

                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><Link to="/locations">Locations</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <div className="uk-navbar-item">
                                        <li><a class="uk-button uk-button-primary" href="https://calendly.com/hungry-ram" target="_blank">Book a call</a></li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>






            <div className={navStyles.mobileContainer} data-uk-sticky="animation: uk-animation-slide-top-medium; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-dark; cls-inactive:uk-navbar-transparent; top: 400">
                <nav className="uk-navbar uk-container uk-hidden@m uk-box-shadow-small">
                    <div className="uk-navbar-left">
                        <a href="/">
                            <img src="https://res.cloudinary.com/hungryram19/image/upload/v1631928088/hungryram/2021-hungry-ram-logo-black_hsw94p.png" alt="Hungry Ram Web Design" width="200" class="dark-logo" />
                        </a>
                    </div>
                    <div className="uk-navbar-right">
                        <a className="uk-navbar-toggle" data-uk-navbar-toggle-icon data-uk-toggle="target: #mobile-menu"></a>
                    </div>
                </nav>

                <div id="mobile-menu" uk-offcanvas="mode: reveal">
                    <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                        <ul className="uk-nav-default uk-nav-parent-icon" data-uk-nav>
                            <li className="uk-nav-header">Hungry Ram</li>

                            <li className="uk-nav-header"></li>
                            <li><Link to="">Home</Link></li>
                            <li className="uk-parent">
                                <a to="#">Services</a>
                                <ul className="uk-nav-sub">
                                    <li className="uk-nav-header">Real Estate Websites</li>
                                    <li className="uk-nav-divider"></li>
                                    <li><Link to="/services/real-estate-agent-websites/">Agent websites</Link></li>
                                    <li><Link to="/services/real-estate-broker-websites/">Broker websites</Link></li>
                                    <li className="uk-nav-header">IDX Websites</li>
                                    <li className="uk-nav-divider"></li>
                                    <li><Link to="/services/agent-idx-websites/">Agent IDX</Link></li>
                                    <li><Link to="/services/broker-idx-websites/">Broker IDX</Link></li>
                                    <li className="uk-nav-header">Small Business Websites</li>
                                    <li className="uk-nav-divider"></li>
                                    <li><Link to="/services/ecommerce-website-design/">Ecommerce website</Link></li>
                                    <li><Link to="/services/small-business-website-design/">Small business website</Link></li>
                                </ul>
                            </li>
                            <li className="uk-parent">
                                <a to="#">About</a>
                                <ul className="uk-nav-sub">
                                    <li className="uk-nav-header">Hungry Ram</li>
                                    <li className="uk-nav-divider"></li>
                                    <li><Link to="/about/">About</Link></li>
                                    <li><Link to="/portfolio/">Portfolio</Link></li>
                                    <li><Link to="/contact/">Contact</Link></li>
                                    <li className="uk-nav-header">Resources</li>
                                    <li className="uk-nav-divider"></li>
                                    <li><Link to="/faq/">FAQ</Link></li>
                                    <li><Link to="/blog/">Blog</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li className="uk-nav-header"></li>
                            <li className="uk-nav-divider"></li>
                            <li className="uk-nav-header"></li>

                            <li className="uk-nav-header"></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}