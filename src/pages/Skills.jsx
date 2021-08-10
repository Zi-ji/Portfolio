import React from 'react'
import Course from '../components/Course'
import Skillboard from '../components/Skillboard'

const Skills = () => {
  return (
    <div className="page-container">
      <main className="w-240 min-h-full max-w-full flex-1 flex flex-row items-stretch sm:flex-col">
        <div className="flex-1 flex flex-col pl-8 pr-8 justify-center">
          <div className="sm:flex sm:flex-col sm:items-center">
            <p className="text-3xl text-primary font-bold">Education 📒</p>
            <p className="text-lg text-primary font-medium">Relavant courses I've completed</p>
          </div>
          <Course
            code="COMP2511"
            name="Object-Oriented Design & Programming"
            description="Build Java programs with object-oriented design principles and design patterns."
            mark="92 HD"
          />
          <Course
            code="COMP3311"
            name="Database Systems"
            description="Data models, relational database implementation, design and interaction."
            mark="89 HD"
          />
          <Course
            code="COMP6080"
            name="Web Front-End Programming"
            description="Fundamentals and advanced techniques of programming for the web front-end in JavaScript and ReactJS."
            mark="81 DN"
          />
        </div>
        <div className="sm:hidden h-96 border-r-4 self-center border-primary" /> 
        <div className="flex-1 flex flex-col justify-center pl-12 pt-32">
          <div>
            <p className="text-3xl text-primary font-bold">Skills ⛏</p>
            <p className="text-lg text-primary font-medium">Tools and Technologies I've used</p>
          </div>
          <div>
            <Skillboard
              title="WEB FRONTEND"
              items={['JavaScript', 'TypeScript', 'ReactJS', 'Redux', 'Material-UI', 'Tailwind-CSS']}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Skills
