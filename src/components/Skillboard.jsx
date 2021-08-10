import React from 'react'
import GetIcons from './GetIcons'

const Skillboard = ({ title, items }) => {
  return (
    <div className="h-60 flex flex-col">
      <p className="text-xl text-secondary font-bold">{title}</p>
      {items.map(item => {
        return (
          <p className="text-base text-primary font-medium">{item}</p>
        )
      })}
    </div>
  )
}

export default Skillboard
