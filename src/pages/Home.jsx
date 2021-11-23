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
      <main className="w-full flex flex-col sm:flex-row sm:justify-end">
        <div className="flex-1 flex items-center flex-col text-right sm:items-end sm: justify-center mb-6 sm:pr-12">
          <p className="title">
            ZHIJIE
          </p>
          <p className="title">
            ZHU
          </p>
          <div className='flex flex-row justify-end mt-8'>
            <a aria-label="Github source page" href="https://github.com/zijizhu">
              <GithubIcon className="w-12 h-12 fill-current link-text" />
            </a>
          </div>
        </div>
        <div className="flex-1 flex sm:border-l-4 sm:border-textColor justify-center sm:justify-start">
          <div className='w-96 sm:w-128 sm:bg-background2 p-6 sm:p-10 sm:rounded-2xl sm:rounded-l-none sm:shadow-lg'>
            <p className="text-2xl text-center sm:text-left font-bold">
              ABOUT ME 🙋‍♂️
            </p>
            <p className="text-base text-center sm:text-left sm:text-lg mt-4 font-medium">
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
