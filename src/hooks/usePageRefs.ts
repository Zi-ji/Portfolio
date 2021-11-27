import React, { useRef } from 'react';

export default function usePageRefs() {
  const projectRef = useRef<null | HTMLDivElement>(null);
  const educationRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);

  const scrollToProject = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView()
    }
  }
  const scrollToEdu = () => {
    if (educationRef.current) {
      educationRef.current.scrollIntoView()
    }
  }
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView()
    }
  }

  return {
    projectRef,
    educationRef,
    contactRef,
    scrollToProject,
    scrollToEdu,
    scrollToContact
  };
}
