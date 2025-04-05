import React from 'react';
import hack1 from '../assets/hack1.jpg';
import hack2 from '../assets/hack2.jpg';

const testimonialsData = [
  {
    name: 'Anika Sharma',
    image: hack1,
    quote:
      'This platform made it super easy to join and collaborate with teammates. The whole hackathon experience was smooth and professional!',
  },
  {
    name: 'Rahul Verma',
    image: hack2,
    quote:
      'I loved how intuitive everything was—from signup to project submission. Will definitely participate again!',
  },
  {
    name: 'Priya Singh',
    image: hack1,
    quote:
      'Such a well-organized hackathon! The community and mentor support were top-notch. Kudos to the team!',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-12 lg:px-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our <span className="text-[#2176FF]">Participants</span> Say About Us
        </h2>
        <div className="flex justify-center mt-4 space-x-2">
          <span className="w-3 h-3 bg-[#2176FF] rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`relative bg-white p-6 pt-14 w-[280px] md:w-[320px] rounded-[2rem] shadow-lg transition-transform duration-300 transform ${
              index === 1 ? 'scale-105 z-10 rotate-[2deg]' : 'scale-95 rotate-[-2deg]'
            }`}
          >
            {/* Color border background */}
            <div
              className={`absolute top-2 left-2 w-full h-full rounded-[2rem] z-[-1] ${
                index === 1 ? 'bg-[#72a8ff]' : 'bg-[#b6cfff]'
              }`}
              style={{
                transform: 'rotate(4deg)',
              }}
            />

            {/* Image */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
              />
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="font-semibold text-base text-gray-900">{testimonial.name}</h3>
              <div className="text-[#2176FF] text-2xl mt-2">“</div>
              <p className="text-black text-sm mt-2">{testimonial.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
