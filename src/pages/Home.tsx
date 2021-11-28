import React from 'react';
import Navbar from '../components/Navbar';
import HomeBackground from '../components/HomeBackground';
import GithubIcon from '../images/github.inline.svg';
import ResumeIcon from '../images/resume.inline.svg';
import ProjectIcon from '../images/project.inline.svg';

export default function Home({
  scrollToProject,
  scrollToEdu,
  scrollToContact
}: {
  scrollToProject: () => void;
  scrollToEdu: () => void;
  scrollToContact: () => void;
}) {
  return (
    <div className="page-container min-h-screen justify-between">
      <Navbar
        scrollToEdu={scrollToEdu}
        scrollToProject={scrollToProject}
        scrollToContact={scrollToContact}
      />

      <HomeBackground />

      <main className="relative w-full flex flex-col md:flex-row md:justify-center z-10">
        <div className="flex-1 flex items-center flex-col justify-around text-right md:items-end md:pr-8">
          <p className="title">
            Zh<span className="special">iji</span>e
          </p>
          <p className="title">Zhu</p>
          <div className="flex flex-row justify-end mb-4 md:mb-0">
            <a
              aria-label="Github source page"
              href="https://github.com/zijizhu"
            >
              <GithubIcon className="w-12 h-12 fill-current link-text" />
            </a>
          </div>
          <div className="flex flex-row justify-center md:justify-end">
            <button className="home-button" onClick={scrollToProject}>
              <ProjectIcon className="w-12 h-12 pr-2" />
              Projects
            </button>
            <a className="home-button" download href={'Zhijie_Zhu_Resume.pdf'}>
              <ResumeIcon className="w-12 h-12 pr-2" />
              Resume
            </a>
          </div>
        </div>

        <div className="flex-1 flex md:border-l-4 md:border-textColor justify-center md:justify-start">
          <div className="w-96 md:w-128 p-6 md:p-10">
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
              <a href="https://www.unsw.edu.au/" className="link-text">
                UNSW
              </a>
              . You can also call him Richard. He enjoys thinking, learning new
              things and making cool stuffs. He is recently learning{' '}
              <a href="https://www.javascript.com/" className="link-text">
                React
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
