import React from "react";
import VMBlock from "./VMBlock";
import { motion } from "framer-motion";

const VisionMission = () => {
  return (
    <>
    
    

      <div className="mt-0 ">
      {/* <h1 className="py-2 text-left w-full font-main font-bold text-6xl text-[#f45c43]">
            | Vission & Mission
          </h1>
          <div className=" mt-10 ">
         <img
            src="images/r.jpg"
            className=" h-[450px] w-full  "
            alt="not found"
          />   
        </div> */}
        <div className='relative  h-[400px] '>
          <video src='videos/t.mp4' autoPlay={true} loop muted className='absolute top-0 opaci left-0 h-[400px] w-full object-cover'/>
          <div className='absolute top-0 left-0 w-full h-full bg-[#f2642200] opacity-50'></div> {/* Orange overlay */}
          <div className=' bg-[#00000000] backdrop-blur-md mt w-full h-[400px] py-32 flex justify-center absolute top-0 left-0' >
          <h1 className="py-2 text-center w-full font-main font-bold text-5xl md:text-6xl text-[#ffffff]">
            | Vission & Mission
          </h1>
            {/* <div className=' flex justify-center items-center ' >
              <div className=' w-full rounded-3xl bg-[#00000000] backdrop-blur-md text-center  flex flex-col ml-[0px] gap-7'>
                <h1 className='md:text-6xl p-3 font-main  md:p-3 font-bbold text-black1>
                <p className=' p-2 text-white '>A Community of geeks for the geeks by the geeks.</p>
                <button className=' justify-center flex bg-gfgmaincolor md:ml-[570px] w-full md:w-1/4 p-3 mb-4 shadow-black shadow-sm rounded-full transition ease-in-out delay-20 
                hover:-translate-y-1 hover:scale-110  duration-300 text-white' 
                // onClick={ScrollDown}
                >MEET OUR TEAM</button>
              </div>
              <div className=' w-1/2 overflow-hidden rounded-3xl shadow-[#dcd8d8]  shadow-md'>
                <video className='w-full rounded-3xl' src='Videos/coder.mp4' autoPlay={true} loop muted alt='codeman' />
              </div>   
            </div> */}
          </div>
        </div>
        {/* <div className="px-40 mb-">
          
        </div> */}
        
        <div className=" md:mt-0 mt-12 md:py-10 md:px-36  mb-">
          <h1 className=" font-main font-bold md:text-5xl text-4xl text-center md:text-left text-[#f26422f5]">
            | Background of the Organization
          </h1>
          <div className=" md:p-0 p-6  mt-10 gap-20 md:flex justify-between">
            <img
              src="https://ssit.edu.in/assets/images/nss/6.jpg"
              className=" shadow-xl shadow-black md:h-[380px] md:w-1/2  "
              alt="not found"
            />
            <h1 className="py-10 text-justify font-main md:text-2xl font- text-black">
              Background of the Organization: Unity of Youth Foundation (UOY)
              was born in 2007 from the collective passion of a group of NSS
              Volunteers who sought to transcend the confines of college
              campuses and extend their dedication to community and social
              service. Originally named Unity of NSS, the organization underwent
              a transformation, formalizing its status as a registered
              foundation recognized by the government. This pivotal step allowed
              UOY to broaden its horizons and deepen its impact.
            </h1>
          </div>
          <div className=" md:p-0 p-6 md:mt-20 gap-20 md:flex justify-between">
            <h1 className="md:py-20 text-justify font-main   md:text-2xl font- text-black">
              Since its inception, UOY has been steadfast in its commitment to
              fostering unity, empowerment, and positive change across Tamil
              Nadu. Through a multitude of activities and events, the foundation
              actively engages with communities, addressing various societal
              needs and challenges. From educational initiatives to
              environmental conservation efforts, UOY's work is grounded in the
              belief that collective action can drive meaningful progress.
            </h1>
            <img
              src="https://www.happydaysschool.org/images/nss.png"
              className="shadow-xl md:mt-0 mt-10 shadow-black md:h-[450px] md:w-1/2  "
              alt="not found"
            />
          </div>
          <div className="md:p-0 p-6 md:mt-20 gap-20 md:flex justify-between">
            <img
              src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/21/Pictures/chandigarh-friday-hindustan-patients-chandigarh-volunteers-helping_4ffea6b8-4541-11e8-9c90-d40a08109dff.jpg"
              className="shadow-xl shadow-black md:h-[450px] md:w-1/2  "
              alt="not found"
            />
            <h1 className="py-20 text-justify font-main md:text-2xl font- text-black">
              Guided by its core values of collaboration, transparency, and
              humility, UOY continues to evolve and adapt to the ever-changing
              landscape of social service. At its heart lies a dedication to
              youth empowerment and community development, inspiring individuals
              to become agents of change in their own right. As UOY navigates
              the complexities of its mission, it remains steadfast in its
              pursuit of a brighter, more inclusive future for all.
            </h1>
          </div>
        </div>
      </div>
      <VMBlock/>
    </>
  );
};

export default VisionMission;
