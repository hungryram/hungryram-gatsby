import * as React from "react"
import Layout from "../../components/layout"
import PageBanner from "../../components/pagebanner"
import ServiceList from "../../components/servicelist"
import Seo from "../../components/seo"

export default function Services() {
    return (
        <Layout>
            <Seo
                title="Services | Hungry Ram Web Design"
                description="Full service web design and development for real estate and small businesses. We help establish an online presence using only modern tools."
            />
            <PageBanner pageTitle="Services"/>
            <div className="uk-section">
                <div className="uk-container">
                    <h1>Services</h1>
                    <ServiceList />
                </div>
            </div>
        </Layout>
    )
}