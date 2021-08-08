import * as React from "react"
import Navbar from '../components/navbar'
import Home from './Home'

const IndexPage = () => {
  return (
    <>
      <head>
        <title>Portfolio</title>
      </head>
      <body className="bg-background">
        {/* <Navbar /> */}
        <Home />
      </body>
    </>
  )
}

export default IndexPage
