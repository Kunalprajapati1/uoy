import React, { useEffect, useState } from 'react';
import Caraousalimages from '../data/Caraousal'; // Importing the array of images
import Reach from './Reach';

const Caraousal = () => {
  const [activeItem, setActiveItem] = useState(0);

  // Function to increment the active item
  const nextItem = () => {
    setActiveItem((prevItem) => (prevItem + 1) % Caraousalimages.length);
  };

  useEffect(() => {
    // Automatically switch to next item every 3 seconds
    const interval = setInterval(nextItem, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className=" p-20 mb-10 ">
      <h1 className="py-6 font-Foldit text-2xl text-center text-[#f45c43] ">
          | Picture Carousal
        </h1>
        <h1 className="py-2 bg-green-400 text-transparent font-Foldit text-5xl text-center bg-gradient-to-r from-[#ff465b] to-[#f45c43] bg-clip-text">
          From adversity to achievement, our success stories inspire hope and change.
        </h1>
      </div>

      {/* Carousel */}
      <div id="custom-controls-gallery" className="relative w-full h-full" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative w-full h-full overflow-hidden rounded-lg md:h-screen">
          {Caraousalimages.map((image, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${activeItem === index ? 'opacity-100' : 'opacity-0'}`}
              data-carousel-item={index === activeItem ? 'active' : ''}
            >
              <img src={image.img} 
              className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
              alt={`Carousel Image ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center pt-4">
          <button
            type="button"
            className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={() => setActiveItem((prevItem) => (prevItem === 0 ? Caraousalimages.length - 1 : prevItem - 1))}
          >
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={() => setActiveItem((prevItem) => (prevItem + 1) % Caraousalimages.length)}
          >
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
      <Reach/>
    </>
  );
};

export default Caraousal;
