import React from 'react'
import Home from './Home'
import Project from './Project'

const IndexPage = () => {
  return (
    <>
      <head>
        <title>Portfolio</title>
      </head>
      <body className="bg-background">
        <Home />
        <Project />
      </body>
    </>
  )
}

export default IndexPage
