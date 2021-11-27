import React from 'react';
import { Helmet } from 'react-helmet';
import Home from './Home';
import Project from './Project';
import Education from './Education';
import usePageRefs from '../hooks/usePageRefs';
import Contact from './Contact';

export default function App() {
  
  const {
    projectRef,
    educationRef,
    contactRef,
    scrollToProject,
    scrollToEdu,
    scrollToContact
  } = usePageRefs();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zhijie Zhu</title>
        <link
          rel="icon"
          type="image/png"
          href="favicon.ico"
          sizes="16x16"
        />
      </Helmet>
      <div className="bg-background">
        <Home
          scrollToEdu={scrollToEdu}
          scrollToProject={scrollToProject}
          scrollToContact={scrollToContact}
        />
        <Project pageRef={projectRef} />
        <Education pageRef={educationRef} />
        <Contact pageRef={contactRef} />
      </div>
    </>
  );
}
