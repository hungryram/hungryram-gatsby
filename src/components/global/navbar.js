import * as React from "react"
import { Link } from "gatsby"
import * as navStyles from '../../styles/navbar.module.css';

export default function Navbar() {
    return (
        <div className={`uk-position-top ${navStyles.customTop}`}>
            <div className={navStyles.topNavbar}>
                <div className="uk-container" data-uk-navbar>
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li><a href="/" target="_blank" title="Facebook">Fb</a></li>
                            <li><a href="/" target="_blank" title="Facebook">Fb</a></li>
                        </ul>
                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li><a href="/" target="_blank" title="Facebook">Fb</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav className="uk-navbar-container uk-navbar-transparent">
                <div className="uk-container">
                    <div data-uk-navbar="dropbar: true">
                        <div className="uk-navbar-left">
                            <Link to="/">
                                <img src="https://res.cloudinary.com/hungryram19/image/upload/v1631928096/hungryram/2021-hungry-ram-logo-white_bncaxe.png" alt="" width="200" />
                            </Link>
                        </div>
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}