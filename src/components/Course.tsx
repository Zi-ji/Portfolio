import React from 'react';

export default function Course({
  code,
  name,
  description,
  mark,
  link
} : {
  code: string;
  name: string;
  description: string;
  mark: string;
  link: string;
}) {
  return (
    <div className="h-44 max-w-full mt-8 pl-8 flex flex-col justify-around card-style">
      <div>
        <a
          href={link}
          className="text-xl text-primary font-bold duration-500 hover:text-linkHover"
        >
          {code}
        </a>
        <p className="text-base text-textColor italic font-bold sm:text-sm">
          {name}
        </p>
      </div>
      <p className="text-textColor font-medium sm:text-sm">{description}</p>
      <p className="text-textColor font-bold sm:text-sm">{mark}</p>
    </div>
  );
}
