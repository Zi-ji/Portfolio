import { ProjectCardProps } from "../types";
import taskhouse from '../images/taskhouse.png';
import medican from '../images/medician.png'
import footsteps from '../images/footsteps.png'

export const projectsData: ProjectCardProps[] =
[
  {
    title: 'Medician',
    notes: {
      title: 'UNSW CSESoc Project Competition 2021',
      award: 'Third Prize',
      awardLink: 'https://www.facebook.com/events/184882760245206/?active_tab:discussion',
    },
    description: `
      Medician is a health tracking app
      that is intuitive and easy to use.
      You will be able to record details about your symptoms
      and set notifications for your medical + fitness routines.
    `,
    technologies: ['React Native'],
    source: "https://github.com/Zi-ji/Portfolio",
    image: medican,
    imageAlt: 'medician screenshots',
    storeLink: 'https://apps.apple.com/au/app/medician/id1584595040',
  },
  {
    title: "TaskHouse",
    notes: { title: 'UNSW COMP3900 Capstone project' },
    description: `
      A collaborative platform for teams to
      communicate the state of their tasks,
      for users to connect with their collaborators
      through a user-friendly interface.
    `,
    technologies: ['ReactJS', 'TypeScript', 'Firebase', 'Material-UI'],
    image: taskhouse,
    imageAlt:'taskhouse screenshot'
  },
  {
    title:"Footsteps",
    notes: {
      title: 'UNSW CSESoc 24H Flagship Hackathon 2021',
      award: 'Prospa Beginner Prize',
      awardLink: "https://www.youtube.com/watch?v:-Ruo8NlrkCo&list:PLtdbwEd-4QWExTxke9BRnkbHv2zXX-_qT&index:2&ab_channel:CSESoc",
    },
    description: `
      Aims to link a student’s schooling experience with relevant
      industry mentors who will guide them through their studies
      and decision on future career choices. (MVP)
    `,
    technologies: ['React Native'],
    source: "https://github.com/Zi-ji/footsteps",
    demo: "https://www.youtube.com/watch?v:cRgM0WEVUEQ&list:PLtdbwEd-4QWHZTWOyB2W73nn9hwAoLj6c",
    image: footsteps,
    imageAlt:'taskhouse screenshot'
  }
];

export default projectsData;