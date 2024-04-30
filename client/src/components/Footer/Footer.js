import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

 
const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when component mounts
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top when a link in "Quick Links" is clicked
  };

  return (
    <>
      <footer className=" font-Main w-full bg-black text-[#a4a4a4] text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
        <div className=" flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
          <div className="ml-20 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div className="  mr-20 flex justify-center">
            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/profile.php?id=100086706177045"
              target="_blank"
              className="me-6 text-blue-500 [&>svg]:h-4 [&>svg]:w-4"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </a>
            {/* TWITTER */}

            <a
              href="https://twitter.com/UnityofYouth?t=qiHfw_LlTvbzy0kler6VVw&s=09"
              target="_blank"
              className="me-6 text-[#ffffff] [&>svg]:h-4 [&>svg]:w-4 "
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
            {/* Insta */}

            <a
              href="https://instagram.com/unity_of_youth_foundation?igshid=NTc4MTIwNjQ2YQ"
              target="_blank"
              className="me-6 text-[#eb3349] [&>svg]:h-4 [&>svg]:w-4"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            {/* Linkedin */}

            <a
              href="https://www.linkedin.com/in/unity-of-youth-foundation-0664b2251"
              target="_blank"
              className="me-6 text-blue-500 [&>svg]:h-4 [&>svg]:w-4"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </a>
            {/* Youtube */}

            <a
              href="https://www.youtube.com/@unityofyouthfoundation"
              target="_blank"
              className="me-6 text-red-500 [&>svg]:h-4 [&>svg]:w-4"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path d="M3 4.01c-.83 0-1.5.67-1.5 1.5v13.98c0 .83.67 1.5 1.5 1.5h17c.83 0 1.5-.67 1.5-1.5V5.51c0-.83-.67-1.5-1.5-1.5H3zm7 12.24V7.76l5.98 3.24-5.98 3.25z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mx-6 md:p-20   font-main py-10 text-center md:text-left">
          <div className=" md:grid-1 md:grid gap-20 md:grid-cols-1 lg:grid-cols-4">
            {/* logo */}
            <div className="md:ml-[10px] w-full md:w-[400px]    ">
              <div className=" flex justify-start md:gap-6">
                <img
                  className="h-20"
                  src="images/uoybgremove.png"
                  alt="Logo"
                />
                <h1 className="text-[#ffffff] mt-8 font-main font-bold text-3xl  tracking-wider ">
                  Unity of youth
                </h1>
              </div>
              <h1 className=" mt-6 font-main font- text-justify">
                "Unity of Youth Foundation (UOY) fosters community engagement
                and social impact through collaborative efforts, symbolized by
                geese soaring in unity and transparency, driven by values of
                humility, empowerment, and dedication, all embodied in its
                vibrant logo and mission."
              </h1>
            </div>
            {/* Quick */}
            <div className="md:ml-[200px] md:mt-0 mt-10 text-left  w-full ">
          <h6 className="mb-4 text-xl  text-white  md:flex justify-center font-semibold uppercase md:justify-start">
            Quick Links
          </h6>
          <h1 className="mb-4">
            <NavLink to="/" onClick={handleLinkClick}>
              <h2 className="hover:text-[#d9d7d7] text-[#a4a4a4] transition ease-in-out">
                Home
              </h2>
            </NavLink>
          </h1>
          <h1 className="mb-4">
            <NavLink to="/AboutUs" onClick={handleLinkClick}>
              <h2 className="hover:text-[#d9d7d7] text-[#a4a4a4] transition ease-in-out">
                About Us
              </h2>
            </NavLink>
          </h1>
          <h1 className="mb-4">
            <NavLink to="/ContactUs" onClick={handleLinkClick}>
              <h2 className="hover:text-[#d9d7d7] text-[#a4a4a4] transition ease-in-out">
                Contact Us
              </h2>
            </NavLink>
          </h1>
          <h1 className="mb-4">
            <NavLink to="/VisionMission" onClick={handleLinkClick}>
              <h2 className="hover:text-[#d9d7d7] text-[#a4a4a4] transition ease-in-out">
               Vission Mission
              </h2>
            </NavLink>
          </h1>
          <h1 className="mb-4">
            <NavLink to="/VolunteerRegistration" onClick={handleLinkClick}>
              <h2 className="hover:text-[#d9d7d7] text-[#a4a4a4] transition ease-in-out">
               Volnteer Registration
              </h2>
            </NavLink>
          </h1>
          <h1 className="mb-4">
            <NavLink to="/Donate" onClick={handleLinkClick}>
              <h2 className="hover:text-[#d9d7d7] text-[#a4a4a4] transition ease-in-out">
              Donate
              </h2>
            </NavLink>
          </h1>
          <h1 className="mb-4">
            <NavLink to="/CoreTeam" onClick={handleLinkClick}>
              <h2 className="hover:text-[#d9d7d7] text-[#a4a4a4] transition ease-in-out">
              Core Team
              </h2>
            </NavLink>
          </h1>
          {/* <h1>
            <NavLink to="/Gallery" onClick={handleLinkClick}>
              <h1 className="hover:text-[#d9d7d7] text-[#a4a4a4] transition ease-in-out">
                Gallery
              </h1>
            </NavLink>
          </h1> */}
        </div>
            {/* links */}
            <div className="md:ml-[200x] text-left   md:mt-0 mt-10  w-full ">
              <h6 className="mb-4 text-xl  text-white  md:flex justify-center font-semibold uppercase md:justify-start">
                Useful links
              </h6>
              <h1 className="mb-4 text-left flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                </span>
                <h2 className="hover:text-[#d9d7d7] text-[#a4a4a4] transition ease-in-out">
                  {" "}
                  Sivaji Ganeshan Street, 3/191, Thiruthangal Rd, S.N.Puram,
                  Sivakasi, Tamil Nadu 62613{" "}
                </h2>
              </h1>
              <h1 className="mb-4 text-left flex items-center  md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </span>
                <h2 className="hover:text-[#d9d7d7] text-[#a4a4a4] transition ease-in-out">
                  {" "}
                  unityofyouthofficial@gmail.com
                </h2>
              </h1>
              <h1 className="mb-4 text-left flex items-center  md:justify-start">
                <span className="me-3 text-left [&>svg]:h-5 [&>svg]:w-5">
                  <svg
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
                <h2 className="hover:text-[#d9d7d7] text-[#a4a4a4] transition ease-in-out">
                  {" "}
                  +91 96007 22059{" "}
                </h2>
              </h1>
              <h1 className="mb-4 text-left flex items-center  md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-6" // Added margin-right to create a gap
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 2c-4.42 0-8 3.58-8 8s8 14 8 14s8-10 8-14s-3.58-8-8-8zm0 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5zm0-8a3.5 3.5 0 00-3.5 3.5c0 1.74 3.5 4.5 3.5 4.5s3.5-2.76 3.5-4.5a3.5 3.5 0 00-3.5-3.5z" />
                </svg>
                <a
                  href="https://maps.app.goo.gl/MXp45y6HwpcUTdGa6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className="hover:text-[#d9d7d7] text-[#a4a4a4] transition ease-in-out">
                    Get the Directions
                  </h2>
                </a>
              </h1>
            </div>
            
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#f26522] to-[#f26522] p-6    w-full  text-center">

          <NavLink to="/">
           <h1 className="  font-main font-bold   w-full text-white ">© 2023 Copyright: UnityOfYouth</h1>
          </NavLink>
        </div>
      </footer>
    </>
  );
};

export default Footer;
