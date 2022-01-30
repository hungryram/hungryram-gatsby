import * as React from "react"
import Layout from "../../components/layout"
import PageBanner from "../../components/pagebanner"
import { graphql } from "gatsby"

export default function Portfolio({ data }) {
    return (
        <Layout>
            <PageBanner />
            <h1>Portfolio</h1>
            <div className="uk-section">
                <div className="uk-container">
                    <div data-uk-grid>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}