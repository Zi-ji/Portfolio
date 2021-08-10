import React from 'react'
import ReactIcon from '../images/react.inline.svg'
import FirebaseIcon from '../images/firebase.inline.svg'
import GithubIcon from '../images/github.inline.svg'
import MaterialIcon from '../images/material.inline.svg'
import RNIcon from '../images/react_native.inline.svg'
import YtbIcon from '../images/youtube.inline.svg'
import TSIcon from '../images/typescript.inline.svg'
import GatsbyIcon from '../images/gatsbyjs.inline.svg'

const ProjectCard = ({ title, notes, description, technologies, source, demo }) => {

  const getIcon = (string) => {
    switch (string) {
      case 'ReactJS':
        return <ReactIcon />
      case 'Firebase':
        return <FirebaseIcon />
      case 'Material-UI':
        return <MaterialIcon />
      case 'React Native':
        return <RNIcon />
      case 'TypeScript':
        return <TSIcon />
      case 'GatsbyJS':
        return <GatsbyIcon />
      default:
        break;
    }
  }

  return (
    <div className="project-card card-style">
      <div className="h-full flex-1 flex flex-col justify-around pt-2 pb-2 sm:pt-3 sm:pr-3">
        <div>
          <p className="text-2xl text-secondary font-bold">{title}</p>
          <p className="text-base text-primary italic font-bold sm:text-sm">
            {notes.title}
            {notes.award && <span className="text-secondary">{'  '}{notes.award}</span>}
          </p>
        </div>
        <p className="text-primary font-medium sm:text-sm">
          {description}
        </p>
      </div>
      <div className="sm:hidden h-32 ml-20 border-r-4 border-primary mt-4 mb-4" />
      <div className="h-full flex-1 flex flex-col md:hidden pl-12 pt-4 pb-4">
        <div className="flex-1 flex flex-col justify-around">
          <p className="text-base text-primary font-bold sm:text-s">
            Technologies
          </p>
          {technologies && 
            technologies.map(item => {
              return (
                <div className="flex flex-row">
                  {getIcon(item)}
                  <p className="font-semibold text-secondary ml-2">{item}</p>
                </div>
              )
            })
          }
        </div>
        {(source || demo) &&
          <div className="flex-1 flex flex-col justify-around">
            {source &&
              <div className="flex flex-row items-center">
                <p className="text-base text-primary font-bold sm:text-s pr-2">
                  Source Code
                </p>
                <a href={source}><GithubIcon /></a>
              </div>
            }
            {demo &&
              <div className="flex flex-row items-center">
                <p className="text-base text-primary font-bold sm:text-s pr-2">
                  Demo
                </p>
                <a href={demo}><YtbIcon /></a>
              </div>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default ProjectCard
