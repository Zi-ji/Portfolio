import React from 'react';

export default function Contact({
  pageRef
}: {
  pageRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={pageRef} className="page-container">
      <main className="w-144 main-container justify-center items-stretch">
        <div className="flex flex-col justify-center sm:items-center">
          <p className="section-title">Contact me ☎</p>
          <div className="h-48 border-l-4 border-textColor sm:border-transparent ml-8 sm:ml-0 pl-8 sm:pl-4 mt-12 flex flex-col justify-between">
            <p className="section-subtitle">🏠 Based in Sydney</p>
            <p className="section-subtitle">
              📧 Email{' '}
              <a
                href="mailto:zhuzhijie1003@outlook.com"
                className="link-text"
                data-tip="hello world"
              >
                zhuzhijie1003@outlook.com
              </a>
            </p>
            <p className="section-subtitle">
              📞 Phone{' '}
              <span className="link-text select-all">+61 0451254606</span>
            </p>
            <p className="section-subtitle">
              📰{' '}
              <a href={'Zhijie_Zhu_Resume.pdf'} download className="link-text">
                Download
              </a>{' '}
              my Resume
            </p>
          </div>
        </div>
      </main>
      <div className="w-full h-12 border-b-8 border-primary flex flex-row justify-center">
        <p className="text-base font-medium">© 2021 Zhijie Zhu</p>
      </div>
    </div>
  );
}
