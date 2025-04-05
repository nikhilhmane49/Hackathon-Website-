import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import hack1 from '../assets/hack1.jpg';
import hack2 from '../assets/hack2.jpg';

const hackathons = [
  {
    title: 'AI for Healthcare',
    description: 'Tackle real-world health problems with AI.',
    image: hack1,
    startDate: 'Starts Apr 20, 2025',
  },
  {
    title: 'Green Tech Sprint',
    description: 'Innovate for a sustainable future.',
    image: hack2,
    startDate: 'Starts May 5, 2025',
  },
  {
    title: 'Green Tech Sprint',
    description: 'Innovate for a sustainable future.',
    image: hack2,
    startDate: 'Starts May 5, 2025',
  },
  {
    title: 'Green Tech Sprint',
    description: 'Innovate for a sustainable future.',
    image: hack2,
    startDate: 'Starts May 5, 2025',
  },
];

const HackathonCarousel = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto px-4 text-center max-w-[1200px]">
        <h2 className="text-3xl font-bold mb-2">🔥 Ongoing Hackathons</h2>
        <p className="text-gray-500 mb-8">Discover and join hackathons around the globe</p>

        <div className="relative">
          <Swiper
            slidesPerView={2}
            spaceBetween={0}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            modules={[Pagination, Navigation]}
          >
            {hackathons.map((hack, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#b8d6f7] rounded-2xl shadow-md overflow-hidden p-6 flex flex-col items-center w-[450px] mx-auto">
                  <img src={hack.image} alt={hack.title} className="rounded-xl w-60 h-40 object-cover mb-4" />
                  <h3 className="text-xl font-semibold">{hack.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{hack.description}</p>
                  <span className="mt-4 bg-[#2176FF] text-white text-sm px-4 py-2 rounded-full">
                    {hack.startDate}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Tailwind-based Arrows */}
          <div className="custom-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer">
            <button className="bg-white text-black hover:text-[#2176FF] active:text-[#2176FF] w-10 h-10 rounded-full shadow flex items-center justify-center">
              <span className="text-lg font-bold">&lt;</span>
            </button>
          </div>
          <div className="custom-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer">
            <button className="bg-white text-black hover:text-[#2176FF] active:text-[#2176FF] w-10 h-10 rounded-full shadow flex items-center justify-center">
              <span className="text-lg font-bold">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonCarousel;
