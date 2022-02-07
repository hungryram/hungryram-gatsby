import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/pagebanner"
import showdown from "showdown"
import Seo from "../components/seo"

export default function BlogTemplate({ data }) {
  const { title } = data.blogpost.frontmatter
  const converter = new showdown.Converter();

  return (
    <Layout>
      <Seo 
        title={data.blogpost.frontmatter.title_tag}
        description={data.blogpost.frontmatter.meta_description}
      />
      <PageBanner pageTitle={title} />
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid-large" data-uk-grid>
            <div className="uk-width-2-3@s">
              {
                data.blogpost.frontmatter.intro &&
                <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.blogpost.frontmatter.intro) }} />

              }
              <div className="uk-margin-large">
                <img src={data.blogpost.frontmatter.featured_image} alt="" />
              </div>
              <div dangerouslySetInnerHTML={{ __html: data.blogpost.html }} />
            </div>
            <div className="uk-width-expand@s">
              <div>
                <img src="https://res.cloudinary.com/hungryram19/image/upload/v1637540007/hungryram/newramdettmer.jpg" alt="" />
                <div className="uk-margin-medium-top">
                  <h2 className="uk-h4">About Ram Dettmer</h2>
                  <p>Ram started his career in 2012 building websites for a variety of industries across the country. Primarily focused on real estate and small businesses, his work has been featured on IHomefinder, one of the largest IDX providers for real estate.</p>
                </div>
                <div className="uk-margin-medium-top">
                  <h2 className="uk-h4">Recent Posts</h2>
                  <ul className="uk-list">
                    {data.otherPost.nodes.map((node) => {
                      return (
                        <li>
                          <Link to={"/blog" + node.fields.slug} key={node.id}>{node.frontmatter.title}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($slug: String) {
  blogpost: markdownRemark(fields: {slug: {eq: $slug}}) {
    id
    frontmatter {
      title
      featured_image
      intro
      title_tag
      meta_description
    }
    html
  }
  otherPost: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/blog/"}}
    limit: 5 
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    nodes {
      fields {
        slug
      }
      frontmatter {
        title
      }
      id
    }
  }
}

`