import React from 'react';

export default function Navbar({
  scrollToSkills,
  scrollToProject,
  scrollToContact
}) {
  return (
    <nav className="w-full h-16 border-t-8 border-secondary flex flex-row justify-center">
      <div className="flex flex-row items-center w-240">
        <a href="#Projects" className="navlink" onClick={scrollToProject}>
          Projects
        </a>
        <a
          href="#Education&Skills"
          className="navlink"
          onClick={scrollToSkills}
        >
          Education
        </a>
        <a
          href="#Education&Skills"
          className="navlink"
          onClick={scrollToSkills}
        >
          Skills
        </a>
        <a href="#Contact" className="navlink" onClick={scrollToContact}>
          About
        </a>
      </div>
    </nav>
  );
}
