import React, { useState } from "react"
import { Link } from "gatsby"

// import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  const [isOpen, setIsOpen] = useState(false)

  const mobileMenuHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-gray-900">
      <nav className="flex items-center justify-between flex-wrap lg:px-0 p-6 max-w-screen-lg mx-auto">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/">
            <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
          </Link>
          <span className="font-semibold text-xl tracking-tight"></span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={mobileMenuHandler}
            className="flex items-center px-3 py-2 border rounded text-gray-100 border-white-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={
            isOpen
              ? "transition duration-500 ease-in-out w-full block lg:flex lg:items-center lg:w-auto"
              : "lg:flex hidden"
          }
        >
          <div className="text-sm lg:flex-grow">
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4"
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4"
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4"
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4"
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
