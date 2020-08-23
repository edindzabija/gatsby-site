import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

const IndexPage = () => (
  <div>
    <Layout>
      <Head title="Home" />
      <h1>This is a Gatsby Page</h1>
      <p>
        The content will be here, meanwhile feel free to contact me{" "}
        <Link to="/about">here</Link>
      </p>
    </Layout>
  </div>
)
export default IndexPage
