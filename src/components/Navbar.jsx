import React from 'react';

export default function Navbar({
  scrollToSkills,
  scrollToProject,
  scrollToContact
}) {
  return (
    <nav className="w-full h-16 border-t-8 border-primary flex flex-row justify-center">
      <div className="flex flex-row items-center w-240">
        <a
          href="#Projects"
          className="navlink"
          onClick={scrollToProject}
        >
          Projects
        </a>
        <a
          href="#Education"
          className="navlink"
          onClick={scrollToSkills}
        >
          About Me
        </a>
        <a href="#Contact" className="navlink" onClick={scrollToContact}>
          Contact
        </a>
      </div>
    </nav>
  );
}
