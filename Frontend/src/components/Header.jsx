// Header.js
import React from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/outline';
import { useNavigate } from "react-router-dom"

const Header = () => {

  const navigate = useNavigate();
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#3498db" />
              <path d="M20 8L28.2846 12V20L20 24L11.7154 20V12L20 8Z" fill="white" />
              <path d="M20 24V32L11.7154 28V20L20 24Z" fill="#85c1e9" />
              <path d="M28.2846 20V28L20 32V24L28.2846 20Z" fill="#85c1e9" />
            </svg>
            <h1 className="ml-3 text-2xl font-bold text-[#3498db] cursor-pointer" onClick={() => navigate("/")}>HackthonX</h1>
          </div>
          <div className="flex space-x-4 items-center">
            <button className="text-base font-medium text-gray-700 hover:text-[#2176FF] px-4 py-2">
              Organize a Hackthon
            </button>
            <button
              className="text-base font-medium text-gray-700 border border-gray-400 rounded-md px-5 py-2.5 hover:bg-gray-100"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;