import React from 'react';

const Home = () => (
  <div>
    <h1 className="text-4xl font-bold mb-6 text-purple-700">Welcome Back</h1>
    <p className="text-lg text-gray-700 mb-6">Here's an overview of your dashboard and recent activity.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-xl text-white shadow-lg">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-purple-200 text-sm font-medium">Total Users</p>
            <h3 className="text-3xl font-bold mt-1">8,249</h3>
            <p className="text-purple-200 text-sm mt-2 flex items-center">
              <span className="inline-block mr-1">↑</span> 12.5% from last month
            </p>
          </div>
          <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-sm font-medium">Revenue</p>
            <h3 className="text-3xl font-bold mt-1 text-gray-800">$24,780</h3>
            <p className="text-green-600 text-sm mt-2 flex items-center">
              <span className="inline-block mr-1">↑</span> 8.3% from last month
            </p>
          </div>
          <div className="bg-purple-100 p-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-sm font-medium">Tasks Completed</p>
            <h3 className="text-3xl font-bold mt-1 text-gray-800">64%</h3>
            <p className="text-orange-500 text-sm mt-2 flex items-center">
              <span className="inline-block mr-1">↓</span> 5.2% from last week
            </p>
          </div>
          <div className="bg-purple-100 p-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
          <button className="text-sm text-purple-600 font-medium hover:text-purple-800">View All</button>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-3 hover:bg-purple-50 rounded-lg transition-colors">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-gray-800 font-medium">New user registration</p>
              <p className="text-gray-500 text-sm">John Smith created a new account</p>
            </div>
            <p className="text-xs text-gray-400">2 hours ago</p>
    </div>
    
    <div className="flex items-start gap-4 p-3 hover:bg-purple-50 rounded-lg transition-colors">
      <div className="bg-purple-100 p-2 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-gray-800 font-medium">Payment Received</p>
        <p className="text-gray-500 text-sm">$2,500 payment from Client XYZ</p>
      </div>
      <p className="text-xs text-gray-400">Yesterday</p>
    </div>
    
    <div className="flex items-start gap-4 p-3 hover:bg-purple-50 rounded-lg transition-colors">
      <div className="bg-green-100 p-2 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-gray-800 font-medium">Project Completed</p>
        <p className="text-gray-500 text-sm">Website redesign project completed</p>
      </div>
      <p className="text-xs text-gray-400">2 days ago</p>
    </div>
    
    <div className="flex items-start gap-4 p-3 hover:bg-purple-50 rounded-lg transition-colors">
      <div className="bg-blue-100 p-2 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-gray-800 font-medium">New Comment</p>
        <p className="text-gray-500 text-sm">Emma left a comment on your post</p>
      </div>
      <p className="text-xs text-gray-400">3 days ago</p>
    </div>
  </div>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-semibold text-gray-800">Upcoming Tasks</h2>
    <button className="text-sm text-purple-600 font-medium hover:text-purple-800">View All</button>
  </div>
  
  <div className="space-y-4">
    <div className="p-4 border border-purple-100 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-800">Complete Project Proposal</h3>
          <p className="text-gray-500 text-sm mt-1">Client meeting on Thursday</p>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          High Priority
        </span>
      </div>
      <div className="mt-3 flex justify-between items-center">
        <p className="text-sm text-gray-500">Due in 2 days</p>
        <div className="flex -space-x-2">
          <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white text-xs">A</div>
          <div className="w-6 h-6 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-white text-xs">B</div>
        </div>
      </div>
    </div>
    
    <div className="p-4 border border-purple-100 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-800">Review Design Mockups</h3>
          <p className="text-gray-500 text-sm mt-1">Feedback needed for homepage design</p>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          Medium Priority
        </span>
      </div>
      <div className="mt-3 flex justify-between items-center">
        <p className="text-sm text-gray-500">Due tomorrow</p>
        <div className="flex -space-x-2">
          <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-xs">C</div>
        </div>
      </div>
    </div>
    
    <div className="p-4 border border-purple-100 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-800">Update Documentation</h3>
          <p className="text-gray-500 text-sm mt-1">API documentation needs updating</p>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Low Priority
              </span>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <p className="text-sm text-gray-500">Due in 5 days</p>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white text-xs">A</div>
                <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-xs">D</div>
                <div className="w-6 h-6 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-white text-xs">B</div>
              </div>
            </div>
          </div>
        </div>
        
        <button className="mt-6 w-full py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors duration-200 font-medium flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Create New Task
        </button>
      </div>
    </div>
    
    <div className="mt-8 bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-gray-800">Need help getting started?</h2>
          <p className="text-gray-600 mt-1">Check out our comprehensive documentation and tutorials</p>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-white text-purple-600 rounded-lg shadow-sm border border-purple-200 hover:bg-purple-50 transition-colors duration-200">
            View Tutorials
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors duration-200 shadow-md">
            Read Docs
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Home;