import React from 'react';

const Reach = () => {
  return (
    <>
    <div className='mt-32'>
      <div className=''>
      <h1 className="py-6 font-Foldit text-4xl text-center text-[#f45c43]">
            | Reach Out to us
          </h1>
      </div>
      <div className="relative mt-10 mb-40 ">
        <form className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Change the URL to your desired image
          }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </form>
        <form className="p-20 mb-10 relative z-10">
          
          {/* <!-- component --> */}
          <form className="text-gray-600 body-font">
            <div className="container mx-auto flex justify-center items-center">
            <div className=''>
            
          <h1 className="py-2 bg-green-400 text-transparent font-Foldit text-7xl text-center bg-gradient-to-r from-[#ff465b] to-[#f45c43] bg-clip-text">
            Open for your Suggestions!
          </h1>
            </div>
             
              <div className="lg:w-1/3 md:w-1/2 bg-[black] bg-opacity-90 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative shadow-md">
                <h2 className="text-gray-200 font-Foldit text-2xl mb-1 font-medium title-font">
                  Feedback
                </h2>
                <p className="leading-relaxed text-sm mt-3 font-scnd font-medium mb-5 text-gray-400">
                  Share your Sugesstiosn and thoughts for any improvement.
                  axe
                </p>
                <div className="relative  font-scnd font-medium mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative  font-scnd font-medium mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button className="text-white  font-scnd font-medium bg-gradient-to-r from-[#ff465b] to-[#f45c43] border-0 py-2 px-6 focus:outline-none  rounded text-lg">
                  Send
                </button>
              </div>
            </div>
          </form>
        </form>
      </div>
      </div>
    </>

  );
};

export default Reach;
