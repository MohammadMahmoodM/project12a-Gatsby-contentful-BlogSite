import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          edges {
            node {
              title
              id
              slug
              publishedDate
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
              featuredImage {
                gatsbyImageData(width: 1000, placeholder: BLURRED, formats: AUTO)
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout >
      <Seo title="Blog" />
      <h1>Hi from the second page</h1>
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul className="posts">
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.publishedDate}</span>
              </div>
              {edge.node.featuredImage && (
                <GatsbyImage
                  className="featured"
                  image={getImage(edge.node.featuredImage)}
                  alt={edge.node.title}
                />
              )}
              <p className="excerpt">
                {edge.node.excerpt.childMarkdownRemark.excerpt}
              </p>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout >
  )
}

export default Blog
