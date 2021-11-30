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

export type ProjectCardProps = {
  title: string;
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