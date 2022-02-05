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
                                    <div>
                                    <div className={`uk-card uk-card-body ${serviceList.serviceList}`}>
                                        <Link to={"/services" + node.fields.slug} className="uk-link-reset">
                                            <div>
                                                <h3 class="uk-text-default">{node.frontmatter.title}</h3>
                                                <p>{node.frontmatter.description}</p>
                                            </div>
                                        </Link>
                                    </div>

                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        />
    )
}