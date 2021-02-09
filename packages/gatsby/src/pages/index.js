import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import BrightTitle from "../components/BrightTitle"

const IndexPage = () => (
  <Layout>
    <BrightTitle>Hello world!</BrightTitle>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/404/">Go to 404</Link>
  </Layout>
)

export default IndexPage
