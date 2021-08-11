import React from 'react'

const Navbar = ({ scrollToSkills, scrollToProject, scrollToContact }) => {
  return (
    <nav className="w-full h-16 border-t-8 border-secondary flex flex-row justify-center">
      <div className="flex flex-row items-center w-240">
        <a className="navlink" onClick={scrollToProject}>Projects</a>
        <a className="navlink" onClick={scrollToSkills}>Skills</a>
        <a className="navlink" onClick={scrollToContact}>About</a>
      </div>
    </nav>
  )
}

export default Navbar;