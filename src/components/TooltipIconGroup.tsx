import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import { useTransition, animated } from 'react-spring';

import TechIcon from './TechIcon';
import { TechnologyType } from '../types';
import useWindowWidth from '../hooks/useWindowWidth';

export default function TooltipIconGroup({
  techs = [],
  placement = 'right'
}: {
  techs?: TechnologyType[];
  placement?: 'left' | 'right';
}) {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [showPopper, setShowPopper] = useState<boolean>(false);
  const [currentText, setCurrentText] = useState<string>('');
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: `${placement}-start`
  });

  const { windowWidth } = useWindowWidth();

  const transitions = useTransition(showPopper, {
    from: { scale: 0 },
    enter: { scale: 1 },
    leave: { scale: 0 },
    config: { duration: 150 }
  });

  if (windowWidth && windowWidth < 1100) {
    return (
      <div className="max-w-full flex flex-row">
        {techs.map((item, idx) => (
          <TechIcon key={idx} className="mx-2" name={item} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div
        ref={setReferenceElement}
        onMouseEnter={() => setShowPopper(true)}
        onMouseLeave={() => setShowPopper(false)}
        className="max-w-full flex flex-row"
      >
        {techs.map((item, idx) => {
          return (
            <div
              key={idx}
              onMouseEnter={() => setCurrentText(item)}
              className="mx-2"
            >
              <TechIcon name={item} />
            </div>
          );
        })}
      </div>
      <div
        ref={setPopperElement}
        style={{ ...styles.popper }}
        {...attributes.popper}
      >
        {transitions(
          (transitionStyles, item) =>
            item && (
              <animated.div
                style={{
                  ...transitionStyles,
                  transformOrigin:
                    placement === 'right' ? 'left center' : 'right center'
                }}
                className="bg-special rounded-lg px-2 py-1 shadow-lg text-background2 font-medium select-none"
              >
                {currentText}
              </animated.div>
            )
        )}
      </div>
    </>
  );
}
