import { CourseProps } from "../types";

export const coursesData : CourseProps[] = [
  {
    code: "COMP3900",
    name: "Computer Science Project",
    description:  "A capstone software project. Working in teams to define, implement and evaluate a real-world software system.",
    mark: "93 HD",
    link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP3900?year=2021",
    technologies: []
  },
  {
    code: "COMP2511",
    name: "Object-Oriented Design & Programming",
    description:  "Building Java programs with object-oriented design principles and design patterns.",
    mark: "92 HD",
    link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP2511?year=2021",
    technologies: ['Java']
  },
  {
    code: "COMP3311",
    name: "Database Systems",
    description:  "Data models, relational database implementation, design and interaction.",
    mark: "89 HD",
    link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP3311",
    technologies: ['PostgreSQL']
  },
  {
    code: "COMP6080",
    name: "Web Front-End Programming",
    description:  "Fundamentals and advanced techniques of programming for the web front-end in JavaScript and ReactJS.",
    mark: "81 DN",
    link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP6080",
    technologies: ['JavaScript', 'ReactJS']
  }
]

export default coursesData;