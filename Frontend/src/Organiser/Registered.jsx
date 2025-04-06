import { useState, useEffect } from 'react';
import { FaBookmark, FaPlus, FaSearch, FaSort, FaStar, FaEllipsisV } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { IoMdDocument } from 'react-icons/io';
import { RiFileDownloadLine } from 'react-icons/ri';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
 import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

function ParticipantList() {
  const [activeTab, setActiveTab] = useState('in-progress');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [showTooltip, setShowTooltip] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [participants, setParticipants] = useState([
    {
      id: 1,
      teamName: 'Ding_ding',
      playerCount: 2,
      leadName: 'Aneesh Kulkarni',
      college: 'RV University, Bangalore',
      status: 'Not Submitted',
      score: '--',
      bookmarked: false,
      avatarColor: 'bg-gradient-to-r from-red-500 to-pink-500',
      lastActive: '2 hours ago'
    },
    {
      id: 2,
      teamName: 'Tech Titans',
      playerCount: 4,
      leadName: 'Deepika Bunga',
      college: 'Shri Vishnu Engineering College',
      status: 'Not Submitted',
      score: '--',
      bookmarked: false,
      avatarColor: 'bg-gradient-to-r from-blue-500 to-purple-500',
      lastActive: '5 hours ago'
    },
    {
      id: 3,
      teamName: 'Tech-Runs',
      playerCount: 3,
      leadName: 'Prasanthkumar Bhumula',
      college: 'Gayatri Vidya Parishad College',
      status: 'Submitted',
      submissionTime: '22 Mar 23, 10:45 PM IST',
      score: '--',
      bookmarked: true,
      avatarColor: 'bg-gradient-to-r from-green-500 to-teal-500',
      lastActive: '1 day ago'
    },
    {
      id: 4,
      teamName: 'EcoChampions',
      playerCount: 2,
      leadName: 'Ritika Rathour',
      college: 'National Institute of Securities',
      status: 'Not Submitted',
      score: '--',
      bookmarked: false,
      avatarColor: 'bg-gradient-to-r from-gray-500 to-blue-gray-500',
      lastActive: '3 days ago'
    },
    {
      id: 5,
      teamName: 'Venture Vaults',
      playerCount: 2,
      leadName: 'Manas Singh',
      college: 'Delhi Technical University',
      status: 'Not Submitted',
      score: '--',
      bookmarked: false,
      avatarColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
      lastActive: 'Just now'
    }
  ]);

  // Loading animation
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  const toggleSelectAll = () => {
    if (selectedParticipants.length === participants.length) {
      setSelectedParticipants([]);
    } else {
      setSelectedParticipants(participants.map(p => p.id));
    }
  };

  const toggleSelect = (id) => {
    if (selectedParticipants.includes(id)) {
      setSelectedParticipants(selectedParticipants.filter(p => p !== id));
    } else {
      setSelectedParticipants([...selectedParticipants, id]);
    }
  };

  const toggleBookmark = (id) => {
    setParticipants(participants.map(p => 
      p.id === id ? {...p, bookmarked: !p.bookmarked} : p
    ));
  };

  const filteredParticipants = participants.filter(p => 
    p.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.leadName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.college.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'}`}>
      <div className="max-w-7xl mx-auto bg-opacity-90 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-opacity-20 transition-all duration-300"
           style={{ borderColor: isDarkMode ? '#374151' : '#e5e7eb' }}>
        
        {/* Header with Dark Mode Toggle */}
        <div className="px-6 py-4 flex justify-between items-center border-b" 
             style={{ borderColor: isDarkMode ? '#374151' : '#e5e7eb' }}>
          <h2 className="text-xl font-bold">Participants Dashboard</h2>
          <div className="flex items-center space-x-3">
            <span className="text-sm">{isDarkMode ? 'Dark' : 'Light'} Mode</span>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 p-1 ${isDarkMode ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'}`}
            >
              <motion.div 
                layout
                className={`w-4 h-4 rounded-full ${isDarkMode ? 'bg-white' : 'bg-white shadow-md'}`} 
              />
            </button>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="border-b transition-colors duration-300" 
             style={{ borderColor: isDarkMode ? '#374151' : '#e5e7eb' }}>
          <div className="flex justify-between items-center px-4 py-2">
            <div className="flex">
              <button 
                className={`px-4 py-2 font-medium transition-all duration-200 relative ${
                  activeTab === 'all' 
                    ? (isDarkMode ? 'text-blue-400' : 'text-blue-600') 
                    : (isDarkMode ? 'text-gray-400' : 'text-gray-500')
                }`}
                onClick={() => setActiveTab('all')}
              >
                All
                {activeTab === 'all' && (
                  <motion.div 
                    layoutId="activeTab"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
              <button 
                className={`px-4 py-2 font-medium transition-all duration-200 relative ${
                  activeTab === 'in-progress' 
                    ? (isDarkMode ? 'text-blue-400' : 'text-blue-600') 
                    : (isDarkMode ? 'text-gray-400' : 'text-gray-500')
                }`}
                onClick={() => setActiveTab('in-progress')}
              >
                In Progress (77)
                {activeTab === 'in-progress' && (
                  <motion.div 
                    layoutId="activeTab"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
              <button 
                className={`px-4 py-2 font-medium transition-all duration-200 relative ${
                  activeTab === 'shortlisted' 
                    ? (isDarkMode ? 'text-blue-400' : 'text-blue-600') 
                    : (isDarkMode ? 'text-gray-400' : 'text-gray-500')
                }`}
                onClick={() => setActiveTab('shortlisted')}
              >
                Shortlisted
                {activeTab === 'shortlisted' && (
                  <motion.div 
                    layoutId="activeTab"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
              <button 
                className={`px-4 py-2 font-medium transition-all duration-200 relative ${
                  activeTab === 'rejected' 
                    ? (isDarkMode ? 'text-blue-400' : 'text-blue-600') 
                    : (isDarkMode ? 'text-gray-400' : 'text-gray-500')
                }`}
                onClick={() => setActiveTab('rejected')}
              >
                Rejected
                {activeTab === 'rejected' && (
                  <motion.div 
                    layoutId="activeTab"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            </div>
            <div className="flex items-center">
              <button className={`px-3 py-1 text-sm border rounded-md flex items-center gap-1 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 border-gray-600 hover:bg-gray-700' : 'text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}>
                Credit Balance <FaSort className="ml-1" />
              </button>
              <button className={`p-2 ml-2 rounded-full transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'
              }`}>
                <FaEllipsisV className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Search and Actions */}
        <div className={`px-6 py-4 flex items-center justify-between border-b transition-colors duration-300`} 
             style={{ borderColor: isDarkMode ? '#374151' : '#e5e7eb' }}>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-600 text-gray-200 focus:ring-blue-500' 
                    : 'bg-white border-gray-300 text-gray-800 focus:ring-blue-400'
                }`}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaSearch className={isDarkMode ? 'text-gray-400' : 'text-gray-400'} />
              </div>
            </div>
            <div className="relative">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`ml-4 px-3 py-2 border rounded-lg text-sm flex items-center gap-1 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-600 text-gray-200 hover:bg-gray-700' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter
              </button>
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute left-4 mt-2 w-64 rounded-lg shadow-xl z-10 ${
                      isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                    }`}
                  >
                    <div className="p-4">
                      <h3 className={`font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Filter Participants</h3>
                      <div className="space-y-2">
                        <div>
                          <label className={`block text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Status</label>
                          <select className={`mt-1 w-full rounded-md border px-2 py-1 text-sm transition-colors duration-300 ${
                            isDarkMode 
                              ? 'bg-gray-700 border-gray-600 text-gray-200' 
                              : 'bg-white border-gray-300 text-gray-800'
                          }`}>
                            <option>All</option>
                            <option>Submitted</option>
                            <option>Not Submitted</option>
                          </select>
                        </div>
                        <div>
                          <label className={`block text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Round</label>
                          <select className={`mt-1 w-full rounded-md border px-2 py-1 text-sm transition-colors duration-300 ${
                            isDarkMode 
                              ? 'bg-gray-700 border-gray-600 text-gray-200' 
                              : 'bg-white border-gray-300 text-gray-800'
                          }`}>
                            <option>All Rounds</option>
                            <option>R1</option>
                            <option>R2</option>
                          </select>
                        </div>
                        <div>
                          <button className={`mt-3 w-full rounded-md py-1.5 text-sm font-medium transition-colors duration-300 ${
                            isDarkMode 
                              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                              : 'bg-blue-600 hover:bg-blue-700 text-white'
                          }`}>
                            Apply Filters
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full transition-colors duration-300 relative ${
                isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
              }`}
              onMouseEnter={() => setShowTooltip('email')}
              onMouseLeave={() => setShowTooltip(null)}
            >
              <HiOutlineMail className="h-5 w-5" />
              {showTooltip === 'email' && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded bg-black text-white whitespace-nowrap">
                  Send Email
                </div>
              )}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full transition-colors duration-300 relative ${
                isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
              }`}
              onMouseEnter={() => setShowTooltip('certificate')}
              onMouseLeave={() => setShowTooltip(null)}
            >
              <IoMdDocument className="h-5 w-5" />
              {showTooltip === 'certificate' && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded bg-black text-white whitespace-nowrap">
                  Certificate
                </div>
              )}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full transition-colors duration-300 relative ${
                isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
              }`}
              onMouseEnter={() => setShowTooltip('submissions')}
              onMouseLeave={() => setShowTooltip(null)}
            >
              <RiFileDownloadLine className="h-5 w-5" />
              {showTooltip === 'submissions' && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded bg-black text-white whitespace-nowrap">
                  Submissions
                </div>
              )}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full transition-colors duration-300 relative ${
                isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
              }`}
              onMouseEnter={() => setShowTooltip('evaluate')}
              onMouseLeave={() => setShowTooltip(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {showTooltip === 'evaluate' && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded bg-black text-white whitespace-nowrap">
                  Evaluate
                </div>
              )}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full transition-colors duration-300 relative ${
                isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
              }`}
              onMouseEnter={() => setShowTooltip('declare')}
              onMouseLeave={() => setShowTooltip(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              {showTooltip === 'declare' && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded bg-black text-white whitespace-nowrap">
                  Declare Result
                </div>
              )}
            </motion.button>
          </div>
        </div>
        
        {/* Table Header */}
        <div className={`transition-colors duration-300 ${isDarkMode ? 'bg-blue-800' : 'bg-blue-600'} text-white px-4 py-3 flex items-center`}>
          <div className="w-12 text-center">
            <input 
              type="checkbox" 
              className="h-4 w-4 rounded-sm accent-blue-400"
              checked={selectedParticipants.length === participants.length}
              onChange={toggleSelectAll}
            />
          </div>
          <div className="w-12 text-center">#</div>
          <div className="flex-1 flex items-center">
            Team/Participants
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 cursor-pointer hover:text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="w-40 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Round Panel
          </div>
          <div className="w-48 flex items-center justify-center">
            Status
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 cursor-pointer hover:text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="w-24 flex items-center justify-center">
            Score
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 cursor-pointer hover:text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="w-48 flex items-center justify-center">
            Action / Status
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 cursor-pointer hover:text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
        
        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {/* Participant Rows */}
            {filteredParticipants.length === 0 ? (
              <div className={`flex flex-col items-center justify-center py-16 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="text-lg font-medium">No participants found</p>
                <p className="text-sm mt-1">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="transition-colors duration-300">
                {filteredParticipants.map((participant, index) => (
                  <motion.div 
                    key={participant.id} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`px-4 py-3 flex items-center border-b transition-all duration-200 ${
                      selectedParticipants.includes(participant.id) 
                        ? (isDarkMode ? 'bg-gray-800' : 'bg-blue-50') 
                        : (isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50')
                    }`}
                    style={{ borderColor: isDarkMode ? '#374151' : '#e5e7eb' }}
                  >
                    <div className="w-12 text-center">
                      <input 
                        type="checkbox" 
                        className="h-4 w-4 rounded-sm accent-blue-500"
                        checked={selectedParticipants.includes(participant.id)}
                        onChange={() => toggleSelect(participant.id)}
                      />
                    </div>
                    <div className="w-12 text-center text-gray-600">{participant.id}</div>
                    <div className="flex-1 flex items-center">
                      <div className="relative mr-3">
                        <div className={`w-12 h-12 rounded-full ${participant.avatarColor} flex items-center justify-center text-white font-bold shadow-lg transition-transform duration-300 hover:scale-110`}>
                          {participant.teamName.charAt(0)}
                        </div>
                        <motion.button 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute -top-1 -right-1 bg-white rounded-full p-1 shadow-md"
                          onClick={() => toggleBookmark(participant.id)}
                        >
                          <FaBookmark className={`text-sm ${participant.bookmarked ? 'text-yellow-500' : 'text-gray-300'}`} />
                        </motion.button>
                        
                        {/* Online Status Indicator */}
                        {participant.lastActive === 'Just now' && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h3 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                            {participant.teamName}
                          </h3>
                          <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
                            {participant.playerCount} Players
                          </span>
                        </div>
                        <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{participant.leadName}</div>
                        <div className="flex items-center">
                          <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{participant.college}</div>
                          <div className={`ml-2 text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>• Active {participant.lastActive}</div>
                        </div>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className={`ml-auto rounded-full p-1 ${isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-200 text-gray-500'}`}
                      >
                        <FaPlus className="text-sm" />
                      </motion.button>
                    </div>
                    <div className="w-40 flex items-center justify-center">
                      {/* Could have round panel content here */}
                      <div className={`h-0.5 w-10 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                    </div>
                    <div className="w-48 text-center">
                      <div className={`text-sm inline-flex items-center px-2.5 py-0.5 rounded-full ${
                        participant.status === 'Submitted' 
                          ? (isDarkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800')
                          : (isDarkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-800')
                      }`}>
                        {participant.status === 'Submitted' ? (
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                        ) : (
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                          </svg>
                        )}
                        {participant.status}
                      </div>
                      {participant.submissionTime && (
                        <div className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{participant.submissionTime}</div>
                      )}
                    </div>
                    <div className="w-24 text-center">
                      <span className={`font-mono ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{participant.score}</span>
                    </div>
                    <div className="w-48 flex justify-center">
                      <div className="flex flex-col items-center">
                        <div className="flex space-x-2 mb-2">
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-1.5 rounded-md shadow-sm ${
                              isDarkMode 
                                ? 'bg-green-900 text-green-300 hover:bg-green-800' 
                                : 'bg-green-50 text-green-600 border border-green-200 hover:bg-green-100'
                            }`}
                          >
                            <BsCheckCircleFill className="h-4 w-4" />
                          </motion.button>
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-1.5 rounded-md shadow-sm ${
                              isDarkMode 
                                ? 'bg-red-900 text-red-300 hover:bg-red-800' 
                                : 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100'
                            }`}
                          >
                            <BsXCircleFill className="h-4 w-4" />
                          </motion.button>
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-1.5 rounded-md shadow-sm ${
                              isDarkMode 
                                ? 'bg-blue-900 text-blue-300 hover:bg-blue-800' 
                                : 'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100'
                            }`}
                          >
                            <RiFileDownloadLine className="h-4 w-4" />
                          </motion.button>
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-1.5 rounded-md shadow-sm ${
                              isDarkMode 
                                ? 'bg-blue-900 text-blue-300 hover:bg-blue-800' 
                                : 'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100'
                            }`}
                          >
                            <HiOutlineMail className="h-4 w-4" />
                          </motion.button>
                        </div>
                        <div className="flex items-center text-xs">
                          <span className={`font-medium ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`}>R1</span>
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: 20 }}
                            transition={{ duration: 0.5 }}
                            className={`h-px mx-1 ${isDarkMode ? 'bg-orange-500' : 'bg-orange-400'}`}
                          />
                          <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <span className={`font-medium ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`}>R2</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            <div className={`px-4 py-3 flex items-center justify-between border-t ${isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
              <div className={`flex-1 flex justify-between sm:hidden ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <button className={`px-4 py-2 border rounded-md text-sm font-medium ${
                  isDarkMode 
                    ? 'border-gray-700 bg-gray-800 hover:bg-gray-700' 
                    : 'border-gray-300 bg-white hover:bg-gray-50'
                }`}>
                  Previous
                </button>
                <button className={`ml-3 px-4 py-2 border rounded-md text-sm font-medium ${
                  isDarkMode 
                    ? 'border-gray-700 bg-gray-800 hover:bg-gray-700' 
                    : 'border-gray-300 bg-white hover:bg-gray-50'
                }`}>
                  Next
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                    Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">77</span> participants
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button className={`relative inline-flex items-center px-2 py-2 rounded-l-md border text-sm font-medium ${
                      isDarkMode 
                        ? 'border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700' 
                        : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
                    }`}>
                      <span className="sr-only">Previous</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      isDarkMode 
                        ? 'border-gray-700 bg-blue-800 text-white' 
                        : 'bg-blue-600 text-white border-blue-500'
                    }`}>
                      1
                    </button>
                    <button className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      isDarkMode 
                        ? 'border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                    }`}>
                      2
                    </button>
                    <button className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      isDarkMode 
                        ? 'border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                    }`}>
                      3
                    </button>
                    <span className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      isDarkMode ? 'border-gray-700 bg-gray-800 text-gray-500' : 'border-gray-300 bg-white text-gray-700'
                    }`}>
                      ...
                    </span>
                    <button className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      isDarkMode 
                        ? 'border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                    }`}>
                      8
                    </button>
                    <button className={`relative inline-flex items-center px-2 py-2 rounded-r-md border text-sm font-medium ${
                      isDarkMode 
                        ? 'border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700' 
                        : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
                    }`}>
                      <span className="sr-only">Next</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ParticipantList;