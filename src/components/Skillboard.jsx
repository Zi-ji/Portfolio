import React from 'react'
import GetIcons from './GetIcons'

const Skillboard = ({ title, items }) => {
  return (
    <div className="h-60 ml-8 mt-8 flex flex-col">
      <p className="text-xl text-secondary font-bold">{title}</p>
      {items.map(item => {
        return (
          <div className="flex flex-row mt-2">
            {GetIcons(item)}
            <p className="font-semibold text-secondary ml-2">{item}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Skillboard
