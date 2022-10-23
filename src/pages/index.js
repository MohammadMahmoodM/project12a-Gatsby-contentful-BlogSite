import * as React from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
//import * as styles from "../components/index.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> </div>
    <Link to="/blog/">Visit the Blog Page</Link>
  </Layout>
)

export default IndexPage