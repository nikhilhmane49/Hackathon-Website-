import React from "react";


const Setting = () => (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-[#3498db]">Settings</h1>
      <p className="text-lg text-gray-700 mb-6">Adjust your application settings here.</p>
      <div className="space-y-4">
        <div className="flex items-center">
          <input type="checkbox" id="darkMode" className="mr-3 h-5 w-5 text-[#3498db]" />
          <label htmlFor="darkMode" className="text-lg text-gray-700">Dark Mode</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="notifications" className="mr-3 h-5 w-5 text-[#3498db]" />
          <label htmlFor="notifications" className="text-lg text-gray-700">Enable Notifications</label>
        </div>
      </div>
      <button className="mt-8 bg-[#3498db] text-white px-6 py-2 rounded-md hover:bg-[#2980b9] transition-colors duration-200">
        Save Settings
      </button>
    </div>
  );

  export default Setting