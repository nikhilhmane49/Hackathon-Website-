import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeIcon, UserIcon, CogIcon, MenuIcon, XIcon, ChartBarIcon } from '@heroicons/react/outline';

// Import page components
import Home from './Home';
import Profile from './Profile';
import Settings from './Setting';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 1024);
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsOpen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  const menuItems = [
    { icon: HomeIcon, text: 'Home', id: 'home' },
    { icon: UserIcon, text: 'Profile', id: 'profile' },
    { icon: CogIcon, text: 'Settings', id: 'settings' },
  ];

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="flex flex-1 overflow-hidden">
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="fixed top-4 left-4 z-50 p-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
          >
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        )}
        <AnimatePresence>
          {(isOpen || !isMobile) && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              transition={{ duration: 0.3, type: 'tween' }}
              className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-purple-800 to-indigo-900 text-gray-100 p-4 z-40 shadow-2xl ${
                isMobile ? '' : 'relative'
              }`}
            >
              {/* <div className="flex items-center justify-center mb-10 mt-4">
                <div className="bg-white p-2 rounded-xl shadow-lg">
                  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="8" fill="url(#gradient)" />
                    <path d="M20 8L28.2846 12V20L20 24L11.7154 20V12L20 8Z" fill="white"/>
                    <path d="M20 24V32L11.7154 28V20L20 24Z" fill="#d8b4fe"/>
                    <path d="M28.2846 20V28L20 32V24L28.2846 20Z" fill="#d8b4fe"/>
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#a855f7" />
                        <stop offset="1" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold ml-3 text-white">Violet UI</h2>
              </div> */}
              
              <div className="border-b border-indigo-700 pb-6 mb-6">
                <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 p-3 rounded-lg backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-wider text-purple-300 mb-1">Welcome back</p>
                  <p className="text-white font-medium">Admin User</p>
                </div>
              </div>
              
              <nav>
                <p className="text-xs uppercase tracking-wider text-purple-300 mb-4 pl-2">Navigation</p>
                <ul className="space-y-1">
                  {menuItems.map((item, index) => (
                    <li key={index} className="mb-2">
                      <button
                        onClick={() => {
                          setCurrentPage(item.id);
                          if (isMobile) {
                            toggleSidebar();
                          }
                        }}
                        className={`flex items-center p-3 rounded-lg transition-all duration-300 w-full text-left ${
                          currentPage === item.id
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                            : 'text-gray-300 hover:bg-indigo-800/50'
                        }`}
                      >
                        <item.icon className="w-5 h-5 mr-3" />
                        <span className="text-md font-medium">{item.text}</span>
                        {item.id === 'home' && currentPage === 'home' && (
                          <span className="ml-auto flex h-2 w-2 rounded-full bg-purple-300"></span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <div className="mt-auto pt-6">
                <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 p-3 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center">
                    <ChartBarIcon className="w-8 h-8 text-purple-400" />
                    <div className="ml-3">
                      <p className="text-xs text-purple-300">System Status</p>
                      <div className="flex items-center mt-1">
                        <div className="h-2 w-full bg-indigo-900 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-400 to-indigo-400 w-3/4 rounded-full"></div>
                        </div>
                        <span className="text-xs text-purple-300 ml-2">75%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
        <main className={`flex-1 p-6 ${isMobile ? '' : ''} flex flex-col`}>
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white backdrop-blur-sm bg-opacity-80 rounded-xl shadow-xl p-6 mb-4 border border-purple-100"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>

        </main>
      </div>
    </div>
  );
};

export default SideBar;