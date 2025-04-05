import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeIcon, UserIcon, CogIcon, MenuIcon, XIcon, ChartBarIcon } from '@heroicons/react/outline';

import Home from './Home';
import Profile from './Profile';
import Settings from './Setting';
 // Make sure you import Header

const OrganiserSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarVariants = {
    open: { width: "16rem", x: 0, transition: { duration: 0.3 } },
    closed: { width: "5rem", x: 0, transition: { duration: 0.3 } },
    mobileClosed: { x: '-100%', transition: { duration: 0.3 } }
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
    <div className="flex flex-col h-screen overflow-hidden">

      <div className="flex flex-1 overflow-hidden relative" style={{ paddingTop: '4rem' }}>
        {/* Sidebar toggle for mobile */}
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="fixed top-4 left-4 z-50 p-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
          >
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        )}

        {/* Sidebar */}
        <motion.div
          ref={sidebarRef}
          initial={isMobile ? "mobileClosed" : "closed"}
          animate={isMobile ? (isOpen ? "open" : "mobileClosed") : (isOpen ? "open" : "closed")}
          variants={sidebarVariants}
          onMouseEnter={() => !isMobile && setIsOpen(true)}
          onMouseLeave={() => !isMobile && setIsOpen(false)}
          className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-gradient-to-b from-purple-800 to-indigo-900 text-gray-100 p-4 z-40 shadow-2xl overflow-hidden`}
        >
          {/* Sidebar Content (same as before) */}
          <div className="border-b border-indigo-700 pb-6 mb-6">
            <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 p-3 rounded-lg backdrop-blur-sm">
              <p className={`text-xs uppercase tracking-wider text-purple-300 mb-1 ${!isOpen && !isMobile ? 'hidden' : ''}`}>Welcome back</p>
              <p className={`text-white font-medium ${!isOpen && !isMobile ? 'hidden' : ''}`}>Admin User</p>
              {!isOpen && !isMobile && (
                <div className="flex justify-center">
                  <UserIcon className="w-8 h-8 text-white" />
                </div>
              )}
            </div>
          </div>

          <nav>
            <p className={`text-xs uppercase tracking-wider text-purple-300 mb-4 pl-2 ${!isOpen && !isMobile ? 'hidden' : ''}`}>Navigation</p>
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={index} className="mb-2">
                  <button
                    onClick={() => {
                      setCurrentPage(item.id);
                      if (isMobile) toggleSidebar();
                    }}
                    className={`flex ${!isOpen && !isMobile ? 'justify-center' : 'items-center'} p-3 rounded-lg transition-all duration-300 w-full text-left ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-indigo-800/50'
                    }`}
                  >
                    <item.icon className={`${!isOpen && !isMobile ? 'w-7 h-7' : 'w-5 h-5 mr-3'}`} />
                    {(isOpen || isMobile) && <span className="text-md font-medium">{item.text}</span>}
                    {item.id === 'home' && currentPage === 'home' && (isOpen || isMobile) && (
                      <span className="ml-auto flex h-2 w-2 rounded-full bg-purple-300"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className={`mt-auto pt-6 ${!isOpen && !isMobile ? 'hidden' : ''}`}>
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

        {/* Main Content Area */}
        <main
          className={`flex-1 p-6 transition-all duration-300 flex flex-col overflow-y-auto ${
            isMobile ? '' : !isOpen ? 'ml-20' : 'ml-64'
          }`}
        >
          <div className="flex-1 min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white backdrop-blur-sm bg-opacity-80 rounded-xl shadow-xl p-6 mb-4 border border-purple-100 h-full overflow-y-auto"
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

export default OrganiserSideBar;
