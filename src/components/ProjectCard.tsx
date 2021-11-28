import React from 'react';
import GithubIcon from '../images/github.inline.svg';
import YtbIcon from '../images/youtube.inline.svg';
import AppStoreIcon from '../images/appStore.inline.svg';
import { ProjectCardProps } from '../types';
import TechIcon from './TechIcon';

export default function ProjectCard({
  title,
  notes,
  description,
  technologies,
  source,
  demo,
  image,
  imageAlt = '',
  storeLink
}: ProjectCardProps) {
  return (
    <div className="project-item">
      <div className="flex justify-center lg:justify-end">
        <img
          src={image}
          alt={imageAlt}
          className="card h-auto w-168 mb-8 lg:mb-0"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:pl-16">
        <div className="w-96 w-full max-w-lg h-full flex flex-col justify-center">
          <p className="text-3xl font-bold mb-4">{title}</p>

          <p className="text-xl text-textColor font-medium">{notes.title}</p>

          {notes.award && (
            <p>
              <a href={notes.awardLink} className="link-text text-xl">
                {'  '}
                {notes.award}
              </a>
            </p>
          )}

          <p className="text-textColor text-xl my-4">{description}</p>

          <div className="flex flex-row my-2">
            <p className="text-xl text-textColor font-bold mr-4">
              Technologies
            </p>
            {technologies &&
              technologies.map((item, idx) => {
                return (
                  <div key={idx}>
                    <TechIcon name={item} />
                  </div>
                );
              })}
          </div>

          {source && (
            <div className="flex flex-row items-center my-2">
              <p className="text-xl font-bold mr-4">Source Code</p>
              <a aria-label="Github source page" href={source}>
                <GithubIcon />
              </a>
            </div>
          )}

          {demo && (
            <div className="flex flex-row items-center my-2">
              <p className="text-xl font-bold mr-4">Demo</p>
              <a aria-label="Demo video on youtube" href={demo}>
                <YtbIcon />
              </a>
            </div>
          )}

          {storeLink && (
            <div className="flex">
              <a
                aria-label="Download on AppStore"
                className="my-2 inline"
                href={storeLink}
              >
                <AppStoreIcon />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
