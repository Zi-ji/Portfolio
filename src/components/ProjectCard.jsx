import React from 'react';
import GithubIcon from '../images/github.inline.svg';
import YtbIcon from '../images/youtube.inline.svg';
import taskhouse from '../images/taskhouse.png';
import GetIcons from './GetIcons';

export default function ProjectCard({
  title,
  notes,
  description,
  technologies,
  source,
  demo,
  link1,
  link2
}) {
  return (
    <div className="project-card">
      <div className='flex-1 flex flex-col sm:flex-row justify-end'>
        <div className='w-128 h-full flex flex-col justify-center'>
          <a
            href={link1}
            className="text-2xl sm:text-4xl text-primary font-bold duration-500 hover:text-linkHover"
          >
            {title}
          </a>
          <p className="text-xl text-textColor font-bold">
            {notes.title}
            {notes.award && (
              <a href={link2} className="text-primary hover:text-linkHover">
                {'  '}
                {notes.award}
              </a>
            )}
          </p>
          <p className="text-textColor font-medium text-xl">{description}</p>

          <div className="h-fullflex flex-col pl-12 pt-4 pb-4">
            <div className="flex flex-row justify-around">
              <p className="text-base text-textColor font-bold sm:text-s">
                Technologies
              </p>
              {technologies &&
                technologies.map((item, idx) => {
                  return (
                    <div key={idx} className="flex flex-row">
                      {GetIcons(item)}
                      {/* <p className="font-semibold text-textColor ml-2">{item}</p> */}
                    </div>
                  );
                })}
            </div>
            {(source || demo) && (
              <div className="flex flex-col justify-around">
                {source && (
                  <div className="flex flex-row items-center">
                    <a
                      href={source}
                      aria-label="Github source page"
                      className="text-base text-textColor font-bold sm:text-s pr-2 text-primary hover:text-linkHover"
                    >
                      Source Code
                    </a>
                    <a aria-label="Github source page" href={source}>
                      <GithubIcon />
                    </a>
                  </div>
                )}
                {demo && (
                  <div className="flex flex-row items-center">
                    <a
                      href={demo}
                      aria-label="Demo video on youtube"
                      className="text-base text-textColor font-bold sm:text-s pr-2 text-primary hover:text-linkHover"
                    >
                      Demo
                    </a>
                    <a aria-label="Demo video on youtube" href={demo}>
                      <YtbIcon />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='flex-1'>
        {/* <img src={taskhouse} alt='taskhouse dashboard screenshot' className='w-144' /> */}
      </div>
    </div>
  );
}
