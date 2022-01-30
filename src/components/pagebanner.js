import * as React from "react"
import * as styles from "../styles/pages.module.css"

export default function PageBanner() {
    return (
        <div className="uk-background-cover uk-height-large uk-flex uk-flex-center uk-flex-middle uk-position-relative" style={{ backgroundImage: `url("https://res.cloudinary.com/hungryram19/image/upload/v1628200056/hungryram/desktop2_igppbt.jpg")` }}>
        <div className={`uk-position-cover ${styles.ukOverlayHero}`}></div>
        <div className="uk-container uk-container-small uk-light">
          <div className="uk-width-2xlarge uk-text-center high-index uk-margin-large-top">
            <div>
              <h2>Scale your business with a website design that is thoughtfully crafted</h2>
            </div>
          </div>
        </div>
      </div>
    )
}