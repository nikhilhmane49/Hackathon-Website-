import { GlobeIcon, MailIcon, PhoneIcon } from "@heroicons/react/outline";
import React from "react";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#3498db"/>
                <path d="M20 8L28.2846 12V20L20 24L11.7154 20V12L20 8Z" fill="white"/>
                <path d="M20 24V32L11.7154 28V20L20 24Z" fill="#85c1e9"/>
                <path d="M28.2846 20V28L20 32V24L28.2846 20Z" fill="#85c1e9"/>
              </svg>
              <p className="ml-3 text-gray-600 font-medium">© {currentYear} My App. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-gray-600 hover:text-[#3498db] transition-colors duration-200 flex items-center group"
                aria-label="Website"
              >
                <GlobeIcon className="w-5 h-5" />
                <span className="ml-2 group-hover:underline">Website</span>
              </a>
              
              <a 
                href="mailto:contact@myapp.com" 
                className="text-gray-600 hover:text-[#3498db] transition-colors duration-200 flex items-center group"
                aria-label="Email"
              >
                <MailIcon className="w-5 h-5" />
                <span className="ml-2 group-hover:underline">Contact</span>
              </a>
              
              <a 
                href="#" 
                className="text-gray-600 hover:text-[#3498db] transition-colors duration-200 hidden sm:flex items-center group"
                aria-label="Help"
              >
                <PhoneIcon className="w-5 h-5" />
                <span className="ml-2 group-hover:underline">Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer