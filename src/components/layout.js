import * as React from 'react'
import Navbar from "./global/navbar"
import Footer from "./global/footer"
import "../styles/global.css"
import Helmet from 'react-helmet'

export default function Layout({ children }) {
    return (
        <div>
            <Helmet>
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
        </div>
    )
}