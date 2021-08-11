import React from 'react'
import Home from './Home'
import Project from './Project'
import Skills from './Skills'
import Contact from './Contact'

const IndexPage = () => {
  const projectRef = React.useRef(null)
  const skillsRef = React.useRef(null)
  const contactRef = React.useRef(null)

  const scrollToProject = () => projectRef.current.scrollIntoView()
  const scrollToSkills = () => skillsRef.current.scrollIntoView()
  const scrollToContact = () => contactRef.current.scrollIntoView()

  return (
    <>
      <head>
        <title>Portfolio</title>
      </head>
      <body className="bg-background">
        <Home
          scrollToSkills={scrollToSkills}
          scrollToProject={scrollToProject}
          scrollToContact={scrollToContact}
        />
        <Project refProp={projectRef} />
        <Skills refProp={skillsRef} />
        <Contact refProp={contactRef} />
      </body>
    </>
  )
}

export default IndexPage
