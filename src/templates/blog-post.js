import React from "react"
import { graphql, Link } from "gatsby"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

export const query = graphql`
query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug })  {
        title
        publishedDate(formatString: "Do MMMM, YYYY")
        featuredImage {
          gatsbyImageData
        }
        body {
            raw
          }
      }
  }
`

const BlogPost = props => {
    const options = {
        renderNode: {
            "embedded-asset-block": node => {
                const alt = node.data.target.fields.title["en-US"]
                const url = node.data.target.fields.file["en-US"].url
                return <img alt={alt} src={url} />
            },
        },
    }
    return (
        <Layout>
            <Seo title={props.data.contentfulBlogPost.title} />
            <Link to="/blog/">Visit the Blog Page</Link>
            <div className="content">
                <h1>{props.data.contentfulBlogPost.title}</h1>
                <span className="meta">
                    Posted on {props.data.contentfulBlogPost.publishedDate}
                </span>
                {props.data.contentfulBlogPost.featuredImage && (
                    <GatsbyImage
                        className="featured"
                        image={getImage(props.data.contentfulBlogPost.featuredImage)}
                        alt={props.data.contentfulBlogPost.title}
                    />
                )}

                {renderRichText(props.data.contentfulBlogPost.body, options)}
            </div>
        </Layout>
    )
}

export default BlogPost