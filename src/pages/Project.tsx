import React from 'react';
import projectsData from '../data/ProjectsData';
import ProjectCard from '../components/ProjectCard';

export default function Project({
  pageRef
}: {
  pageRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={pageRef} className="page-container bg-background2">
      <main className="main-container">
        <div className="w-full flex flex-col items-center">
          <p className="section-title">PROJECTS 💻</p>
          <p className="section-subtitle text-center">
            Check out a few projects I've been involved in.
          </p>
        </div>
        {projectsData.map((projectProps, idx) => (
          <ProjectCard key={idx} {...projectProps} />
        ))}
      </main>
    </div>
  );
}
