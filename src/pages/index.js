import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            postDescription
            title
            slug
            publishedDate(formatString: "DD MMMM, YYYY")
            thumbnail {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)
  console.log(data.allContentfulBlogPost.edges[0].node.thumbnail.fluid.src)
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <main className="mt-12">
          {/* part 1 */}
          <div className="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
            {/* <!-- main post --> */}
            <div className="mb-4 lg:mb-0 p-4 lg:p-2 lg:pl-0 w-full md:w-4/7 relative block">
              <img
                src={
                  data.allContentfulBlogPost.edges[0].node.thumbnail.fluid.src
                }
                alt="top-post-image"
              />
              <span className="text-sm hidden md:block mt-4">
                {" "}
                React {" - "}
                Gatsby {" - "}
                GraphQL {" - "}
                CMS{" "}
              </span>
              <h1 className=" text-4xl font-bold mt-2 mb-2 leading-tight">
                How to make your personal blog with React and Gatsby.js [Part 1]
              </h1>
              <p className=" mb-4">
                In this series of posts we will go trough the whole process of
                creating a personal blog with React and Gatsby.js You will learn
                everything from setting up the project to deploying it on the
                web...
              </p>
              <Link
                to={`/blog/how-to-make-your-personal-blog-with-react-and-gatsby-js-part-1`}
                className="focus:outline-none inline-block px-6 py-3 mt-2 -md rounded-md bg-green-700 text-gray-100 "
              >
                Read More
              </Link>
            </div>

            {/* <!-- sub-main posts --> */}
            <div className="w-full md:w-4/7">
              {data.allContentfulBlogPost.edges.slice(0, 4).map(post => {
                return (
                  <div className="p-4 lg:p-2" key={post.node.slug}>
                    <Link to={`/blog/${post.node.slug}`}>
                      <div className="top-post p-2 flex shadow-sm mx-auto mb-30 mb-2 max-w-lg md:max-w-2xl h-40">
                        <img
                          className="lg:block w-2/5 lg:w-1/3 pb-5/6"
                          src={post.node.thumbnail.fluid.src}
                          alt={post.node.slug}
                        />
                        <div className="w-full md:w-2/3 px-4 pb-4 ">
                          <div className="rounded mb-1">
                            {post.node.publishedDate}
                          </div>
                          <div className="flex items-center">
                            <h3 className="text-xl font-medium mr-auto">
                              {post.node.title.length > 50
                                ? post.node.title.slice(0, 50) + "..."
                                : post.node.title}
                            </h3>
                          </div>
                          <div className="flex items-center justify-end mt-4 top-auto"></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
          {/* part 1 */}
          <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
            <h2 className="font-bold text-3xl">Latest posts</h2>
          </div>
          <div className="block space-x-0 lg:flex lg:space-x-6">
            {data.allContentfulBlogPost.edges.slice(0, 4).map(post => {
              return (
                <div
                  key={post.node.slug + "-latest"}
                  className=" w-full lg:w-1/3 p-4 lg:p-0"
                >
                  <Link to={`/blog/${post.node.slug}`}>
                    <img
                      src={post.node.thumbnail.fluid.src}
                      alt={post.node.slug}
                      className="h-auto lg:h-48 w-full"
                    />
                  </Link>
                  <div className="p-4 pl-0">
                    <h2 className="font-bold text-2xl ">
                      {post.node.title.length > 55
                        ? post.node.title.slice(0, 55) + "..."
                        : post.node.title}
                    </h2>
                    <p className="mt-2">{post.node.postDescription}</p>

                    <Link
                      to={`/blog/${post.node.slug}`}
                      className="read-more inline-block py-2 mt-2 ml-auto"
                    >
                      {" "}
                      Read more{" "}
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
          {/* recent with dummy text end */}
        </main>
      </Layout>
    </div>
  )
}
export default IndexPage
