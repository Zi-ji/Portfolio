import React from 'react'
import Navbar from '../components/navbar'
import Avatar from '../images/Avatar.png'
import Arrow from '../images/arrow.inline.svg'
const Home = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="w-196 md:w-168 main-container">
        <div className="flex sm:flex-col-reverse sm:items-center flex-row justify-between mt-24 sm:mt-6">
          <p className="text-5xl text-primary font-bold leading-normal">
            HELLO{' '}👋,<br />
            I'M <span className="sm:text-5xl text-6xl text-secondary">ZHIJIE ZHU</span>
          </p>
          <img className="w-36 h-44" src={Avatar} alt="Avatar" />
        </div>
        <p className="sm:text-2xl text-4xl sm:text-center text-primary font-bold leading-normal sm:mt-2 mt-12">
          I learn how to code.
        </p>
        <div className="flex-grow flex flex-col justify-between sm:justify-center">
          <div className="mt-8" />
          <div>
            <p className="sm:text-2xl text-3xl sm:text-center text-primary font-bold leading-normal">
              ABOUT ME{' '}🙋‍♂️
            </p>
            <p className="sm:text-base mt-4 text-xl text-primary font-semibold leading-normal sm:ml-8 sm:mr-8">
              <span className="text-secondary">Zhijie Zhu</span>{' '}is currently a 3rd year 
              student studying Bachelor of Computer Science and Commerce at{' '}
              <a className="text-secondary">UNSW</a>. You can also call him Richard. He
              enjoys thinking, learning new things and making cool stuffs. He is recently
              learning <span className="text-secondary">JavaScript</span>.<br/><br/>
              He is currently based in Sydney. You can learn more about his projects, education and skills here.
              Feel free to <a className="text-secondary">contact</a>{' '}him as well at any time.
            </p>
          </div>
          <div className="sm:hidden flex flex-col justify-center items-center mb-4">
            <p className="text-lg text-primary font-semibold align-top">Scroll Down 🖱</p>
            <div className="animate-bounce mt-4"><Arrow /></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
