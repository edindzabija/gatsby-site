import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

import "../styles/index.scss"

const layout = props => {
  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto flex flex-col min-h-screen">
        <div className="flex-grow">{props.children}</div>
        <Footer />
      </div>
    </>
  )
}

export default layout
