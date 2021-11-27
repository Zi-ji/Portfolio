import React from 'react';
import projectsData from './ProjectsData';
import ProjectCard from '../components/ProjectCard';

export default function Project({
  pageRef
}: {
  pageRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={pageRef} className="page-container bg-background2">
      <main className="py-16 main-container">
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-full flex flex-col items-center">
            <p className="section-title">PROJECTS 💻</p>
            <p className="section-subtitle text-center m-4">
              Check out a few projects I've been involved in.
            </p>
          </div>
          {projectsData.map((projectItem, idx) => (
            <ProjectCard key={idx} {...projectItem} />
          ))}
        </div>
      </main>
    </div>
  );
}
