import React from 'react';
import ReactIcon from '../images/react.inline.svg';
import FirebaseIcon from '../images/firebase.inline.svg';
import MaterialIcon from '../images/material.inline.svg';
import RNIcon from '../images/react_native.inline.svg';
import TSIcon from '../images/typescript.inline.svg';
import GatsbyIcon from '../images/gatsbyjs.inline.svg';
import TailwindIcon from '../images/tailwindcss.inline.svg';
import JSIcon from '../images/javascript.inline.svg';
import ReduxIcon from '../images/redux.inline.svg';
import PostgresqlIcon from '../images/postgresql.inline.svg'
import JavaIcon from '../images/java.inline.svg'
import { TechnologyType } from '../types';

export default function TechIcon({
  name,
  className
}: {
  name: TechnologyType;
  className?: string;
}) {
  switch (name) {
    case 'ReactJS':
      return <ReactIcon className={className} />;
    case 'Firebase':
      return <FirebaseIcon className={className} />;
    case 'Material-UI':
      return <MaterialIcon className={className} />;
    case 'React Native':
      return <RNIcon className={className} />;
    case 'TypeScript':
      return <TSIcon className={className} />;
    case 'GatsbyJS':
      return <GatsbyIcon className={className} />;
    case 'Tailwind-CSS':
      return <TailwindIcon className={className} />;
    case 'JavaScript':
      return <JSIcon className={className} />;
    case 'Redux':
      return <ReduxIcon className={className} />;
    case 'Java':
      return <JavaIcon className={className} />;
    case 'Postgresql':
      return <PostgresqlIcon className={className} />
    default:
      return <ReactIcon className={className} />;
  }
}
