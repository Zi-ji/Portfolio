import React from 'react';
import coursesData from '../data/CoursesData';
import Course from '../components/Course';

export default function Education({
  pageRef
}: {
  pageRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={pageRef} className="page-container">
      <main className="main-container items-center">
        <p className="section-title self-center">MORE ABOUT ME 📒</p>
        <div className="max-w-full mt-4 flex flex-col items-center">
          <p className="text-lg font-medium mb-4 pl-2 text-center">
            Born in Shanghai, China
            <br />
            Based in Sydney, Australia
            <br />
            Former HSC Maths 3U/4U Tutor @{' '}
            <a
              className="link-text"
              href="https://www.uwineducation.com.au/"
              aria-label="link to Uwin Edu"
            >
              Uwin Edu
            </a>{' '}
            (2019-2021)
          </p>
          <p className="section-subtitle">Academic Highlights</p>
          <div className="flex flex-col lg:grid grid-cols-2 gap-6 max-w-full">
            {coursesData.map((courseProps, idx) => (
              <Course key={idx} {...courseProps} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
