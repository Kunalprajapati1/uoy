import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import Scnd from "./Scnd";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = [
    "Unity of Youth Foundation Welcomes You",
    // Add more text here if needed
  ];
  const typingSpeed = 250; // Adjust typing speed here
  const erasingSpeed = 80; // Adjust erasing speed here
  const pauseBetweenTexts = 8500; // Adjust pause between texts here

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let isTyping = true; // Flag to indicate whether currently typing or erasing

    const intervalId = setInterval(() => {
      if (isTyping) {
        // Typing
        if (currentText.length < fullText[currentIndex].length) {
          currentText = fullText[currentIndex].substring(0, currentText.length + 1);
          setTypedText(currentText);
        } else {
          isTyping = false; // Switch to erasing mode
          setTimeout(() => {
            isTyping = true; // Switch back to typing mode
          }, pauseBetweenTexts);
        }
      } else {
        // Erasing
        if (currentText.length > 0) {
          currentText = currentText.substring(0, currentText.length - 1);
          setTypedText(currentText);
        } else {
          isTyping = true; // Switch back to typing mode
          currentIndex = (currentIndex + 1) % fullText.length; // Move to the next text
        }
      }
    }, isTyping ? typingSpeed : erasingSpeed); // Use typing speed or erasing speed based on mode

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run this effect only once

  return (
    <>
      <motion.div
        className="relative h-screen flex flex-col justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
         
      >
{/* <div className='relative h-[75vh] mt-12'>
      <video src='videos/s.mp4' autoPlay={true} loop muted className='absolute blum bg-black  top-0 left-0 w-full h-full object-cover'/>
      <div className='  py-24 flex justify-center absolute top-0 left-0' >
        <div className=' flex justify-center items-center ' >
           <div className=' w-full rounded-3xl bg-[#00000000] backdrop-blur-md text-center  flex flex-col ml-[0px] gap-7'>
           <h1 className='md:text-6xl p-3 text-3xl font-scnd md:p-3 font-black text-white leading-tight'><span className=' font-'>GFG</span> Student Chapter Dronacharya College of Engineering </h1>
           <p className=' p-2 text-white '>A Community of geeks for the geeks by the geeks.</p>
           <button className=' justify-center flex bg-gfgmaincolor md:ml-[570px] w-full md:w-1/4 p-3 mb-4 shadow-black shadow-sm rounded-full transition ease-in-out delay-20 
              hover:-translate-y-1 hover:scale-110  duration-300 text-white' 
              onClick={ScrollDown}
              >MEET OUR TEAM</button>
           </div>
            <div className=' w-1/2 overflow-hidden rounded-3xl shadow-[#dcd8d8]  shadow-md'>
           <video className='w-full rounded-3xl' src='Videos/coder.mp4' autoPlay={true} loop muted alt='codeman' />
        </div>   
        </div>
      </div>
    </div> */}

      {/* <video src='videos/s.mp4' autoPlay={true} loop muted className='absolute blum bg-black  top-0 left-0 w-full h-full object-cover'/> */}
      <div className='relative h-[450px]   '>
      <video src='videos/g.mp4' autoPlay={true} loop muted className='absolute blum bg-black  top-0 left-0 w-full h-full object-cover'/>
      {/* <div className='  py-24 flex justify-center absolute top-0 left-0' > */}
        {/* <div className=' flex justify-center items-center ' > */}
        <div className="flex flex-col  items-center justify-center text-white h-[450px] bg-[#f2642233] backdrop-blur-lg">
           <h1 className="md:text-6xl text-4xl text-center font-main font-bold tracking-wide">{typedText}</h1>
          <h1 className="md:text-4xl text-2xl mt-9 font-main font-bold tracking-wide">YOUTHS FOR FUTURE</h1>
           {/* <h1 className='md:text-6xl p-3 text-3xl font-scnd md:p-3 font-black text-white leading-tight'><span className=' font-'>GFG</span> Student Chapter Dronacharya College of Engineering </h1> */}
           {/* <p className=' p-2 text-white '>A Community of geeks for the geeks by the geeks.</p> */}
             <NavLink to="/CoreTeam" className=' mt-10 justify-center flex bg-[black]   w-1/2 md:w-1/4 p-3 mb-4 shadow-black shadow-sm rounded-full transition ease-in-out delay-20 
                hover:scale-105 duration-300 text-white' 
              
              >MEET OUR TEAM</NavLink>  
           </div>
            <div className=' w-1/2 overflow-hidden rounded-3xl shadow-[#dcd8d8]  shadow-md'>
           {/* <video className='w-full rounded-3xl' src='Videos/coder.mp4' autoPlay={true} loop muted alt='codeman' /> */}
        </div>   
        {/* </div> */}
      {/* </div> */}
    </div>
         {/* <div className="flex flex-col items-center justify-center text-white h-[350px] bg-[#f26522] backdrop-blur-lg">
        
        </div>  */}
        
          <div className=" -translate-y-[50px] md:p-0 p-6 md:flex justify-center gap-24">
      <div className="relative bg-black hover:-translate-y-5 hover:shadow-2xl hover:shadow-black transition ease-in-out group">
        <img
          src="images/sq.jpg"
          alt="not found"
          className="h-[290px] group-hover:brightness-50  opacity-80 transition duration-300 ease-in-out"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <span className="text-white text-xl font-bold">Sociality</span>
        </div>
      </div>
      <div className="relative  md:mt-0 mt-10  bg-black  hover:-translate-y-5 hover:shadow-2xl hover:shadow-black transition ease-in-out group">
        <img
          src="images/g.jpg"
          alt="not found"
          className="h-[290px] group-hover:brightness-50 opacity-80 transition duration-300 ease-in-out"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <span className="text-white text-xl font-bold">Integrity</span>
        </div>
      </div>
      <div className="relative md:mt-0 mt-10  bg-black   hover:-translate-y-5 hover:shadow-2xl hover:shadow-black transition ease-in-out group">
        <img
          src="images/d.jpg"
          alt="not found"
          className="h-[290px] group-hover:brightness-50 opacity-80 transition duration-300 ease-in-out"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <span className="text-white text-xl font-bold">Collaboration</span>
        </div>
      </div>
    </div>  
        {/* Semi-transparent Overlay */}
        {/* <div className="absolute  h-4/5" /> */}

        {/* Text in the Center */}

        {/* Down Arrow */}
        {/* <div className="text-white text-center mt-[506px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 animate-bounce mx-auto"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div> */}
      </motion.div>

      <ToastContainer />
      <Scnd />
    </>
  );
};

export default Homepage;
