import * as React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import * as serviceList from "../styles/servicelist.module.css"

export default function ServiceList() {
    return (
        <StaticQuery
            query={graphql`
        query {
            services: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/services/"}}) {
              nodes {
                fields {
                  slug
                }
                id
                frontmatter {
                  title
                  description
                }
              }
            }
          }
        `}
            render={data => (
                <div>
                    <div className="uk-container">
                        <div className="uk-child-width-1-3@s uk-grid-collapse" data-uk-grid>
                            {data.services.nodes.map((node) => {
                                return (
                                    <Link to={"/services" + node.fields.slug} className="uk-link-reset">

                                    <div>
                                    <div className={`uk-card uk-card-body ${serviceList.serviceList}`}>
                                            <div>
                                                <h3 className="uk-text-default">{node.frontmatter.title}</h3>
                                                <p>{node.frontmatter.description}</p>
                                            </div>
                                    </div>

                                </div>
                                </Link>

                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        />
    )
}