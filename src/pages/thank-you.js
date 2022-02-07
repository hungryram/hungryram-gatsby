import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/pagebanner"

export default function ThankYou() {
    return (
        <Layout>
            <PageBanner pageTitle="Thank You" />
            <div className="uk-section">
                <div className="uk-container">
                    <h2>Thank you</h2>
                    <p>Our team will reach our to you shortly!</p>
                    <Link to="/" className="uk-button uk-button-primary">Return home</Link>
                </div>
            </div>
        </Layout>
    )
}