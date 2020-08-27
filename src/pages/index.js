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
            title
            slug
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
  const btnFunc = () => {
    alert("Work in Progress")
  }
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <main className="mt-12">
          <div className="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
            {/* <!-- main post --> */}
            <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7 relative block">
              <img
                src="https://miro.medium.com/max/3000/1*qEKwznoakcHszhcDfcFhzQ.png"
                className="-md object-cover w-full h-64"
              />
              <span className="text-green-700 text-sm hidden md:block mt-4">
                {" "}
                React {" - "}
                Gatsby {" - "}
                GraphQL {" - "}
                CMS{" "}
              </span>
              <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
                How to make your personal blog with React and Gatsby.js [Part 1]
              </h1>
              <p className="text-gray-600 mb-4">
                In this series of posts we will go trough the whole process of
                creating a personal blog with React and Gatsby.js You will learn
                everything from setting up the project to deploying it on the
                web...
              </p>
              <button
                onClick={btnFunc}
                className="focus:outline-none inline-block px-6 py-3 mt-2 -md bg-green-700 text-gray-100"
              >
                Read More
              </button>
            </div>

            {/* <!-- sub-main posts --> */}
            <div className="w-full md:w-4/7">
              {data.allContentfulBlogPost.edges.slice(0, 4).map(post => {
                return (
                  <Link to={`/blog/${post.node.slug}`}>
                    <div className="flex shadow-sm mx-6 mx-auto mb-30 mb-2  max-w-lg md:max-w-2xl h-40">
                      <img
                        className="h-full w-1/3 object-cover pb-5/6"
                        src={post.node.thumbnail.resize.src}
                        alt={post.node.slug}
                      />
                      <div className="w-full md:w-2/3 px-4 py-4 bg-white">
                        <div className="flex items-center">
                          <h3 className="text-xl text-gray-800 font-medium mr-auto">
                            {post.node.title.length > 50
                              ? post.node.title.slice(0, 50) + "..."
                              : post.node.title}
                          </h3>
                        </div>
                        <div className="flex items-center justify-end mt-4 top-auto"></div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
          {/* recent with dummy text - todo map news*/}
          <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
            <h2 className="font-bold text-3xl">Latest news</h2>
            <a className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1  cursor-pointer">
              View all
            </a>
          </div>
          <div className="block space-x-0 lg:flex lg:space-x-6">
            <div className=" w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className=""
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">
                  Put all speaking her delicate recurred possible.
                </h2>
                <p className="text-gray-700 mt-2">
                  Set indulgence inquietude discretion insensible bed why
                  announcing. Middleton fat two satisfied additions. So
                  continued he or commanded household smallness delivered. Door
                  poor on do walk in half. Roof his head the what.
                </p>

                <a
                  href="#"
                  className="inline-block py-2  text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div className=" w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className=""
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">
                  Is at purse tried jokes china ready decay an.{" "}
                </h2>
                <p className="text-gray-700 mt-2">
                  Small its shy way had woody downs power. To denoting admitted
                  speaking learning my exercise so in. Procured shutters mr it
                  feelings. To or three offer house begin taken am at.
                </p>

                <a
                  href="#"
                  className="inline-block py-2  text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div className=" w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                className=""
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">
                  As dissuade cheerful overcame so of friendly he indulged
                  unpacked.
                </h2>
                <p className="text-gray-700 mt-2">
                  Alteration connection to so as collecting me. Difficult in
                  delivered extensive at direction allowance. Alteration put use
                  diminution can considered sentiments interested discretion.
                </p>

                <a
                  href="#"
                  className="inline-block py-2  text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>
          {/* recent with dummy text end */}
        </main>
      </Layout>
    </div>
  )
}
export default IndexPage
