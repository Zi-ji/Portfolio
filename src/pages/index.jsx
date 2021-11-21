import React from 'react';
import { Helmet } from 'react-helmet';
import Home from './Home';
import Project from './Project';
import Skills from './Skills';
import Contact from './Contact';

const IndexPage = () => {
  const projectRef = React.useRef(null);
  const skillsRef = React.useRef(null);
  const contactRef = React.useRef(null);

  const scrollToProject = () => projectRef.current.scrollIntoView();
  const scrollToSkills = () => skillsRef.current.scrollIntoView();
  const scrollToContact = () => contactRef.current.scrollIntoView();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zhijie Zhu</title>
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>
      <div className="bg-background">
        <Home
          scrollToSkills={scrollToSkills}
          scrollToProject={scrollToProject}
          scrollToContact={scrollToContact}
        />
        <Project refProp={projectRef} scrollToSkills={scrollToSkills} />
        <Skills refProp={skillsRef} scrollToContact={scrollToContact} />
        <Contact refProp={contactRef} />
      </div>
    </>
  );
};

export default IndexPage;
