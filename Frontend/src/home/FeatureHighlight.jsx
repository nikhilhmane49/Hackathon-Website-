import React from 'react';

const FeatureHighlight = () => {
  return (
    <>

    {/* Descriptive Feature Section */}
    <section>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-16 gap-8">
          <div className="relative w-64 h-64">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-indigo-700 rounded-full"
              style={{ clipPath: "polygon(50% 0%, 61% 10%, 75% 5%, 80% 15%, 93% 20%, 90% 35%, 100% 50%, 90% 65%, 93% 80%, 80% 85%, 75% 95%, 61% 90%, 50% 100%, 39% 90%, 25% 95%, 20% 85%, 7% 80%, 10% 65%, 0% 50%, 10% 35%, 7% 20%, 20% 15%, 25% 5%, 39% 10%)" }}></div>
            <div className="absolute top-8 left-8 w-12 h-12 bg-green-400 rounded-full"></div>
            <div className="absolute top-1/4 right-8 w-16 h-16 bg-yellow-300 rounded-tl-full"
              style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}></div>
            <div className="absolute bottom-8 left-1/4 w-20 h-20 bg-blue-300 rounded-tr-full"
              style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}></div>
            <div className="absolute bottom-8 right-8 w-20 h-16 bg-green-400 rounded-full"
              style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}></div>
          </div>

          <div className="md:max-w-lg space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full">
                <span className="font-semibold">2</span>
              </div>
              <div className="w-24 h-8 bg-yellow-50 rounded-full"></div>
              <div className="w-10 h-10 bg-orange-300 rounded-full"></div>
            </div>

            <h2 className="text-4xl font-bold text-gray-800">
              Streamlined Registration & Event Tools
            </h2>

            <p className="text-gray-600 text-lg">
              Manage your hackathon end-to-end—from event creation to registration, real-time tracking, and team management. It's all in one place.
            </p>

            <button className="bg-blue-50 text-blue-600 hover:bg-blue-100 transition px-6 py-3 rounded-md font-medium">
              Create Your Hackathon
            </button>
          </div>
        </div>
      </section>    



      {/* Simulated Browser Section */}
      <section className="bg-[#b8d6f7] py-20 flex justify-center items-center rounded-2xl w-[1000px] ml-64">
        <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-blue-300 rounded-tl-[100px] -z-10"></div>

        <div className="bg-white rounded-2xl shadow-xl w-[900px] overflow-hidden relative">
          <div className="bg-gray-100 py-2 px-4 flex items-center space-x-2 rounded-t-2xl">
            <span className="w-3 h-3 bg-red-400 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
          </div>

          <div className="relative p-8 bg-[#edf3fc]">
            <div className="h-4 bg-[#2176FF] w-40 rounded-full mb-4"></div>
            <div className="bg-white rounded-lg p-4 mb-6">
              <div className="h-3 bg-[#b8d6f7] w-3/4 rounded mb-2"></div>
              <div className="h-3 bg-[#b8d6f7] w-2/3 rounded"></div>
            </div>

            <div className="bg-white rounded-lg p-4 grid grid-cols-2 gap-4">
              <div>
                <div className="h-3 bg-[#b8d6f7] w-1/2 rounded mb-2"></div>
                <div className="h-3 bg-[#b8d6f7] w-full rounded mb-2"></div>
                <div className="h-3 bg-[#b8d6f7] w-full rounded mb-2"></div>
                <div className="h-3 bg-[#b8d6f7] w-full rounded"></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 ml-64">
                  <div className="w-6 h-6 bg-[#b8d6f7] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#b8d6f7] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#b8d6f7] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Tooltips for Hackathon Platform */}
            <div className="absolute -top-10 left-8 bg-[#3734b8] text-white text-sm px-5 py-3 rounded-lg shadow-md font-mono mt-4">
              Create your hackathon event easily.
              <div className="absolute top-full left-6 w-3 h-3 bg-[#3734b8] rotate-45 -mt-1"></div>
            </div>

            <div className="absolute top-6 right-12 bg-[#3734b8] text-white text-sm px-4 py-2 rounded-lg shadow-md font-mono">
              Track registrations live.
              <div className="absolute top-full left-6 w-3 h-3 bg-[#3734b8] rotate-45 -mt-1"></div>
            </div>

            <div className="absolute bottom-6 right-8 bg-[#3734b8] text-white text-sm px-4 py-2 rounded-lg shadow-md font-mono">
              Manage teams & communication.
              <div className="absolute top-full left-6 w-3 h-3 bg-[#3734b8] rotate-45 -mt-12 ml-24"></div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default FeatureHighlight;
