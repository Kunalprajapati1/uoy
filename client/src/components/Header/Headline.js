import React from 'react';
import './Headline.css';

const Headline = () => {
  return (
    <div className='bg-[#f26522]'>
      <div className='md:w-full w-2/3 justify-center bg-[#3af22200] md:ml-0 ml-10 md:flex md:justify-center gap-9 '> 
      
        <div className='bg-violet-00'>
          <a
            href="https://www.linkedin.com/in/unity-of-youth-foundation-0664b2251"
            target="_blank"
            className="text-#000000-500 [&>svg]:h-6 [&>svg]:w-6"
            rel="noreferrer"
          >
            <h1 className="hover:text-[#000000] mt-3 w-full text-[#ffffff] transition ease-in-out">
              LinkedIn
            </h1>
          </a>
        </div>

        <div className='bg-violet-00'>
          <p className="mt-1 flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-6 [&>svg]:w-6">
              <svg className='mt-3 bg-[white] p-1 rounded-sm'
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </span>
            unityofyouthofficial@gmail.com
          </p>
        </div>

        <div className='bg-yellow-00'>
          <p className="flex items-center md:justify-start">
            <span className="me-3 [&>svg]:h-6 [&>svg]:w-6">
              <svg className='mt-4 bg-[white] p-1 rounded-sm'
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            +91 96007 22059
          </p>
        </div>

        <div className='bg-violet-00'>
          <a
            href="https://instagram.com/unity_of_youth_foundation?igshid=NTc4MTIwNjQ2YQ"
            target="_blank"
            className="me-6 text-[#000000] [&>svg]:h-6 [&>svg]:w-6"
            rel="noreferrer"
          >
            <h1 className="hover:text-[#000000] mt-2 w-full text-[#ffffff] transition ease-in-out">
              Instagram
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Headline;
