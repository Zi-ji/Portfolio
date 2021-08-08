import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full h-16 border-t-4 border-secondary flex flex-row justify-center">
      <div className="flex flex-row items-center w-240">
        <a className="navlink">Projects</a>
        <a className="navlink">Skills</a>
        <a className="navlink">About</a>
      </div>
    </nav>
  )
}

export default Navbar;