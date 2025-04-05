import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HomeIcon,
  UserIcon,
  CogIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";

// Page components
import Home from "./Home";
import Profile from "./Profile";
import Settings from "./Setting";
// import HackathonInfo from "../components/HackthonInfo";

const ParticipantSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("profile");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarVariants = {
    open: { width: "16rem", transition: { duration: 0.3 } },
    closed: { width: "4rem", transition: { duration: 0.3 } },
  };

  const menuItems = [
    { icon: UserIcon, text: "Profile", id: "profile" },
    { icon: HomeIcon, text: "Home", id: "home" },
    { icon: HomeIcon, text: "Hackthon", id: "hackcard" },
    { icon: CogIcon, text: "Settings", id: "settings" },
  ];

  const renderContent = () => {
    switch (currentPage) {
      case "profile":
        return <Profile />;
      case "home":
        return <Home />;
        case "hackcard":
          return <Hackcard />;
      case "settings":
        return <Settings />;
      
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      

      {/* Content below header with top padding */}
      <div className="flex flex-1 overflow-hidden relative pt-16">
        {/* Mobile Sidebar Toggle */}
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="fixed top-4 left-4 z-50 p-2 bg-[#3498db] text-white rounded-full shadow-lg hover:bg-[#2980b9] transition duration-300"
          >
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        )}

        {/* Sidebar */}
        <motion.div
          ref={sidebarRef}
          initial="closed"
          animate={isMobile ? (isOpen ? "open" : "closed") : isOpen ? "open" : "closed"}
          variants={sidebarVariants}
          onMouseEnter={() => !isMobile && setIsOpen(true)}
          onMouseLeave={() => !isMobile && setIsOpen(false)}
          className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-gradient-to-b from-[#3498db] to-[#2c3e50] text-white z-40 shadow-lg overflow-hidden ${
            isMobile && !isOpen ? "hidden" : "flex flex-col"
          }`}
        >
          <nav className="mt-8">
            <ul>
              {menuItems.map((item, index) => {
                const isActive = currentPage === item.id;
                return (
                  <li key={index} className="mb-4 px-2">
                    <button
                      onClick={() => {
                        setCurrentPage(item.id);
                        if (isMobile) toggleSidebar();
                      }}
                      className={`flex items-center w-full ${
                        isOpen ? "px-4" : "justify-center"
                      } py-3 rounded-lg transition duration-300 font-medium text-lg ${
                        isActive
                          ? "bg-white text-[#3498db] shadow-md transform scale-105"
                          : "hover:bg-[#ffffff1a] text-white"
                      }`}
                    >
                      <item.icon
                        className={`w-6 h-6 ${
                          isActive ? "text-[#3498db]" : "text-white"
                        }`}
                      />
                      {isOpen && (
                        <span
                          className={`ml-4 ${
                            isActive ? "font-semibold" : "font-medium"
                          }`}
                        >
                          {item.text}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </motion.div>

        {/* Main content */}
        <main
          className={`flex-1 p-6 overflow-auto bg-gray-50 transition-all duration-300 ${
            !isMobile ? (isOpen ? "ml-64" : "ml-16") : ""
          }`}
        >
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
