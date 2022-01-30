import * as React from 'react'
import Navbar from "./global/navbar"
import Footer from "./global/footer"
import "../styles/global.css"

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
                <main>
                    {children}
                </main>
            <Footer />
        </div>
    )
}