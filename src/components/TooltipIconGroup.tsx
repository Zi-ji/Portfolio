import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import { TechnologyType } from '../types';
import TechIcon from './TechIcon';

export default function TooltipIconGroup({
  techs = [],
  placement
}: {
  techs?: TechnologyType[],
  placement?: 'left' | 'right' | 'bottom'
}) {
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const [showPopper, setShowPopper] = useState<boolean>(false)
  const [currentText, setCurrentText] = useState<string>('');
  const { styles, attributes } = usePopper(
    referenceElement,
    popperElement,
    { placement }
  );

  return (
    <>
      <div
        ref={setReferenceElement}
        onMouseEnter={() => setShowPopper(true)}
        onMouseLeave={() => setShowPopper(false)}
        className='max-w-full flex flex-row'
      >
        {techs &&
          techs.map((item, idx) => {
            return (
              <div
                key={idx}
                onMouseEnter={() => setCurrentText(item)}
                className='mr-4'
              >
                <TechIcon name={item} />
              </div>
            );
          })}
      </div>
      {showPopper && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {currentText}
        </div>
      )}
    </>
  );
}