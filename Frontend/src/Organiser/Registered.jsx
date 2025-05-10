import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FaBookmark, FaPlus, FaSearch, FaSort, FaStar, FaEllipsisV
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function ParticipantList() {
  // const [activeTab, setActiveTab] = useState("in-progress");
  // const [searchTerm, setSearchTerm] = useState("");
  // const [isFilterOpen, setIsFilterOpen] = useState(false);
  // const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const [participants, setParticipants] = useState([
  //   {
  //     id: 1,
  //     teamName: "Ding_ding",
  //     playerCount: 2,
  //     leadName: "Aneesh Kulkarni",
  //     college: "RV University, Bangalore",
  //     status: "Not Submitted",
  //     score: "--",
  //     bookmarked: false,
  //     avatarColor: "bg-gradient-to-r from-red-500 to-pink-500",
  //     lastActive: "2 hours ago",
  //     shortlisted: false,
  //     rejected: false,
  //   },
  //   {
  //     id: 2,
  //     teamName: "Tech Titans",
  //     playerCount: 4,
  //     leadName: "Deepika Bunga",
  //     college: "Shri Vishnu Engineering College",
  //     status: "Not Submitted",
  //     score: "--",
  //     bookmarked: false,
  //     avatarColor: "bg-gradient-to-r from-blue-500 to-purple-500",
  //     lastActive: "5 hours ago",
  //     shortlisted: true,
  //     rejected: false,
  //   },
  //   {
  //     id: 3,
  //     teamName: "Tech-Runs",
  //     playerCount: 3,
  //     leadName: "Prasanthkumar Bhumula",
  //     college: "Gayatri Vidya Parishad College",
  //     status: "Submitted",
  //     submissionTime: "22 Mar 23, 10:45 PM IST",
  //     score: "--",
  //     bookmarked: true,
  //     avatarColor: "bg-gradient-to-r from-green-500 to-teal-500",
  //     lastActive: "1 day ago",
  //     shortlisted: true,
  //     rejected: false,
  //   },
  //   {
  //     id: 4,
  //     teamName: "EcoChampions",
  //     playerCount: 2,
  //     leadName: "Ritika Rathour",
  //     college: "National Institute of Securities",
  //     status: "Not Submitted",
  //     score: "--",
  //     bookmarked: false,
  //     avatarColor: "bg-gradient-to-r from-gray-500 to-blue-gray-500",
  //     lastActive: "3 days ago",
  //     shortlisted: false,
  //     rejected: true,
  //   },
  //   {
  //     id: 5,
  //     teamName: "Venture Vaults",
  //     playerCount: 2,
  //     leadName: "Manas Singh",
  //     college: "Delhi Technical University",
  //     status: "Not Submitted",
  //     score: "--",
  //     bookmarked: false,
  //     avatarColor: "bg-gradient-to-r from-amber-500 to-orange-500",
  //     lastActive: "Just now",
  //     shortlisted: false,
  //     rejected: false,
  //   },
  // ]);





  const [teamdata, setteamdata] = useState([]);
  // const navigate = useNavigate();
  const atoken = localStorage.getItem("atoken");
  useEffect(() => {
   
    if (!atoken) {
      console.error("No token found");
      return;
    }
    const fetchData = async () => {
      // setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:3000/api/orgnizer/orgnizer-hacktonteam",
          {
            headers: {
             atoken: atoken,
            },
          }
        );
        setteamdata(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, [atoken]);








  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // const toggleSelect = (id) => {
  //   setSelectedParticipants((prev) =>
  //     prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
  //   );
  // };

  // const toggleBookmark = (id) => {
  //   setParticipants((prev) =>
  //     prev.map((p) => (p.id === id ? { ...p, bookmarked: !p.bookmarked } : p))
  //   );
  // };

  // const tabFilteredParticipants = participants.filter((p) => {
  //   if (activeTab === "all") return true;
  //   if (activeTab === "in-progress") return p.status === "Not Submitted";
  //   if (activeTab === "shortlisted") return p.shortlisted;
  //   if (activeTab === "rejected") return p.rejected;
  //   return true;
  // });

  // const filteredParticipants = tabFilteredParticipants.filter((p) =>
  //   [p.teamName, p.leadName, p.college].some((field) =>
  //     field.toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  // );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h1 className="text-2xl font-bold">Participants Dashboard</h1>
          <div className="flex items-center space-x-3">
            <span className="text-sm">
              {isDarkMode ? "Dark" : "Light"} Mode
            </span>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 p-1 ${
                isDarkMode
                  ? "bg-blue-600 justify-end"
                  : "bg-gray-300 justify-start"
              }`}
            >
              <motion.div
                layout
                className="w-4 h-4 bg-white rounded-full shadow-md"
              />
            </button>
          </div>
        </div>

        {/* Tabs */}
        {/* <div className="flex space-x-6 border-b mb-4">
          {["all", "in-progress", "shortlisted", "rejected"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 font-medium capitalize ${
                activeTab === tab
                  ? isDarkMode
                    ? "text-blue-400"
                    : "text-blue-600"
                  : isDarkMode
                  ? "text-gray-500"
                  : "text-gray-600"
              }`}
            >
              {tab === "in-progress" ? "In Progress (77)" : tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                    isDarkMode ? "bg-blue-400" : "bg-blue-600"
                  }`}
                />
              )}
            </button>
          ))}
        </div> */}

        {/* Search & Filter */}
        {/* <div className="flex justify-between items-center mb-4">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search here"
              className={`w-full pl-10 pr-4 py-2 rounded-md border focus:outline-none focus:ring-2 transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gray-800 border-gray-600 text-gray-200 focus:ring-blue-500"
                  : "bg-white border-gray-300 text-gray-800 focus:ring-blue-400"
              }`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
          </div>

          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`ml-4 px-3 py-2 border rounded-lg text-sm flex items-center gap-1 transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gray-800 border-gray-600 text-gray-200 hover:bg-gray-700"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <FaSort /> Filter
            </button>

            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute right-0 mt-2 w-64 rounded-lg shadow-xl z-10 ${
                    isDarkMode
                      ? "bg-gray-800 border border-gray-700"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div className="p-4 space-y-3">
                    <label className="block text-sm font-medium">
                      Status
                      <select
                        className={`mt-1 w-full rounded-md border text-sm p-2 ${
                          isDarkMode
                            ? "bg-gray-700 text-white border-gray-600"
                            : "bg-white border-gray-300 text-gray-800"
                        }`}
                      >
                        <option value="">All</option>
                        <option value="Submitted">Submitted</option>
                        <option value="Not Submitted">Not Submitted</option>
                      </select>
                    </label>
                    <label className="block text-sm font-medium">
                      Bookmarked
                      <select
                        className={`mt-1 w-full
                rounded-md border text-sm p-2 ${
                  isDarkMode
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-white border-gray-300 text-gray-800"
                }`}
                      >
                        <option value="">All</option>
                        <option value="bookmarked">Yes</option>
                        <option value="not-bookmarked">No</option>
                      </select>
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div> */}

        {/* Participant List */}
        <div className="mt-6">
          {isLoading ? (
            <div className="text-center py-10">
              <p className="text-sm text-gray-400">Loading participants...</p>
            </div>
          ) : (
            <ul
              className="divide-y transition-colors duration-300"
              style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}
            >
              {Array.isArray(teamdata) &&
                teamdata.map((participant) => (
                  <li
                    key={participant._id}
                    className={`flex items-center justify-between py-4 px-2 hover:bg-opacity-20 transition-colors duration-200 ${
                      isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* <input
                      type="checkbox"
                      // checked={selectedParticipants.includes(participant._id)}
                      // onChange={() => toggleSelect(participant._id)}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    /> */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-black font-bold ${participant.avatarColor}`}
                      >
                        {participant.teamname.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {participant.teamname}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {participant.leadName || null} •{" "}
                          {participant.college || null}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          participant.status === "Submitted"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {participant.status || null}
                      </span>
                      <span className="text-xs text-gray-400">
                        {participant.lastActive || null}
                      </span>
                      {/* <button onClick={() => toggleBookmark(participant._id)}>
                      <FaBookmark
                        className={`w-4 h-4 ${
                          participant.bookmarked
                            ? "text-yellow-500"
                            : "text-gray-400"
                        }`}
                      />
                    </button> */}
                    </div>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ParticipantList;