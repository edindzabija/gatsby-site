import React, { useState } from "react"
import { navigate } from "gatsby-link"

import Layout from "../components/Layout"
import Head from "../components/Head"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  return (
    <Layout>
      <Head title="Contact" />
      <main className="mt-12">
        <h1 className="mt-2 mb-6 text-1xl text-center">Send us a message!</h1>
        <div className="flex flex-wrap mx-3 mb-6 justify-center">
          <form
            className="w-full max-w-lg"
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <div className="w-full mb-6 md:mb-0">
              <p>
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="first-name"
                >
                  Your name:
                  <br />
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="first-name"
                    placeholder="Your Name"
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                  />
                </label>
              </p>
            </div>
            <p>
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Your email:
                <br />
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Your Email"
                  onChange={handleChange}
                />
              </label>
            </p>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  name="message"
                  id="message"
                  required
                  onChange={handleChange}
                />
                <p className="text-gray-600 text-xs italic">
                  Send us a message and we'll get back to you as soon as
                  possible.
                </p>
              </div>
            </div>

            <p className="flex justify-center">
              <button
                className="w-screen shadow bg-teal-900 hover:bg-teal-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </p>
          </form>
        </div>
      </main>
    </Layout>
  )
}

export default Contact
