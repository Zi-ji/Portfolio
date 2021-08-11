import React from 'react'

const Contact = ({ refProp }) => {
  return (
    <div ref={refProp} className="page-container">
      <main className="w-144 main-container justify-center items-stretch">
        <div className="flex flex-col justify-center sm:items-center">
          <p className="text-3xl text-primary font-bold">Contact me ☎</p>
          <div className="h-48 border-l-4 border-primary sm:border-transparent ml-8 sm:ml-0 pl-8 sm:pl-4 mt-12 flex flex-col justify-between">
            <p className="text-lg text-primary font-medium">🏠 Based in Sydney</p>
            <p className="text-lg text-primary font-medium">
              📧 Email{' '}
              <a
                href="mailto:zhuzhijie1003@outlook.com"
                className="text-secondary duration-500 hover:text-light"
                data-tip="hello world"
              >
                zhuzhijie1003@outlook.com
              </a>
            </p>
            <p className="text-lg text-primary font-medium">
              📞 Phone{' '}
              <span className="text-secondary duration-500 hover:text-light select-all">
                +61 0451254606
              </span>
            </p>
            <p className="text-lg font-medium text-primary">
              📰 <a href={'Zhijie_Zhu_Resume.pdf'} download className="text-secondary duration-500 hover:text-light">Download</a>{' '}my Resume
            </p>
          </div>
        </div>
      </main>
      <div className="w-full h-12 border-b-8 border-secondary flex flex-row justify-center">
        <p className="text-base text-primary font-medium">© 2021 Zhijie Zhu</p>
      </div>
    </div>
  )
}

export default Contact
