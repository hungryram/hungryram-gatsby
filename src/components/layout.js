import * as React from 'react'
import Navbar from "./global/navbar"
import Footer from "./global/footer"
import "../styles/global.css"
import Helmet from 'react-helmet'
import appearance from "../../data/appearance"

export default function Layout({ children }) {

    const color = appearance.colors


    return (
        <>
            <Helmet>
                <style type="text/css">
                    {`
                    :root {
                        --accent-color: ${color.primary_color};
                        --font-family: "Poppins", sans-serif;
                    }
                `}
                </style>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet" />
                <meta name="application-name" content="Hungry Ram Web Design" />
                <meta property="og:site_name" content="Hungry Ram Web Design" />
                <link rel="apple-touch-icon" sizes="152x152" href="https://res.cloudinary.com/hungryram19/image/upload/v1631928636/hungryram/2021-hr-favicon_ojvdoa.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="https://res.cloudinary.com/hungryram19/image/upload/v1631928636/hungryram/2021-hr-favicon_ojvdoa.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="https://res.cloudinary.com/hungryram19/image/upload/v1631928636/hungryram/2021-hr-favicon_ojvdoa.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="https://res.cloudinary.com/hungryram19/image/upload/v1631928636/hungryram/2021-hr-favicon_ojvdoa.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/hungryram19/image/upload/v1631928636/hungryram/2021-hr-favicon_ojvdoa.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="https://res.cloudinary.com/hungryram19/image/upload/v1631928636/hungryram/2021-hr-favicon_ojvdoa.png" />
                <link rel="apple-touch-icon" href="https://res.cloudinary.com/hungryram19/image/upload/v1631928636/hungryram/2021-hr-favicon_ojvdoa.png" />
                <link rel="shortcut icon" href="https://res.cloudinary.com/hungryram19/image/upload/v1631928636/hungryram/2021-hr-favicon_ojvdoa.png" />
            </Helmet>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}