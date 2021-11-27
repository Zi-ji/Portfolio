import React from 'react';
import Navbar from '../components/Navbar';
import GithubIcon from '../images/github.inline.svg';
import CodeIcon from '../images/code.inline.svg'
import DivideIcon from '../images/divide.inline.svg'
import KiteIcon from '../images/kite.inline.svg'
import PlusIcon from '../images/plus.inline.svg'
import TriangleIcon from '../images/triangle.inline.svg'
import HexagonIcon from '../images/hexagon.inline.svg'
import PlusMinusIcon from '../images/plusMinus.inline.svg'
import MoreEqualIcon from '../images/moreEqual.inline.svg'
import SquareIcon from '../images/square.inline.svg'
import ResumeIcon from '../images/resume.inline.svg'
import ProjectIcon from '../images/project.inline.svg'

export default function Home({
  scrollToProject,
  scrollToEdu,
  scrollToContact
} : {
  scrollToProject: () => void;
  scrollToEdu: () => void;
  scrollToContact: () => void;
}) {
  return (
    <div className="page-container relative min-h-screen justify-between">
      
      <Navbar
        scrollToEdu={scrollToEdu}
        scrollToProject={scrollToProject}
        scrollToContact={scrollToContact}
      />
      
      <CodeIcon className="svg-move w-20 h-20 top-1/6 left-1/6 text-textColor" />
      <PlusIcon className="svg-still w-20 h-20 top-1/10 left-1/2 text-svgColor" />
      <PlusMinusIcon className="svg-still absolute w-24 h-24 bottom-1/3 left-1/20 text-svgColor" />
      <DivideIcon className="svg-still w-24 h-24 top-1/10 right-1/10 text-svgColor" />
      <HexagonIcon className="svg-move-wide w-28 h-28 bottom-1/6 right-1/5 text-special" />
      <KiteIcon className="svg-still w-20 h-20 bottom-1/10 left-1/3 text-svgColor" />
      <SquareIcon className="svg-still w-20 h-20 right-1/20 bottom-1/3 text-svgColor" />
      <MoreEqualIcon className="svg-move w-28 h-28 right-1/20 2xl:right-1/10 top-1/3 text-textColor" />
      <TriangleIcon className="svg-move-wide w-28 h-28 left-1/5 bottom-1/2 text-linkHover" />
      
      <main className="w-full flex flex-col md:flex-row md:justify-center">
        
        <div className="flex-1 flex items-center flex-col justify-around text-right md:items-end md:pr-8">
          <p className="title">
            Zh<span className='special'>iji</span>e
          </p>
          <p className="title">
            Zhu
          </p>
          <div className='flex flex-row justify-end mb-4 md:mb-0'>
            <a aria-label="Github source page" href="https://github.com/zijizhu">
              <GithubIcon className="w-12 h-12 fill-current link-text" />
            </a>
          </div>
          <div className='flex flex-row justify-center md:justify-end'>
            <button className='home-button' onClick={scrollToProject}>
              <ProjectIcon className="w-12 h-12 pr-2" />
              Projects
            </button>
            <a className='home-button' download href={'Zhijie_Zhu_Resume.pdf'}>
              <ResumeIcon className="w-12 h-12 pr-2" />
              Resume
            </a>
          </div>
        </div>
        
        <div className="flex-1 flex md:border-l-4 md:border-textColor justify-center md:justify-start">
          <div className='w-96 md:w-128 p-6 md:p-10'>
            <p className="text-2xl text-center md:text-left font-bold">
              ABOUT ME 🙋‍♂️
            </p>
            <p className="text-lg text-center md:text-left mt-4 font-normal">
              Zhijie Zhu is currently a 3rd year student studying{' '}
              <a
                href="https://www.handbook.unsw.edu.au/undergraduate/programs/2019/3784?year=2019"
                className="link-text"
              >
                Bachelor of Computer Science and Commerce
              </a>{' '}
              at{' '}
              <a
                href="https://www.unsw.edu.au/"
                className="link-text"
              >
                UNSW
              </a>
              . You can also call him Richard. He enjoys thinking, learning new
              things and making cool stuffs. He is recently learning{' '}
              <a
                href="https://www.javascript.com/"
                className="link-text"
              >
                JavaScript
              </a>
              .<br />
              <br />
              He is currently based in Sydney. You can learn more about his
              projects and education here. Feel free to{' '}
              <a
                href="#Contact"
                onClick={scrollToContact}
                className="link-text"
              >
                contact
              </a>{' '}
              him as well at any time.
            </p>
          </div>
        </div>

      </main>
      <div />
    </div>
  );
}
