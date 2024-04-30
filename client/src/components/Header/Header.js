import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import { motion } from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [setShowModal] = useState(false);
  
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <>
      {" "}
      <motion.div
        className=" "
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <div className="bg-[#fd1010f] md:flex md:justify-center flex justify-around gap-20   py-4">
          
          <div className=" bg-lue-800 w-full ">
            <div className="flex justify-between  items-center  bg-[ff3ce8] p-2">
              <div className=" md:translate-x-20 bg-green400  ">
                <NavLink className=" flex "
                  exact="true"
                  to="/">

                  <img
                    className="h-10"
                    src="images/uoybgremove.png"
                    alt="Logo"
                  />
                  <h1 className=" mt-2 font-Main md:text-lg font-bold text-[#f26522]"> Unity of youth </h1>

                </NavLink>
              </div>
              <div className="md:flex hidden justify-center md:gap-10 items-center   font-bold">
                <div className=" ml-[130px] ">
                  <nav className="flex justify-end">
                    <ul className=" md:space-x-5 text-[#f26522] font-medium md:mr-16 flex list-none p-0 font-Main
               ">
                      <li className="mr-4">
                      
                        <NavLink
                    
                          to="/"
                          activeclassname="active-link"
                          className={({ isActive }) =>
                            isActive ? "nav-link text-[#f26522] font-medium md:text-xl" : null
                          }
                        >
                          Home
                        </NavLink>

                      </li>
                      <li className="mr-4">
                        <NavLink
                          to="/AboutUs"
                          activeclassname="active-link"
                          className="nav-link text-[#f26522] text-sm font-medium md:text-xl hover:text-[black]"
                        >
                          About Us
                        </NavLink>
                      </li>

                      <li className="mr-4">
                        <NavLink
                          to="/VisionMission"
                          activeclassname="active-link"
                          className="nav-link text-[#f26522] text-sm font-medium md:text-xl hover:text-[black]"
                        >
                          Vision &amp; Mission
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/ContactUs"
                          activeclassname="active-link"
                          className="nav-link text-[#f26522] text-sm font-medium md:text-xl hover:text-[black]"
                        >
                          Contact Us
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div ref={dropdownRef} className="relative">
                  <div
                    onClick={toggleDropdown}
                    className="hover:bg-[] rounded-full text-center z-50 text-[#f26522] border-2 border-[#f26522] hover:border-[black] hover:text-[black] h-[40px] w-[180px] font-bold transition ease-in-out shadow-[#000000d6] shadow-md flex justify-center items-center bg-[] font-scnd cursor-pointer"
                  >
                    <ul className=" ">
                      <li className=" p- text-center  ">
                        <h1
                          className="nav-link rounded-full text-center p-1 hover:text-[black]  text-[#f26522] font-bold  md:text-sm  "
                        >
                          {" "}
                          Click for Registration{" "}
                        </h1>
                      </li>
                    </ul>
                  </div>
                  {showDropdown && (
                    <div className="absolute z-50 mt-2 font-bold p-4 text-center bg-white border rounded-lg shadow-lg">
                      <ul className="list-none p-0 font-scnd">
                        <li>
                          <NavLink
                            to="/VolunteerRegistration"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          >
                            Register as Volunteer
                          </NavLink>
                        </li>
                    
                        <li>
                          <NavLink
                            to="/Donate"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          >
                            Blood Donator
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
               

              </div>

              <div className="flex relative">

                {!menu && (
                  <HiMenuAlt4
                    fontSize={28}
                    className="bg-[#f26522] rounded fill-white md:hidden cursor-pointer"
                    onClick={() => setMenu(true)}
                  />
                )}
                {menu && (

                  <ul
                    className="z-30 bg-[#0000004d] backdrop-blur-md fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-md md:hidden list-none
            flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
                  >

                    <li className="text-xl w-full my-3">
                      <AiOutlineClose
                        className="stroke-2"
                        onClick={() => setMenu(false)}
                      />
                    </li>

                    <li className="mr-4 font-bold bg -emerald-800">
                      <NavLink
                        
                        to="/"
                        activeclassname="active-link"
                        className={({ isActive }) =>
                          isActive ? "nav-link text-[#f26522] font-medium md:text-xl" : null
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className=" mr-5 bg-emerald-4 mt-4    font-bold ">
                    <NavLink
                        to="/AboutUs"
                        activeclassname="active-link"
                        className="nav-link text-[#f26522] text-sm font-medium md:text-xl hover:text-[black]"
                      >
                        About Us
                      </NavLink>
                    </li>

                    <li className=" mr-5 bg-yello -800 mt-4  font-bold ">
                    <NavLink
                        to="/VisionMission"
                        activeclassname="active-link"
                        className="nav-link text-[#f26522] text-sm font-medium md:text-xl hover:text-[black]"
                      >
                        Vision &amp; Mission
                      </NavLink>
                    </li>
                    <li className=" mr-5 bg-emer ld-800 mt-4   font-bold ">
                    <NavLink
                        to="/ContactUs"
                        activeclassname="active-link"
                        className="nav-link text-[#f26522] text-sm font-medium md:text-xl hover:text-[black]"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                    <hr className="my-6 bg-red-950 w-full border-2 border-gray-300"></hr>
                    <h1 className="  px-4   rounded-full  mr-3 py-2 text-gray-800  bg-gray-200"
                    >
                      Register As
                    </h1>
                  
                    <div className="   flex flex-col ">
                      <NavLink to='/VolunteerRegistration'
                       
                        className="relative my-4 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group"
                      >
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-center font-bold text-white transition-colors duration-200 font-scnd ease-in-out group-hover:text-white">
                          Volunteer
                        </span>
                      </NavLink>

                      <NavLink to='/Donate'
                        onClick={() => setShowModal(true)}
                        className="relative my-4 inline-flex items-center   justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group"
                      >
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-center font-bold text-white transition-colors duration-200 font-scnd ease-in-out group-hover:text-white">
                          Blood Donator
                        </span>
                      </NavLink>
                    </div>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

      </motion.div>{" "}
    </>
  );
};

export default Header;
