import React from 'react';
import GetIcons from './GetIcons';

export default function Skillboard({ title, items }) {
  return (
    <div className="ml-8 mt-8 flex flex-col">
      <p className="text-lg text-primary font-bold">{title}</p>
      {items.map((item, idx) => {
        return (
          <div key={idx} className="flex flex-row mt-2">
            {GetIcons(item)}
            <p className="font-semibold text-primary ml-2">{item}</p>
          </div>
        );
      })}
    </div>
  );
}
