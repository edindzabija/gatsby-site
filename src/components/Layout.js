import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const layout = props => {
  return (
    <>
      <Header />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>{props.children}</div>
        <Footer />
      </div>
    </>
  )
}

export default layout
