import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeIcon, UserIcon, CogIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

// Page components
import Home from './Home';
import Profile from './Profile';
import Settings from './Setting';

const ParticipantSideBar = () => {
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
    <div className="flex flex-col h-screen bg-gradient-to-tr from-gray-100 to-white">
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile Toggle Button */}
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="fixed top-4 left-4 z-50 p-2 bg-[#3498db] text-white rounded-full shadow-lg hover:bg-[#2980b9] transition duration-300"
          >
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        )}

        {/* Sidebar */}
        <AnimatePresence>
          {(isOpen || !isMobile) && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              transition={{ duration: 0.3, type: 'tween' }}
              className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#3498db] to-[#2c3e50] text-white p-6 z-40 shadow-lg ${
                isMobile ? '' : 'relative'
              }`}
            >
              <nav>
                <ul>
                  {menuItems.map((item, index) => {
                    const isActive = currentPage === item.id;
                    return (
                      <li key={index} className="mb-4">
                        <button
                          onClick={() => {
                            setCurrentPage(item.id);
                            if (isMobile) toggleSidebar();
                          }}
                          className={`flex items-center gap-4 w-full px-4 py-3 rounded-lg transition duration-300 font-medium text-lg ${
                            isActive
                              ? 'bg-white text-[#3498db] shadow-md transform scale-105'
                              : 'hover:bg-[#ffffff1a] text-white'
                          }`}
                        >
                          <item.icon className={`w-6 h-6 ${isActive ? 'text-[#3498db]' : 'text-white'}`} />
                          <span className={`${isActive ? 'font-semibold' : 'font-medium'}`}>{item.text}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto bg-gray-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default ParticipantSideBar;
