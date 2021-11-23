import React from 'react';
import TextLoop from 'react-text-loop';
import Navbar from '../components/Navbar';
import Avatar from '../images/Avatar.png';
import GithubIcon from '../images/github.inline.svg';
import Arrow from '../images/arrow.inline.svg';

export default function Home({
  scrollToSkills,
  scrollToProject,
  scrollToContact
}) {
  return (
    <div className="page-container min-h-screen justify-between">
      <Navbar
        scrollToSkills={scrollToSkills}
        scrollToProject={scrollToProject}
        scrollToContact={scrollToContact}
      />
      <main className="w-full flex flex-row">
        <div className='flex-1 flex flex-col items-end pr-12'>
          <div className="flex sm:items-center flex-col justify-end text-right">
            {/* <img className="w-36 h-44" src={Avatar} alt="Avatar" /> */}
            <p className="title">
              ZHIJIE
            </p>
            <p className="title">
              ZHU
            </p>
            <div className='flex flex-row justify-end'>
              <a aria-label="Github source page" href="https://github.com/zijizhu">
                <GithubIcon className="fill-blue hover:fill-red" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 border-l-4 border-primary pl-12">
          <div className='w-96'>
            <p className="text-2xl sm:text-center font-bold leading-normal">
              ABOUT ME 🙋‍♂️
            </p>
            <p className="sm:text-base mt-4 text-xl text-textColor font-medium leading-normal sm:ml-8 sm:mr-8">
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
