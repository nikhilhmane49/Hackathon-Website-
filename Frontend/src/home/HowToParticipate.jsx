import React from 'react';
import hack1 from '../assets/hack1.jpg';
import hack2 from '../assets/hack2.jpg';
import hack3 from '../assets/hack1.jpg';
import hack4 from '../assets/hack2.jpg';

const HowToParticipate = () => {
  const steps = [
    {
      image: hack1,
      title: 'Sign Up & Explore',
      description: 'Create your profile and browse ongoing and upcoming hackathons.',
    },
    {
      image: hack2,
      title: 'Join a Hackathon',
      description: 'Register for a hackathon that excites you and suits your skills.',
    },
    {
      image: hack3,
      title: 'Build & Collaborate',
      description: 'Form teams, brainstorm ideas, and work on your project together.',
    },
    {
      image: hack4,
      title: 'Participate & Win',
      description: 'Participate, present your work, and stand a chance to win!',
    },
  ];

  return (
    <section className="bg-white py-24 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">
          How to <span className="text-[#2176FF]">Participate</span>
        </h2>
        <p className="text-gray-500 mt-3 text-lg">Join the innovation journey in 4 easy steps</p>
      </div>

      <div className="relative flex justify-center items-center flex-wrap gap-14 px-10">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center text-center w-[280px]">
            {/* Connector line (SVG path) */}
            {index !== steps.length - 1 && (
              <svg
                className="absolute top-1/2 right-[-70px] z-0 hidden lg:block"
                width="140"
                height="100"
                viewBox="0 0 140 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,50 C50,0 90,100 140,50"
                  stroke="#2176FF"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            )}

            {/* Outer circle with arc and number */}
            <div className="relative w-[220px] h-[220px] rounded-full bg-white shadow-xl flex items-center justify-center">
              <img
                src={step.image}
                alt={step.title}
                className="w-28 h-28 object-contain z-10"
              />
              {/* Step number */}
              <div className="absolute top-3 left-3 bg-[#2176FF] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold z-20 text-base">
                {index + 1}
              </div>
              {/* Arc-like path */}
              <svg
                className="absolute inset-0 w-full h-full z-0"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20,100 A80,80 0 1,1 180,100"
                  stroke="#2176FF"
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Title and Description */}
            <h3 className="text-xl font-semibold mt-6 text-[#2176FF]">{step.title}</h3>
            <p className="text-base text-gray-500 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToParticipate;
