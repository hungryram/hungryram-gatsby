import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";

export default function Seo({ title, description }) {
    return (
        <StaticQuery
            query={graphql`
            query {
                site {
                    siteMetadata {
                      title
                      description
                      image
                      twitter
                      image
                    }
                  }
            }
            `}
            render={data => {
                const metaDescription = description || data.site.siteMetadata.description;
                const titleTag = title || data.site.siteMetadata.title;


                return (
                    <Helmet
                        title={title}
                        meta={[
                            {
                                name: 'description',
                                content: metaDescription,
                              },
                              {
                                name: 'og:type',
                                content: 'website',
                              },
                              {
                                name: 'og:title',
                                content: titleTag,
                              },
                              {
                                name: 'og:description',
                                content: metaDescription,
                              },
                              {
                                name: 'twitter:card',
                                content: 'summary_large_image',
                              },
                              {
                                name: 'twitter:description',
                                content: description,
                              },
                              {
                                name: 'twitter:title',
                                content: title,
                              },
                              {
                                name: 'twitter:image',
                                content: data.site.siteMetadata.image,
                              },
                              {
                                name: 'twitter:creator',
                                content: data.site.siteMetadata.twitter
                              },
                        ]}
                    />
                )
            }}
        />
    )
}