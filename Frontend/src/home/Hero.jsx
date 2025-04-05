import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Added import
import hack1 from '../assets/hack1.jpg';
import hack2 from '../assets/hack2.jpg';

const Hero = () => {
  const navigate = useNavigate(); // <-- Hook for navigation

  return (
    <>
      <section className="relative overflow-hidden pb-20 bg-[#b8d6f7] mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 relative z-10">
          {/* Navigation
          <nav className="flex justify-between items-center">
            <div className="text-3xl font-bold text-[#2176FF]">
              Book<span className="text-black">Me</span>
            </div>
            
          </nav> */}

          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row items-center mt-16 lg:mt-20">
            {/* Left Side */}
            <div className="lg:w-1/2 text-center lg:text-left pr-8 ml-[100px] mt-[-80px]">
              <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
                Fuel Innovation.<br />
                <span className="text-[#2176FF]">Host Limitless</span><br />
                Hackathons.
              </h1>
              <p className="mt-6 text-gray-600">
                Launch your own custom hackathons in minutes. <br />
                Whether you're running a campus challenge or a global tech sprint, our platform scales with your vision.
              </p>
              <button className="mt-8 bg-[#2176FF] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center lg:justify-start mx-auto lg:mx-0 shadow-md hover:bg-[#571ad0] transition">
                Start Your Search
              </button>
            </div>

            {/* Right Side */}
            <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center">
              <div className="relative">
                {/* Badge */}
                <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/4 z-20 bg-white shadow-md rounded-full px-3 py-2 flex items-center text-xs font-medium">
                  <span className='pr-1 text-lg'>🥳</span> Best Experience
                </div>

                {/* Images */}
                <div className="flex items-end mt-[-50px] mb-[100px]">
                  <div className="w-64 h-96 rounded-full overflow-hidden shadow-lg border-4 border-white z-10">
                    <img src={hack1} alt="Hackathon 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-56 h-80 rounded-full overflow-hidden shadow-lg border-4 border-white ml-[-40px] z-0 mt-8">
                    <img src={hack2} alt="Hackathon 2" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full h-24 z-0 ">
          <svg viewBox="0 0 500 60" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
            <path
              d="M0,30 C150,90 350,-30 500,30 L500,60 L0,60 Z"
              style={{ stroke: 'none', fill: 'white' }}
            ></path>
            <path
              d="M0,35 C150,95 350,-25 500,35"
              style={{ strokeWidth: '2.5', stroke: '#D1D5DB', fill: 'none' }}
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
