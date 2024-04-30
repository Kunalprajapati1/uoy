import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Caraousal from "./Caraousal";
import Vision from "./Vision";

const Scnd = () => {
  const [isVolunteerHovered, setIsVolunteerHovered] = useState(false);
  const [isDonatorHovered, setIsDonatorHovered] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when component mounts
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top when a link in "Quick Links" is clicked
  };
  return (
    <>
      <div className="md:p-20 md:mt-0 mt-[700px] text-center mb-10">
        <h1 className="py-2 font-main font-bold text-2xl text-[#f26522] ">
          | Who are we?
        </h1>
        <h1 className="py-6 text-transparent font-main md:text-center text-3xl font-bold md:text-5xl bg-gradient-to-r bg-clip-text from-[#f26522] to-[#f45c43]">
          You can make a difference in the lives of the less fortunate by
          partnering with us.
        </h1>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1495366554757-8568e69d7f80?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="not found"
          className="w-full   "
        />
        <div className="absolute  w-full md:top-1/2 top-1 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 text-center">
          <div className="  mb-10">
            <div className=" p-8 md:flex justify-center md:mt-0 md:p-20 ">
              <h1 className="font-main font-medium md:text-white md:text-xl text-justify   md:p-8 md:mt-10">
                Unity of Youth Foundation stands as a beacon of hope, a
                non-profit organization devoted to nurturing and empowering the
                young generation. Within our supportive ecosystem, we cultivate
                an environment where youth can flourish, evolve, and leave a
                lasting positive mark on society. Founded in 2007 by
                enthusiastic NSS Volunteers, our vision transcends college
                boundaries, aiming to extend the reach of community service long
                after graduation. Initially known as Unity of NSS, our journey
                evolved into a registered foundation, committed to serving Tamil
                Nadu's diverse communities through impactful initiatives.
              </h1>
              {/* <img
                src="images/t.jpg"
                alt="not found"
                className="w-[500px] hover:opacity-85 shadow-2xl shadow-black  "
              /> */}
            </div>
            <div className=" md:flex justify-center p-10 md:p-20 ">
              <img
                src="images/rr.jpg"
                alt="not found"
                className="md:w-[500px] hover:opacity-85  shadow-2xl shadow-black "
              />
              <h1 className="font-main font-medium md:text-white md:text-xl text-justify  md:p-8 mt-10">
                Our emblem, adorned with soaring geese above the acronym UOY,
                encapsulates our ethos of unity, collaboration, and leadership.
                Just as geese harmonize in a V formation, we embrace shared
                objectives and teamwork as catalysts for greater efficacy and
                triumph. Transparency is paramount in our foundation, symbolized
                by the geese's visibility, ensuring every member feels connected
                and empowered to contribute. Humility is another cornerstone
                value reflected in our emblem, mirroring geese's humility in
                seeking support and offering aid amidst challenges.
              </h1>
            </div>
          </div>
          <div className=" md:mt-0 mt-10">

          <NavLink to="/AboutUs" onClick={handleLinkClick}>
            <button className=" bg-[#000000] px-20 text-white font-Main font-bold py-4 ">
              Read More
            </button>
          </NavLink></div>
        </div>
      </div>

      <div className="md:p-20 p-10 md:mt-0 mt-[800px] mb-10">
        <h1 className="py-2 font-main text-center font-bold text-2xl text-[#f26522] ">
          | Register yourself
        </h1>
        {/* <h1 className="font-scnd font-medium text-justify text-lg p-8 mt-10">
          Unity of Youth Foundation (UOY), established in 2007 by NSS Volunteers,
          aims to extend community service beyond college. Registered under the
          government, it operates throughout Tamil Nadu, fostering societal
          benefits. The logo, depicting geese flying in unity, symbolizes
          collaboration, transparency, and humility within the foundation.
          Guided by these values, UOY strives for collective empowerment and
          positive change. Its vibrant orange and calming blue colors represent
          youthful zeal, wisdom, and innovation in community involvement.
        </h1> */}
        <div className="mt-20 md:flex justify-center gap-10">
          <NavLink
            to="/VolunteerRegistration"
            onClick={handleLinkClick}
            // onMouseEnter={() => setIsVolunteerHovered(true)}
            // onMouseLeave={() => setIsVolunteerHovered(false)}
          >
            <div className="bg-[#f26522] md:p-28 p-10 hover:shadow-black shadow-inner border-2 border-[#f26522] hover:bg-[#f26522] hover:text-white transition ease-in-out rounded-2xl">
              <h1 className="md:text-4xl text-center font-main font-bold">
                Join us as Volunteer
              </h1>
              <h1 className="text-lg mt-2 text-center font-main font-bold">
                "Join Hands, Serve and, Empower: Volunteer Today."
              </h1>
              <h1 className="text-2xl text-center mt-3 font-bold font-main text-black">
                Proceed to Volunteer →
              </h1>

              {isVolunteerHovered && (
                <p className="text-center text-sm text-gray-500 mt-8">
                  <h1 className="text-2xl font-bold font-main text-black">
                    Proceed to Volunteer →
                  </h1>
                </p>
              )}
            </div>
          </NavLink>
          <NavLink
            to="/Donate"
            onClick={handleLinkClick}
            // onMouseEnter={() => setIsDonatorHovered(true)}
            // onMouseLeave={() => setIsDonatorHovered(false)}
          >
            <div className="hover:bg-[#5e6aa0d7] border-2 md:mt-0 mt-10  md:p-28 p-10 hover:shadow-black shadow-inner border-[#5e6aa0d7] bg-[#5e6aa0d7] hover:text-white transition ease-in-out rounded-2xl">
              <h1 className="md:text-4xl text-center font-main font-bold">
                Give life, give hope.
              </h1>
              <h1 className="text-lg mt-2 text-center font-main font-bold">
                "Empower Change: Donate Generously, Impact Lives."
              </h1>
              <h1 className="text-2xl mt-3 text-center font-bold font-main text-black">
                Proceed to Donate →
              </h1>

              {isDonatorHovered && (
                <p className="text-center text-sm text-[black] mt-8">
                  <h1 className="text-2xl font-bold font-main text-black">
                    Proceed to Donate →
                  </h1>
                </p>
              )}
            </div>
          </NavLink>
        </div>
      </div>

      <Vision />
    </>
  );
};

export default Scnd;
