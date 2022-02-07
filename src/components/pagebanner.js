import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import * as styles from "../styles/pages.module.css"

export default function PageBanner({ pageTitle }) {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark {
        frontmatter {
          title
        }
      }
    }
`)

  return (
    <div className="uk-background-cover uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-position-relative" style={{ backgroundImage: `url("https://res.cloudinary.com/hungryram19/image/upload/v1628200056/hungryram/desktop2_igppbt.jpg")` }}>
      <div className={`uk-position-cover ${styles.ukOverlayHero}`}></div>
      <div className="uk-container uk-container-small uk-light">
        <div className="uk-text-center high-index uk-margin-xlarge-top">
          <div>
            <h2>{ pageTitle }</h2>
          </div>
        </div>
      </div>
    </div>
  )
}