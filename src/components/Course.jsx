import React from 'react'

const Course = ({ code, name, description, mark }) => {
  return (
    <div className="h-44 max-w-full mt-8 pl-8 flex flex-col justify-around card-style">
      <div>
        <p className="text-xl text-secondary font-bold">{code}</p>
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
