import React from 'react';
import Course from '../components/Course';

export default function Skills({ refProp }) {
  return (
    <div ref={refProp} className="page-container">
      <main className="w-240 min-h-full max-w-full flex-1 flex flex-col justify-center items-stretch sm:flex-col">
        <div className="flex flex-row">
          <div className="flex-1 flex flex-col pl-8 pr-8 pt-28 3xl:pt-16 2xl:pt-8 xl:pt-4 sm:mb-20 sm:mt-12 justify-center">
            <div className="h-196">
              <div className="sm:flex sm:flex-col sm:items-center">
                <p className="section-title">Education 📒</p>
                <p className="section-subtitle">
                  Relavant courses I've completed
                </p>
              </div>
              <Course
                code="COMP2511"
                name="Object-Oriented Design & Programming"
                description="Build Java programs with object-oriented design principles and design patterns."
                mark="92 HD"
                link="https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP2511?year=2021"
              />
              <Course
                code="COMP3311"
                name="Database Systems"
                description="Data models, relational database implementation, design and interaction."
                mark="89 HD"
                link="https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP3311"
              />
              <Course
                code="COMP6080"
                name="Web Front-End Programming"
                description="Fundamentals and advanced techniques of programming for the web front-end in JavaScript and ReactJS."
                mark="81 DN"
                link="https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP6080"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
