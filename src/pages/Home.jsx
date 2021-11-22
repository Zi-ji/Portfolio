import React from 'react';
import TextLoop from 'react-text-loop';
import Navbar from '../components/Navbar';
import Avatar from '../images/Avatar.png';
import Arrow from '../images/arrow.inline.svg';

export default function Home({
  scrollToSkills,
  scrollToProject,
  scrollToContact
}) {
  return (
    <div className="page-container justify-between">
      <Navbar
        scrollToSkills={scrollToSkills}
        scrollToProject={scrollToProject}
        scrollToContact={scrollToContact}
      />
      <main className="w-full flex flex-row">
        <div className='flex-1 flex flex-col items-end pr-12'>
          <div className="flex sm:items-center flex-col text-right">
            {/* <img className="w-36 h-44" src={Avatar} alt="Avatar" /> */}
            <p className="sm:text-6xl text-7xl text-primary font-bold leading-normal title">
              ZHIJIE
            </p>
            <p className="sm:text-5xl text-7xl text-primary font-bold leading-normal title">
              ZHU
            </p>
          </div>
          <div className="sm:text-2xl text-4xl sm:text-center text-primary font-bold leading-normal sm:mt-2 mt-12 xl:mt-8">
            {/* <TextLoop interval={2000}>
              <span>I learn how to code. 💻</span>
              <span>I love discovering. 🧑</span>
              <span>I'm ready for the future. 🔜</span>
            </TextLoop> */}
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-evenly sm:justify-center border-l-4 border-secondary pl-12">
          <div className='w-96'>
            <p className="text-2xl sm:text-center font-bold leading-normal">
              ABOUT ME 🙋‍♂️
            </p>
            <p className="sm:text-base mt-4 text-lg text-primary font-medium leading-normal sm:ml-8 sm:mr-8">
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
              projects, education and skills here. Feel free to{' '}
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
