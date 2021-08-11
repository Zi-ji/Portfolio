import React from 'react'

const Course = ({ code, name, description, mark, link }) => {
  return (
    <div className="h-44 max-w-full mt-8 pl-8 flex flex-col justify-around card-style">
      <div>
        <a href={link} className="text-xl text-secondary font-bold duration-500 hover:text-light">{code}</a>
        <p className="text-base text-primary italic font-bold sm:text-sm">
          {name}
        </p>
      </div>
      <p className="text-primary font-medium sm:text-sm">
        {description}
      </p>
      <p className="text-primary font-bold sm:text-sm">
        {mark}
      </p>
    </div>
  )
}

export default Course
