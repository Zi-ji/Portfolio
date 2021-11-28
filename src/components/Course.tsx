import React from 'react';
import { CourseProps } from '../types';

export default function Course({
  code,
  name,
  description,
  mark,
  link
}: CourseProps) {
  return (
    <div className="card w-128 max-w-full flex flex-col bg-background2 p-4">
      <p>
        <a
          href={link}
          className="link-text text-xl font-bold"
        >
          {code}
        </a>
      </p>
      <p className="text-lg font-bold">
        {name}
      </p>
      <p className='text-lg'>{description}</p>
      <p className="font-semibold">{mark}</p>
    </div>
  );
}
