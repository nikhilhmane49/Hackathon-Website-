import React from "react";

const Profile = () => (
  <div>
    <h1 className="text-4xl font-bold mb-6 text-purple-700">User Profile</h1>
    <p className="text-lg text-gray-700 mb-6">Here you can view and edit your profile information.</p>
    
    <div className="bg-purple-50 p-6 rounded-xl mb-8 border border-purple-100">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            AU
          </div>
          <div className="absolute bottom-0 right-0 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Admin User</h3>
          <p className="text-gray-500">Administrator</p>
          <div className="flex items-center mt-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mr-2">
              Pro Plan
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              Verified
            </span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Account Preferences</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">Language</label>
            <select 
              id="language" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
          <div>
            <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <select 
              id="timezone" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option>UTC-8 (Pacific Time)</option>
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC+0 (Greenwich Mean Time)</option>
              <option>UTC+1 (Central European Time)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    
    <div className="flex justify-end mt-6 space-x-4">
      <button className="px-6 py-2 rounded-lg border border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors duration-200">
        Cancel
      </button>
      <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-colors duration-200 shadow-md">
        Save Changes
      </button>
    </div>
  </div>
);

export default Profile;