import React, { useEffect } from 'react';
// import Caraousal from './Caraousal';
import { NavLink } from 'react-router-dom';

const Vision = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when component mounts
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  const handleReadMoreClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top when "Read More" button is clicked
  };

  return (
    <>
      <div className="md:p-20 transition ease-in-out mb-10 relative">
        <div className="">
          <h1 className="py-2  font-main font-bold text-2xl text-center text-[#f26522] ">
            | Mission &amp; Vision
          </h1>
          <h1 className="py-6 text-[#f26522] font-bold font-main md:text-5xl text-center bg-gradient-to-r from-[#f26522] to-[#f45c43] bg-clip-text">
            "Driven by our mission, we tackle complex issues with determination and compassion."
          </h1>
        </div>
        <div className="mt-10 relative shadow-black shadow-2xl">
          <div className="inset-0 bg-[#0000003e] opacity-100"></div>
      <video src='videos/dd.mp4' autoPlay={true} loop muted className='h-[500px] w-full object-cover opacity-100 transition-opacity duration-500 ease-in-out '/>

          {/* <img
            className="h-[500px] w-full object-cover opacity-100 transition-opacity duration-500 ease-in-out"
            src="images/de.jpg"
            alt="Logo"
            style={{ opacity: 1 }} // Initial opacity set to 100%
          />   */}
          <div className="absolute inset-0 md:flex justify-center gap-20 items-center hover:bg-opacity-25 bg-gradient-to-r from-[#f26422de] via-[#8f8d8d87] to-[#f26422da]">
            <div className='md:mt-0 md:p-0 p-6 '>
            <img
            className="md:h-[300px] rounded-md shadow-black shadow-2xl w-full object-cover opacity-100 transition-opacity duration-500 ease-in-out"
            src="images/tt.jpg"
            alt="Logo"
            // style={{ opacity: 1 }} // Initial opacity set to 100%
          /> 
            </div>
            <div className=''>
              <h2 className="font-main font-bold text-center md:text-5xl text-4xl text-[white]">
                Empowering Communities
              </h2>
              <div className=' rounded-3xl text-center transition ease-in-out  bg-[#000000] hover:bg-[#f26522] p-5 mt-10 '>
                <NavLink to="/VisionMission" onClick={handleReadMoreClick} className=" text-white text-center p-5 font-main">Read More</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
