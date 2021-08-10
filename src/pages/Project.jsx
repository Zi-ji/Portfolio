import React from 'react'
import ProjectCard from '../components/ProjectCard'
import Arrow from '../images/arrow.inline.svg'

const Project = () => {
  return (
    <div className="page-container">
      <main className="w-240 lg:w-196 md:w-144 pt-12 sm:pt-8 sm:pb-0 main-container">
        <div className="w-full flex flex-col sm:items-center">
          <p className="text-3xl font-bold text-primary">PROJECTS{' '}💻</p>
          <p className="text-xl font-semibold text-primary mt-4 sm:text-center sm:pl-4 sm:pr-4">
            Check out a few projects I've been involved in.
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-around">
          <ProjectCard
            title="TaskHouse"
            notes={{ title: 'COMP3900 Capstone project' }}
            description="A collaborative platform for teams to communicate the state of their tasks,
            for users to connect with their collaborators through a user-friendly interface."
            technologies={['ReactJS', 'TypeScript', 'Firebase', 'Material-UI']}
          />
          <ProjectCard
            title="Footsteps"
            notes={{ title: 'UNSW CSESoc Flagship Hackathon', award: 'Prospa Beginner Prize' }}
            description="Aims to link a student’s schooling experience with relevant industry
            mentors who will guide them through their studies and decision on future career choices. (MVP)"
            technologies={['React Native']}
            source="https://github.com/Zi-ji/footsteps"
            demo="https://www.youtube.com/watch?v=cRgM0WEVUEQ&list=PLtdbwEd-4QWHZTWOyB2W73nn9hwAoLj6c"
          />
          <ProjectCard
            title="*this"
            notes={{ title: 'Personal Portfolio' }}
            description="The current website. Built with GatsbyJS and Tailwind CSS. Hope you like it. :)"
            technologies={['ReactJS', 'GatsbyJS']}
            source="https://github.com/Zi-ji/Portfolio"
          />
        </div>
        <div className="sm:hidden flex flex-col justify-center items-center mb-4">
          <div className="animate-bounce mt-4"><Arrow /></div>
        </div>
      </main>
    </div>
  )
}

export default Project
