import React from 'react';
import coursesData from './CoursesData';
import Course from '../components/Course';

export default function Education({
  pageRef
}: {
  pageRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={pageRef} className="page-container">
      <main className="main-container">
        <div className="flex flex-col items-center">
          <p className="section-title">Education 📒</p>
          <p className="section-subtitle">
            Relavant courses I've completed
          </p>
        </div>
        <div className='self-center flex flex-col lg:grid grid-cols-2 gap-6 max-w-full'>
          {coursesData.map((courseProps, idx) => (
            <Course key={idx} {...courseProps} />
          ))}
        </div>
      </main>
    </div>
  );
}
