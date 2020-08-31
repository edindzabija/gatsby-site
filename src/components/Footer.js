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
    <div className="footer rounded-lg lg:py-2 lg:px-0 p-4 mt-12 flex justify-end">
      <p className="pr-3">Created by {data.site.siteMetadata.author}, © 2020</p>
    </div>
  )
}

export default Footer
