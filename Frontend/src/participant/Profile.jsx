import React from "react";

const Profile = () => (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-[#3498db]">User Profile</h1>
      <p className="text-lg text-gray-700 mb-6">Here you can view and edit your profile information.</p>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
          <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db]" />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db]" />
        </div>
      </div>
      <button className="mt-8 bg-[#3498db] text-white px-6 py-2 rounded-md hover:bg-[#2980b9] transition-colors duration-200">
        Update Profile
      </button>
    </div>
  );
  
  export default Profile