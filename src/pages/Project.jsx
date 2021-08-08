import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div className="page-container">
      <main className="w-240 pt-16 sm:pt-8 pb-16 sm:pb-0 main-container">
        <div className="w-full flex flex-col sm:items-center">
          <p className="text-3xl font-bold text-primary">PROJECTS{' '}📚</p>
          <p className="text-xl font-semibold text-primary mt-4 sm:text-center">
            Check out a few projects I've been involved in.
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-around">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </main>
    </div>
  )
}

export default Project
