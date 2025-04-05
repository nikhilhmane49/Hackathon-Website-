import React from 'react';
import {
  FaUsers,        // For participant tracking
  FaWpforms,      // For custom forms
  FaUsersCog,     // For team management
  FaClock,        // For real-time updates
  FaEnvelopeOpenText, // For automated emails
  FaMoneyBillWave,    // For payment
  FaChartBar,     // For analytics
  FaTools         // For more features
} from 'react-icons/fa';

const FacilitiesSection = () => {
  const facilities = [
    { icon: <FaUsers className="text-blue-600 text-3xl mx-auto" />, title: 'Live Participant Tracking' },
    { icon: <FaWpforms className="text-blue-600 text-3xl mx-auto" />, title: 'Custom Registration Forms' },
    { icon: <FaUsersCog className="text-blue-600 text-3xl mx-auto" />, title: 'Team Management' },
    { icon: <FaClock className="text-blue-600 text-3xl mx-auto" />, title: 'Real-time Updates' },
    { icon: <FaEnvelopeOpenText className="text-blue-600 text-3xl mx-auto" />, title: 'Automated Emails' },
    { icon: <FaMoneyBillWave className="text-blue-600 text-3xl mx-auto" />, title: 'Payment Handling' },
    { icon: <FaChartBar className="text-blue-600 text-3xl mx-auto" />, title: 'Analytics & Insights' },
    { icon: <FaTools className="text-blue-600 text-3xl mx-auto" />, title: 'More Features Coming' },
  ];

  return (
    <div className=" py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section - Text */}
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-3">
              Everything You Need to <span className="text-blue-600">Organize</span>
              <br />Your Hackathon
            </h2>
            <p className="text-gray-700 mb-8">
              From participant registration to team formation and real-time event updates—our platform handles it all,
              so you can focus on creating an unforgettable hackathon experience.
            </p>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
              Start Organizing
            </button>
          </div>

          {/* Right Section - Facilities Grid */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
                  <div className="mb-4">
                    {facility.icon}
                  </div>
                  <p className="text-center text-sm font-medium text-gray-800">{facility.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesSection;
