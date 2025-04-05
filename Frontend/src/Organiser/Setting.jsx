import React from "react";

const Setting = () => (
  <div>
    <h1 className="text-4xl font-bold mb-6 text-purple-700">Settings</h1>
    <p className="text-lg text-gray-700 mb-6">Adjust your application settings here.</p>
    
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Appearance</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label htmlFor="darkMode" className="text-gray-700 font-medium">Dark Mode</label>
              <p className="text-sm text-gray-500">Enable dark theme across the application</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" id="darkMode" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-600 peer-checked:to-indigo-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
            <label htmlFor="animations" className="text-gray-700 font-medium">Animations</label>
          <p className="text-sm text-gray-500">Enable UI animations and transitions</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" id="animations" className="sr-only peer" checked />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-600 peer-checked:to-indigo-600"></div>
        </label>
      </div>
      
      <div className="pt-4">
        <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-2">Color Theme</label>
        <div className="grid grid-cols-5 gap-3">
          <div className="w-full aspect-square bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg cursor-pointer ring-2 ring-offset-2 ring-purple-600"></div>
          <div className="w-full aspect-square bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg cursor-pointer"></div>
          <div className="w-full aspect-square bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg cursor-pointer"></div>
          <div className="w-full aspect-square bg-gradient-to-r from-rose-600 to-pink-600 rounded-lg cursor-pointer"></div>
          <div className="w-full aspect-square bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg cursor-pointer"></div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Notifications</h2>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <label htmlFor="emailNotifications" className="text-gray-700 font-medium">Email Notifications</label>
          <p className="text-sm text-gray-500">Receive updates and alerts via email</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" id="emailNotifications" className="sr-only peer" checked />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-600 peer-checked:to-indigo-600"></div>
        </label>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <label htmlFor="pushNotifications" className="text-gray-700 font-medium">Push Notifications</label>
          <p className="text-sm text-gray-500">Receive real-time alerts on your device</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" id="pushNotifications" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-600 peer-checked:to-indigo-600"></div>
        </label>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <label htmlFor="marketingEmails" className="text-gray-700 font-medium">Marketing Emails</label>
          <p className="text-sm text-gray-500">Receive promotional content and offers</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" id="marketingEmails" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-600 peer-checked:to-indigo-600"></div>
        </label>
      </div>
    </div>
  </div>
  
  <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Privacy & Security</h2>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <label htmlFor="twoFactor" className="text-gray-700 font-medium">Two-Factor Authentication</label>
          <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" id="twoFactor" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-600 peer-checked:to-indigo-600"></div>
        </label>
      </div>
    </div>
  </div>
</div>

<div className="flex justify-end mt-6 space-x-4">
  <button className="px-6 py-2 rounded-lg border border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors duration-200">
        Reset to Default
      </button>
      <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-colors duration-200 shadow-md">
        Save Settings
      </button>
    </div>
  </div>
);

export default Setting;