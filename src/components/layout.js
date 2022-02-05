import * as React from 'react'
import Navbar from "./global/navbar"
import Footer from "./global/footer"
import "../styles/global.css"
import Helmet from 'react-helmet'
import Seo from "../components/seo"
import { StaticQuery, graphql } from 'gatsby'

export default function Layout({ children }) {


    return (
        <StaticQuery
            query={graphql`
            query{
                site:site {
                    siteMetadata {
                      title
                      description
                    }
                  }
            }
            `}
            render={data => (
                <>
                <Seo
                    title={data.site.siteMetadata.title }
                />
                    <Helmet>
                        
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet" />


                        <style type="text/css">
                            {`
                                :root {
                                    --accent-color: #2196f3;
                                    --font-family: "Poppins", sans-serif;
                                }
                            `}
                        </style>
                    </Helmet>
                    <Navbar />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </>
            )}
        />
    )
}