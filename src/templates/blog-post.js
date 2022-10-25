import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

export const query = graphql`
query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug })  {
        title
        publishedDate(formatString: "Do MMMM, YYYY")
        featuredImage {
          gatsbyImageData
        }
      }
  }
`

const BlogPost = props => {
    return (
        <Layout>
            <SEO title={props.data.contentfulBlogPost.title} />
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
            </div>
        </Layout>
    )
}

export default BlogPost