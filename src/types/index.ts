import TagColors from "../styles/TagColors";

export type TechnologyType =
  | 'ReactJS'
  | 'Firebase'
  | 'Material-UI'
  | 'React Native'
  | 'JavaScript'
  | 'TypeScript'
  | 'MobX-state-tree'
  | 'SQLite'
  | 'Java'
  | 'SQLite'
  | 'PostgreSQL';

type TagColorTypes = keyof typeof TagColors;

export type ProjectCardProps = {
  title: string;
  tags: TagColorTypes[]
  notes: {
    title: string;
    award?: string;
    awardLink?: string;
  };
  description: string;
  technologies: TechnologyType[];
  source?: string;
  demo?: string;
  image: string;
  imageAlt: string;
  storeLink?: string;
};


export type CourseProps = {
  code: string;
  name: string;
  description: string;
  mark: string;
  link: string;
  technologies: TechnologyType[]
}