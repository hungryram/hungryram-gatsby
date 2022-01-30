import * as React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/pagebanner"

export default function Contact() {
    return (
        <Layout>
            <PageBanner />
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-child-width-1-2@s" data-uk-grid>
                        <div>
                            <h2>Contact Sales</h2>
                            <p>Give us a call, email or text and find out how we can help you</p>
                            <p>Whether you're an existing client or someone who needs help getting started, we'll walk you through everything you may need to get your website running.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}