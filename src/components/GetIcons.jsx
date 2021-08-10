import React from 'react'
import ReactIcon from '../images/react.inline.svg'
import FirebaseIcon from '../images/firebase.inline.svg'
import MaterialIcon from '../images/material.inline.svg'
import RNIcon from '../images/react_native.inline.svg'
import TSIcon from '../images/typescript.inline.svg'
import GatsbyIcon from '../images/gatsbyjs.inline.svg'

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
    default:
      break;
  }
}

export default GetIcons
