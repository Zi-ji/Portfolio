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
  image,
  imageAlt = '',
  link1,
  link2
}) {
  return (
    <div className="project-card">
      
      <div className='flex-1 flex flex-col sm:flex-row justify-end sm:pr-8'>
        
        <div className='w-128 max-w-full h-full flex flex-col justify-center'>
          <p className="text-3xl font-bold mb-4">
            {title}
          </p>
          <p className="text-xl text-textColor font-medium">
            {notes.title}
          </p>
          {notes.award && (
            <a href={link2} className="text-primary text-xl font-medium hover:text-linkHover">
              {'  '}
              {notes.award}
            </a>
          )}
          <p className="text-textColor text-xl my-4">{description}</p>

          <div className="flex flex-col">
            <div className="flex flex-row my-2">
              <p className="text-xl text-textColor font-bold mr-2">
                Technologies
              </p>
              {technologies &&
                technologies.map((item, idx) => {
                  return (
                    <div key={idx}>
                      {GetIcons(item)}
                    </div>
                  );
                })}
            </div>
            {(source || demo) && (
              <div className="flex flex-col justify-around my-2">
                {source && (
                  <div className="flex flex-row items-center my-2">
                    <p className="text-xl font-bold mr-2">
                      Source Code
                    </p>
                    <a aria-label="Github source page" href={source}>
                      <GithubIcon />
                    </a>
                  </div>
                )}
                {demo && (
                  <div className="flex flex-row items-center my-2">
                    <p className="text-xl font-bold mr-2">
                      Demo
                    </p>
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
        <img src={image} alt={imageAlt} className='w-168 max-w-full mb-8 sm:mb-0 rounded-xl shadow-xl' />
      </div>

    </div>
  );
}
