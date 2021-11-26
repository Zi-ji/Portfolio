import React from 'react';
import ProjectCard from '../components/ProjectCard';
import taskhouse from '../images/taskhouse.png';
import medican from '../images/medician.png'
import footsteps from '../images/footsteps.png'

const medicianDescription = `
Medician is a health tracking app
that is intuitive and easy to use.
You will be able to record details about your symptoms
and set notifications for your medical + fitness routines.
`

export default function Project({ refProp, scrollToSkills }) {
  return (
    <div ref={refProp} className="page-container bg-background2">
      <main className="py-16 main-container">
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-full flex flex-col items-center">
            <p className="section-title">PROJECTS 💻</p>
            <p className="section-subtitle text-center m-4">
              Check out a few projects I've been involved in.
            </p>
          </div>
          <ProjectCard
            title="Medician"
            notes={{ title: 'Personal Portfolio' }}
            description={medicianDescription}
            technologies={['React Native']}
            source="https://github.com/Zi-ji/Portfolio"
            image={medican}
            imageAlt='medician screenshots'
          />
          <ProjectCard
            title="TaskHouse"
            notes={{ title: 'COMP3900 Capstone project' }}
            description="A collaborative platform for teams to communicate the state of their tasks,
            for users to connect with their collaborators through a user-friendly interface."
            technologies={['ReactJS', 'TypeScript', 'Firebase', 'Material-UI']}
            image={taskhouse}
            imageAlt='taskhouse screenshot'
          />
          <ProjectCard
            title="Footsteps"
            notes={{
              title: 'UNSW CSESoc 24H Flagship Hackathon',
              award: 'Prospa Beginner Prize'
            }}
            description="Aims to link a student’s schooling experience with relevant industry
            mentors who will guide them through their studies and decision on future career choices. (MVP)"
            technologies={['React Native']}
            source="https://github.com/Zi-ji/footsteps"
            demo="https://www.youtube.com/watch?v=cRgM0WEVUEQ&list=PLtdbwEd-4QWHZTWOyB2W73nn9hwAoLj6c"
            awardLink="https://www.youtube.com/watch?v=-Ruo8NlrkCo&list=PLtdbwEd-4QWExTxke9BRnkbHv2zXX-_qT&index=2&ab_channel=CSESoc"
            image={footsteps}
            imageAlt='taskhouse screenshot'
          />
        </div>
      </main>
    </div>
  );
}
