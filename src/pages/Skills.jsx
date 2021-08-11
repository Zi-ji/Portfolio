import React from 'react'
import Course from '../components/Course'
import Skillboard from '../components/Skillboard'
import Arrow from '../images/arrow.inline.svg'

const Skills = () => {
  return (
    <div className="page-container">
      <main className="w-240 min-h-full max-w-full flex-1 flex flex-row items-stretch sm:flex-col">
        <div className="flex-1 flex flex-col pl-8 pr-8 pt-28">
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
        <div className="flex-1 flex flex-col pl-12 pr-8 pt-28">
          <div>
            <p className="text-3xl text-primary font-bold">Skills ⛏</p>
            <p className="text-lg text-primary font-medium">Tools and Technologies I've used</p>
          </div>
          <div>
            <Skillboard
              title="WEB FRONTEND"
              items={['JavaScript', 'TypeScript', 'ReactJS', 'Redux', 'Material-UI', 'Tailwind-CSS']}
            />
            <Skillboard
              title="BACKEND"
              items={['Firebase', 'Python', 'Java', 'PostgreSQL']}
            />
            <Skillboard
              title="Also had experiences with..."
              items={['C++', 'Shell', 'Perl']}
            />
          </div>
        </div>
      </main>
      <div className="sm:hidden flex flex-col justify-center items-center mb-12">
        <div className="animate-bounce mt-4"><Arrow /></div>
      </div>
    </div>
  )
}

export default Skills
