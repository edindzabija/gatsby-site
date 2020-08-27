import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <main className="mt-2">
        <h1>Page not found</h1>
        <p>
          <Link to="/">Take me Home</Link>
        </p>
      </main>
    </Layout>
  )
}

export default NotFound
