import React from 'react'
import Home from './Home'
import Project from './Project'
import Skills from './Skills'
import Contact from './Contact'

const IndexPage = () => {
  return (
    <>
      <head>
        <title>Portfolio</title>
      </head>
      <body className="bg-background">
        <Home />
        <Project />
        <Skills />
        <Contact />
      </body>
    </>
  )
}

export default IndexPage
