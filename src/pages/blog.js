import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/Layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/Head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD MMMM, YYYY")
            # thumbnail {
            #   resize {
            #     src
            #   }
            # }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <h1>Bloggerino</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map(post => {
            return (
              <li className={blogStyles.post}>
                <Link to={`/blog/${post.node.slug}`}>
                  {/* <img
                    alt={post.node.title}
                    src={post.node.thumbnail.resize.src}
                  /> */}
                  <h2>{post.node.title}</h2>
                  <p>{post.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
