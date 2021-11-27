import React from 'react';

export default function Navbar({
  scrollToEdu,
  scrollToProject,
  scrollToContact
}: {
  scrollToEdu: () => void;
  scrollToProject: () => void;
  scrollToContact: () => void;
}) {
  return (
    <nav className="relative w-full h-16 border-t-8 border-primary flex flex-row justify-center z-10">
      <div className="flex flex-row items-center w-240">
        <a href="#Projects" className="navlink" onClick={scrollToProject}>
          Projects
        </a>
        <a href="#Education" className="navlink" onClick={scrollToEdu}>
          About Me
        </a>
        <a href="#Contact" className="navlink" onClick={scrollToContact}>
          Contact
        </a>
      </div>
    </nav>
  );
}
