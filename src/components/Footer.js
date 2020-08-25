import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div className="lg:py-2 lg:px-0 p-4 ">
      <p>Created by {data.site.siteMetadata.author}, © 2020</p>
    </div>
  )
}

export default Footer
