import React from "react";

const VMBlock = () => {
  return (
    <>
      <div className="relative bg-[#f0f0f0] mb-10 md:mt-0 mt-[60px] md:mb-40">
      <div className="md:px-40  bg-opacity-80">
            <h1 className="py-2 font-main font-bold text-5xl text-center md:text-left text-[#f45c43]">
              | Our Goals
            </h1>
          </div>
        <img
          src="https://images.unsplash.com/photo-1709530980962-1dcbfa2def9b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-auto"
          alt="not found"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          {/* <div className="px-40 bg-[#f0f0f0] bg-opacity-80">
            <h1 className="py-2 font-main font-bold text-5xl text-left text-[#f45c43]">
              | Vision & Mission
            </h1>
          </div> */}
        </div>
        <div className="absolute md:p-0 p-6 md:mt-40 inset-0 md:flex justify-center items-center">
          <div className="mt-20 md:px-40 gap-20">
            <div className="transition backdrop-filter backdrop-blur-0 ease-in-out p-10 rounded-2xl border-2 border-black bg-[#ffffff56] bg-opacity-80">
              <h1 className="py-2 font-main font-bold text-2xl text-center text-[#000000]">
                | Vision Of Unity of Youth
              </h1>
              <h1 className="md:text-xl text-justify font-main justify-center mt-5">
                Our mission is to mould the youth of our nation who hold the
                future with all the necessary skills, resources and
                opportunities enabling them to contribute to the society for a
                better and sustainable tomorrow. Through mentorship, education
                and community engagement, we aim to cultivate the potential of
                every young person, building a generation of empowered leaders.
                <br />
                The vision of Unity of Youth Foundation (UOY) is to create a
                society where young individuals are empowered to make
                meaningful contributions and drive positive change. UOY
                envisions a future where unity, collaboration, and leadership
                among youth are the driving forces behind societal progress.
                Through its various initiatives and events, UOY aims to
                inspire young people to become active participants in community
                service and social advocacy, transcending boundaries and making
                a lasting impact across Tamil Nadu. Ultimately, UOY strives to
                cultivate a culture of empathy, compassion, and resilience,
                where youth are equipped with the skills and mindset to address
                the challenges of today and build a brighter tomorrow for
                generations to come.
              </h1>
            </div>
            <div className="md:mt-20 mt-16 p-10 rounded-2xl transition ease-in-out border-2 border-black bg-[ffffff56 bg-opacity-80">
              <h1 className="py-2 font-main font-bold text-2xl text-center text-[#000000]">
                | Mission Of Unity of Youth
              </h1>
              <h1 className="md:text-xl text-justify font-main mt-5 justify-center">
                Our vision is to bring out positive impacts in the society with
                the aid of talented and trained youth who can make a
                significant difference in society and, in the bigger picture,
                support the growth of the country as a whole.
                <br />
                The mission of Unity of Youth Foundation (UOY) is to empower
                young individuals to actively engage in community and social
                service initiatives, transcending the boundaries of college
                campuses. UOY aims to foster unity, collaboration, and positive
                change across Tamil Nadu by organizing various activities and
                events that address societal needs and challenges. Guided by
                core values of collaboration, transparency, and humility, UOY
                seeks to inspire youth to become agents of change and
                contribute to the betterment of society.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VMBlock;
