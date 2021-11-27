import React from 'react';
import CodeIcon from '../images/code.inline.svg'
import DivideIcon from '../images/divide.inline.svg'
import KiteIcon from '../images/kite.inline.svg'
import PlusIcon from '../images/plus.inline.svg'
import TriangleIcon from '../images/triangle.inline.svg'
import HexagonIcon from '../images/hexagon.inline.svg'
import PlusMinusIcon from '../images/plusMinus.inline.svg'
import MoreEqualIcon from '../images/moreEqual.inline.svg'
import SquareIcon from '../images/square.inline.svg'

export default function HomeBackground() {
  return (
    <div className='hidden xl:block absolute top-0 left-0 w-full h-full'>
      <CodeIcon className="svg-move w-20 h-20 top-1/6 left-1/6 text-textColor" />
      <PlusIcon className="svg-base w-20 h-20 top-1/10 left-1/2 text-svgColor" />
      <PlusMinusIcon className="svg-base w-24 h-24 bottom-1/3 left-1/20 text-svgColor" />
      <DivideIcon className="svg-base w-24 h-24 top-1/10 right-1/10 text-svgColor" />
      <HexagonIcon className="svg-move-wide w-28 h-28 bottom-1/6 right-1/5 text-special" />
      <KiteIcon className="svg-base w-20 h-20 bottom-1/10 left-1/3 text-svgColor" />
      <SquareIcon className="svg-base w-20 h-20 right-1/20 bottom-1/3 text-svgColor" />
      <MoreEqualIcon className="svg-move w-28 h-28 right-1/20 2xl:right-1/10 top-1/3 text-textColor" />
      <TriangleIcon className="svg-move-wide w-28 h-28 left-1/5 bottom-1/2 text-linkHover" />
    </div>
  );
}