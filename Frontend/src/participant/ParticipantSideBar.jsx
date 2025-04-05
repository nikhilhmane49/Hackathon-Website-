import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeIcon, UserIcon, CogIcon, MenuIcon, XIcon } from '@heroicons/react/outline';


// Import page components
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
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-1 overflow-hidden">
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="fixed top-4 left-4 z-50 p-2 bg-[#3498db] text-white rounded-md shadow-lg hover:bg-[#2980b9] transition-colors duration-200"
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
              className={`fixed top-0 left-0 h-full w-64 bg-white text-gray-800 p-4 z-40 shadow-xl ${
                isMobile ? '' : 'relative'
              }`}
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-[#3498db]">My App</h2>
              <nav>
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index} className="mb-4">
                      <button
                        onClick={() => {
                          setCurrentPage(item.id);
                          if (isMobile) {
                            toggleSidebar();
                          }
                        }}
                        className={`flex items-center p-3 rounded-md transition-colors duration-200 w-full text-left ${
                          currentPage === item.id
                            ? 'bg-[#3498db] text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <item.icon className="w-6 h-6 mr-3" />
                        <span className="text-lg">{item.text}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
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
                className="bg-white rounded-lg shadow-xl p-6 mb-4"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* <Footer /> */}
        </main>
      </div>
    </div>
  );
};

export default ParticipantSideBar;