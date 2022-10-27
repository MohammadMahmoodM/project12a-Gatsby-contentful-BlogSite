import * as React from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to my sample Gatsby Site which is being opereated from Contentful as CMS</p>
    
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> </div>
      <Link to="/blog/">Visit the Blog Page</Link>
    </Layout>
  </div>
)

export default IndexPage