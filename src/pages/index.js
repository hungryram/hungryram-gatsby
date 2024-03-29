import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import * as styles from "../styles/hero.module.css"
import ServiceList from "../components/servicelist"
import Computer from "../images/computer.svg"
import Performance from "../images/performance.svg"
import Search from "../images/search.svg"
import Seo from "../components/seo"
import IndexSeo from "../../data/seo.json"


export default function Home({ data }) {

  const schemaMarkup =
    {
      "@context": "http://schema.org",
      "@type": "ProfessionalService",
      "image": "https://res.cloudinary.com/hungryram19/image/upload/v1606809089/hungryram/favicon_wbz1ng.jpg",
      "priceRange": null,
      "telephone": "657-549-5082",
      "name": "Hungry Ram",
      "logo": "https://res.cloudinary.com/hungryram19/image/upload/v1606809089/hungryram/favicon_wbz1ng.jpg",
      "description": "Orange County web design for real estate professionals and small businesses.",
      "geo": {
          "@type": "GeoCoordinates",
          "latitude": 33.87521697227549,
          "longitude": -117.74577287142314
      },
      "url": "https://www.hungryram.com",
      "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "657-549-5082",
          "contactType": "customer service",
          "email": "ram@hunryram.com",
          "contactOption": "",
          "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 33.87521697227549,
                  "longitude": -117.74577287142314
              },
              "geoRadius": 1000
          }
      },
      "address": {
          "@type": "PostalAddress",
          "addressCountry": "United States",
          "addressLocality": "Yorba Linda",
          "addressRegion": "CA",
          "postalCode": "92887",
          "streetAddress": "5511 Mirage Street #1007"
      }
  }

  const homeTitle = IndexSeo.title_tag;
  const homeDescription = IndexSeo.meta_description;

  return (
    <Layout>
      <Seo
        title={homeTitle}
        description={homeDescription.meta_description}
        schemaMarkup={schemaMarkup}
      />
      <div
        className="uk-background-norepeat uk-background-cover uk-background-center uk-section uk-section-large uk-flex uk-flex-middle uk-position-relative"
        data-uk-height-viewport="offset-top: true;"
        style={{ backgroundImage: `url("https://res.cloudinary.com/hungryram19/image/upload/v1636968077/hungryram/business-meet.jpg")` }}>
        <div className={`uk-position-cover ${styles.ukOverlayHero}`}></div>
        <div className="uk-width-1-1">
          <div className="uk-container uk-container-large uk-light">
            <div className="uk-child-width-1-2 uk-grid-margin uk-grid uk-grid-stack" data-uk-grid>
              <div className="uk-grid-item-match uk-width-1-2@m">
                <div className="uk-flex">
                  <div className="uk-tile uk-width-1-1 uk-background-norepeat uk-background-center-center">
                    <h1 className="uk-heading-xsmall uk-text-left">The best website platform for real estate and small business</h1>
                    <div className="uk-width-large">
                      <p>We help you create, and maintain connections with your customers through our trustworthy websites</p>
                      <Link href="/contact" className="uk-button uk-button-primary">Contact</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="uk-container">
          <div data-uk-grid>
            <div className="uk-width-expand@s">
              <h2 className="uk-h3">We specialize in real estate and small business websites</h2>
            </div>
            <div className="uk-width-3-5@s">
              <p>WordPress is the most used website builder in the world for real estate and small businesses. This means that all of your competitors are using it too, and that's a problem when you want to stand out.</p>
              <p>Hungry Ram delivers a better solution that gives our clients in real estate and small businesses the edge over their competitors. We adopted a new method called Jamstack that provides the fastest and most secure websites. With our efficiently built webites, our clients see an average of 20% increase in conversion rates when they use our website!</p>
              <p><strong>Let's take your business to the next level with a strong website</strong></p>
              <div>
                <Link to="/services" className="uk-button uk-button-primary">View Services</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section">
        <div className="uk-container">
          <div data-uk-grid>
            <div className="uk-width-3-5@s">
              <h2>What is our goal?</h2>
              <p>We know how important it is to have an online presence, but we also know that Wordpress isn’t always the best solution for your business. We want to show business owners that there are better faster and more secure alternatives to WordPress.</p>
              <p>Hungry Ram uses modern development architecture designed to make your website faster more secure, and flexible to scale</p>
            </div>
          </div>
          <div className="uk-grid-small uk-child-width-1-3@s uk-margin-large-top" data-uk-grid>
            <div>
              <div className="uk-card uk-card-body uk-text-center">
                <img src={Computer} alt="" width="100" />
                <h3 className="uk-h3 uk-text-strong">More Secure Than Traditional Websites</h3>
                <p>Get the most out of your website with a secure site that will keep your website protected. Our websites are accessed only through SSL connections and static files!</p>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-body uk-text-center">
                <img src={Performance} alt="" width="100" />
                <h3 className="uk-h3 uk-text-strong">More Secure Than Traditional Websites</h3>
                <p>Get the most out of your website with a secure site that will keep your website protected. Our websites are accessed only through SSL connections and static files!</p>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-body uk-text-center">
                <img src={Search} alt="" width="100" />
                <h3 className="uk-h3 uk-text-strong">More Secure Than Traditional Websites</h3>
                <p>Get the most out of your website with a secure site that will keep your website protected. Our websites are accessed only through SSL connections and static files!</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="uk-background-cover uk-height-large uk-flex uk-flex-center uk-flex-middle uk-position-relative" style={{ backgroundImage: `url("https://res.cloudinary.com/hungryram19/image/upload/v1628200056/hungryram/desktop2_igppbt.jpg")` }}>
        <div className={`uk-position-cover ${styles.ukOverlayHero}`}></div>
        <div className="uk-container uk-container-small uk-light">
          <div className="uk-text-center high-index">
            <div>
              <h2>Scale your business with a website design that is thoughtfully crafted</h2>
              <p className="uk-white">Hungry Ram provides exceptional customer support, reliable web hosting, and maintenance for your website. Our website is designed to deliver a better user experience for your customers.</p>
              <a href="https://calendly.com/hungry-ram" className="uk-button uk-button-primary">Book a call</a>
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-flex uk-flex-center">
            <div className="uk-width-2xlarge uk-text-center">
              <h2>Our web design services</h2>
              <p>We provide high quality web design services for real estate and small businesses that are tailored to meet the specific needs of each client. Get a website that will help your business stand out from the competition.</p>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
      <ServiceList />


      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-flex uk-flex-center">
            <div className="uk-width-2xlarge uk-text-center">
              <h2>Recent Work</h2>
              <p>We've designed websites for clients all over the United States. There are many reasons our clients refer their friends and family to us. View our recent web design case studies for various businesses ranging from real estate to franchised restaurants.</p>
            </div>
          </div>
          <div className="uk-child-width-1-3@s uk-margin-large-top" data-uk-grid>
            {data.portfolio.nodes.map((node) => {
              return (
                <div>
                  <div className="uk-card uk-card-default">
                    <Link to={"/portfolio" + node.fields.slug}>
                      <img src={node.frontmatter.featured_image} alt={node.frontmatter.title} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const HomeData = graphql`
query MyQuery {
  portfolio: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/portfolio/"}}
    limit: 6
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    nodes {
      fields {
        slug
      }
      id
      frontmatter {
        featured_image
        title
      }
    }
  }
  services: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/services/"}}) {
    nodes {
      fields {
        slug
      }
      id
      frontmatter {
        featured_image
      }
    }
  }
}
`