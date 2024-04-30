import React from "react";
import Objective from "./Objective";

const AboutUs = () => {
  return (
    <>
      <div className="md:px-40   md:mt-20 md:mb-20">
        <h1 className="md:py-2 font-main font-bold md:text-5xl md:mt-0 md:p-0 p-5    mt-10 text-4xl text-left text-[#f26522]">
          | About us
        </h1>
        <div className=" md:p-0 p-5  ">
        <h1 className="md:py-6 font-main md:text-xl text-justify text-[black] text-base ">
          Unity of Youth Foundation is a non-profit organization dedicated to
          empowering and uplifting the youth community. We believe in creating a
          supportive environment where young individuals can thrive, grow, and
          make a positive impact in society.
        </h1>
        <h1 className="py-0 font-main md:text-xl font- text-justify   text-base ">
          Established in 2007 by a group of young and vibrant NSS Volunteers, it
          aimed to extend the community and social service beyond the college
          enabling the youth to contribute to the society even after their
          graduation from college. Initially named as Unity of NSS, it became a
          foundation after being registered under the government. Today UOY
          operates all across Tamil Nadu undertaking activities and events in
          order to benefit the society.
          The logo of Unity of Youth Foundation showcases geese soaring over the
          letters UOY, embodying unity, collaboration, and leadership. Just as
          geese fly in a V formation, we at UOY believe in shared goals and
          teamwork for greater efficiency and success. The visibility of the
          geese symbolizes transparency within our foundation, ensuring every
          member is connected and empowered to contribute. Humility is another
          core value reflected in our logo. Like geese, we acknowledge the
          importance of seeking help when needed and supporting each other
          through challenges. 
        </h1>
        </div>
        <div className="md:flex md:p-0 p-5 mt-10 justify-center gap-20 h-[310px]">
          <img
            src="https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/8dce25517395ddaffe7bc2c5dd06ab2e.jpg"
            alt="not found"
            className=" shadow-[#f45c43] md:p-0 p-5 rounded-xl shadow-lg "
          />
          <img
            src="https://pixahive.com/wp-content/uploads/2020/11/An-old-woman-206539-pixahive.jpg"
            alt="not found"
            className="shadow-[#f45c43] md:mt-0 mt-7 md:p-0 p-5 rounded-2xl shadow-lg"
          />
        </div>
        <div className=" md:mt-0 mt-[280px] md:p-0 p-6">
        <h1 className="py-10 text-justify font-main md:text-xl font-   bg-clip-text">
          By empowering others to lead and recognizing their
          contributions, we foster a culture of appreciation and collaboration.
          Inspired by the commitment of geese to their migration routes, our
          logo reminds us to stay true to our core values and purpose, remaining
          resilient and dedicated to our mission.
         Guided by these lessons, we move forward together towards a future of
          unity, empowerment, and positive change. Moreover, the geese symbolize
          our unity and collective effort to soar to great heights together,
          just as they do.
        The lively orange color of the letters UOY symbolizes zeal and youth
          relationships, mirroring the vibrant nature of the youth of Unity of
          Youth Foundation and its active approach to community involvement. The
          foundation is dedicated to promoting innovation and disseminating
          information for the benefit of society. The calm blue color represents
          inspiration and wisdom. The harmony of these hues captures the spirit
          of the foundation's goals and ideals.
        </h1>
        </div>
      </div>

      <Objective />
    </>
  );
};

export default AboutUs;
