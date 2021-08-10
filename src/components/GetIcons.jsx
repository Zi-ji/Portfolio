import React from 'react'
import ReactIcon from '../images/react.inline.svg'
import FirebaseIcon from '../images/firebase.inline.svg'
import MaterialIcon from '../images/material.inline.svg'
import RNIcon from '../images/react_native.inline.svg'
import TSIcon from '../images/typescript.inline.svg'
import GatsbyIcon from '../images/gatsbyjs.inline.svg'
import TailwindIcon from '../images/tailwindcss.inline.svg'
import JSIcon from '../images/javascript.inline.svg'
import ReduxIcon from '../images/redux.inline.svg'
import JavaIcon from '../images/java.inline.svg'
import PythonIcon from '../images/python.inline.svg'
import ShellIcon from '../images/shell.inline.svg'
import PerlIcon from '../images/perl.inline.svg'
import PostgreIcon from '../images/postgresql.inline.svg'
import CPPIcon from '../images/CPP.inline.svg'


const GetIcons = (string) => {
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
    case 'Tailwind-CSS':
      return <TailwindIcon />
    case 'JavaScript':
      return <JSIcon />
    case 'Redux':
      return <ReduxIcon />
    case 'Java':
      return <JavaIcon />
    case 'Python':
      return <PythonIcon />
    case 'Shell':
      return <ShellIcon />
    case 'Perl':
      return <PerlIcon />
    case 'PostgreSQL':
      return <PostgreIcon />
    case 'C++':
      return <CPPIcon />
    default:
      break;
  }
}

export default GetIcons
