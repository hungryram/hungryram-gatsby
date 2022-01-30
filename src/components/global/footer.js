import * as React from "react";
import * as footerContainer from "../../styles/footer.module.css"
import { Link } from "gatsby"

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
                                <li>
                                    <a href="mailto:ram@hungryram.com">ram@hungryram.com</a>
                                </li>
                                <li>
                                    <a href="mailto:ram@hungryram.com">Office: (657) 549-5082</a>
                                </li>
                                <li>
                                    <a href="mailto:ram@hungryram.com">Direct: (951) 454-2650</a>
                                </li>
                                <li>
                                    <a href="mailto:ram@hungryram.com">5511 Mirage St #1007, Yorba Linda, CA 92887</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="uk-h5">Choose a website</h3>
                            <ul className="uk-list">
                                <li>
                                    <a href="mailto:ram@hungryram.com">ram@hungryram.com</a>
                                </li>
                                <li>
                                    <a href="mailto:ram@hungryram.com">Office: (657) 549-5082</a>
                                </li>
                                <li>
                                    <a href="mailto:ram@hungryram.com">Direct: (951) 454-2650</a>
                                </li>
                                <li>
                                    <a href="mailto:ram@hungryram.com">5511 Mirage St #1007, Yorba Linda, CA 92887</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="uk-h5">Contact Information</h3>
                            <ul className="uk-list">
                                <li>
                                    <a href="mailto:ram@hungryram.com">ram@hungryram.com</a>
                                </li>
                                <li>
                                    <a href="mailto:ram@hungryram.com">Office: (657) 549-5082</a>
                                </li>
                                <li>
                                    <a href="mailto:ram@hungryram.com">Direct: (951) 454-2650</a>
                                </li>
                                <li>
                                    <a href="mailto:ram@hungryram.com">5511 Mirage St #1007, Yorba Linda, CA 92887</a>
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