import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            postDescription
            publishedDate(formatString: "DD MMMM, YYYY")
            thumbnail {
              resize {
                src
              }
            }
          }
        }
      }
    }
  `)
  //query will be needed later

  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <main className="mt-12">
          <div className="flex mb-4 px-4 lg:px-0 justify-center">
            <h2 className="font-bold text-3xl">Latest posts</h2>
          </div>
          <div className="grid gap-2 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 m-5 mb-10">
            {data.allContentfulBlogPost.edges.map(post => {
              return (
                <div key={post.node.slug} className="w-full single-post">
                  <img
                    src={post.node.thumbnail.resize.src}
                    className="object-cover h-64 lg:h-48 w-full "
                    alt="technology"
                  />

                  <div className="lg:p-2">
                    <h2 className="font-bold text-2xl ">{post.node.title}</h2>
                    <p className=" mt-2">
                      {post.node.postDescription
                        ? post.node.postDescription.slice(0, 150) + "..."
                        : ""}
                    </p>

                    <Link
                      to={`/blog/${post.node.slug}`}
                      className="inline-block py-2 text-green-900 "
                    >
                      {" "}
                      Read more{" "}
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </main>
      </Layout>
    </div>
  )
}

export default BlogPage
