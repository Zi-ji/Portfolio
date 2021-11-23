import React from 'react';
import GithubIcon from '../images/github.inline.svg';
import YtbIcon from '../images/youtube.inline.svg';

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
    <div className="project-card card-style">
      <div className="h-full flex-1 flex flex-col justify-around pt-2 pb-2 sm:pt-3 sm:pr-3">
        <div>
          <a
            href={link1}
            className="text-2xl text-primary font-bold duration-500 hover:text-linkHover"
          >
            {title}
          </a>
          <p className="text-base text-textColor italic font-bold sm:text-sm">
            {notes.title}
            {notes.award && (
              <a href={link2} className="text-primary hover:text-linkHover">
                {'  '}
                {notes.award}
              </a>
            )}
          </p>
        </div>
        <p className="text-textColor font-medium sm:text-sm">{description}</p>
      </div>
      <div className="md:hidden h-32 ml-20 border-r-4 border-textColor mt-4 mb-4" />
      <div className="h-full flex-1 flex flex-col md:hidden pl-12 pt-4 pb-4">
        <div className="flex-1 flex flex-col justify-around">
          <p className="text-base text-textColor font-bold sm:text-s">
            Technologies
          </p>
          {technologies &&
            technologies.map((item, idx) => {
              return (
                <div key={idx} className="flex flex-row">
                  {GetIcons(item)}
                  <p className="font-semibold text-textColor ml-2">{item}</p>
                </div>
              );
            })}
        </div>
        {(source || demo) && (
          <div className="flex-1 flex flex-col justify-around">
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
  );
}
