import React from 'react';

export default function Contact({
  pageRef
}: {
  pageRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={pageRef} className="page-container">
      <main className="w-144 max-w-full main-container items-center">
        <p className="section-title mb-8">GET IN TOUCH ☎</p>

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
          📞 Phone/Telegram/WhatsApp{' '}
          <span className="link-text select-all">+61 0451254606</span>
        </p>

        <p className="section-subtitle">
          📰{' '}
          <a href={'Zhijie_Zhu_Resume.pdf'} download className="link-text">
            Download
          </a>{' '}
          my Resume
        </p>

      </main>
      <div className="w-full border-b-8 border-primary flex flex-row justify-center">
        <p className="text-base font-medium mb-4">© 2021 Zhijie Zhu</p>
      </div>
    </div>
  );
}
