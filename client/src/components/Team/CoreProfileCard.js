import React from 'react';
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import coremembers from './Coreteam-data';

const CoreProfileCard = ({coredata}) => {
  return (
    <>
      <div className='flex bg-[#f96f41] flex-col border-2 border-gfgmaincolor shadow-2xl hover:shadow-[#df5829]   md:w-1/4 w-full h-[400px] hover:bg-right-bottom cursor-pointer transition ease-in-out delay-20 
        hover:-translate-y-1 hover:scale-110  duration-300
        rounded-3xl'>
        <div className=' bg-black  text-white  border-2 border-[#ffc5b2] relative h-28 flex justify-center rounded-t-3xl'>
        <div className='rounded-full mt-4 overflow-hidden shadow-black  border-2 border-[#ffc5b2] shadow-xl h-40 w-40'>
          <img className='object-fill w-full' src={coredata.profile} alt='not valid' />
        </div>
        </div>
        <div className='flex text-white font-main flex-col mt-20 items-center py-4 gap-2'>
           <h1 className='text-2xl text-black text-center font-bold'>{coredata.name}</h1>
           <h1 className='px-4 text-black text-lg font-medium text-center'>{coredata.position}</h1>
           <h1 className='px-4 text-black text-center'>{coredata.info}</h1>
           <div className='flex gap-8 my-2 text-2xl'>
           <NavLink to={coredata.insta} target='_blank'>
              <BsInstagram className='fill-[#ca5c8e]  hover:fill-[#a80968] hover:cursor-pointer'  />
           </NavLink>
           <NavLink to={coredata.linkedin} target='_blank'>
              <FaLinkedinIn className='fill-[#5485b7]  hover:fill-[#0654a1] cursor-pointer' />
           </NavLink>
        
           </div>
        </div>
      </div>
    </>
  )
}

export default CoreProfileCard
