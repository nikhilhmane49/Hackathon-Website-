// Home.js
import React from 'react';

const Home = () => (
  <div className="bg-white rounded-lg shadow-md p-8">
    <h1 className="text-4xl font-bold mb-6 text-indigo-700">Welcome Home</h1>
    <p className="text-lg text-gray-700 mb-6">This is the home page of our application.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-indigo-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Quick Stats</h2>
        <p className="text-gray-700">Your activity summary and important metrics.</p>
      </div>
      <div className="bg-indigo-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Recent Activity</h2>
        <p className="text-gray-700">See your latest actions and updates.</p>
      </div>
    </div>
  </div>
);

export default Home;