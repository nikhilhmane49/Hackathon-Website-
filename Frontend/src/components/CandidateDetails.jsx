// src/components/CandidateDetails.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { FaUniversity, FaPhone, FaEnvelope, FaUserGraduate, FaCheckCircle, FaRegEnvelope } from 'react-icons/fa';
import { MdSchool, MdCalendarToday } from 'react-icons/md';
import React from 'react';

const CandidateDetails = () => {
  const [loading, setLoading] = useState(false);
  // const[teamdata,setteamdata]=useState([]);
   const navigate = useNavigate();

  // useeffect(() => {

  //   const atoken = localStorage.getItem('atoken');
  //   if (!atoken) {
  //     console.error('No token found');
  //     return;
  //   }
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:3000/api/orgnizer/orgnizer-hacktonteam",
  //         {
  //           atoken: atoken, 
  //         }
         
  //       ); // Replace with your API endpoint
  //       setteamdata(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  //  }, []);

  const TeamMemberCard = ({ isLeader, name, university, phone, email, education, year, branch, degree }) => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="p-6">
        <div className="flex items-start gap-5">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm">
              <img 
                src={`https://ui-avatars.com/api/?name=${name}&background=random&color=fff&size=128`} 
                alt={name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className={`text-xs font-medium mt-2 py-1 px-3 rounded-full ${isLeader ? 'bg-indigo-100 text-indigo-700' : 'bg-amber-100 text-amber-700'}`}>
              {isLeader ? 'Team Leader' : 'Team Member'}
            </div>
          </div>
          
          {/* Info */}
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
              <div className="ml-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <FaUniversity size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">University</p>
                  <p className="text-sm font-medium">{university}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                  <FaPhone size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Contact</p>
                  <p className="text-sm font-medium">{phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Email</p>
                  <p className="text-sm font-medium truncate max-w-[180px]">{email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                  <MdSchool size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Education</p>
                  <p className="text-sm font-medium">{degree} • {year} Year</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-2 rounded-lg">
              <FaUserGraduate size={14} />
              <span className="text-xs font-medium">{education}</span>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center text-xs text-gray-500">
                <MdCalendarToday className="mr-1" />
                Registered on: 10 Mar 25, 12:03 PM IST
              </div>
              
              <button className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm">
                <FaRegEnvelope className="mr-2 text-gray-500" />
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-white shadow-sm py-4 px-6 flex items-center sticky top-0 z-10">
        <button 
          onClick={() => navigate(-1)} 
          className="text-gray-600 hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100"
        >
          <HiOutlineArrowLeft size={20} />
        </button>
        <h1 className="ml-3 text-xl font-semibold text-gray-800">Candidate Details</h1>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white shadow-sm md:min-h-[calc(100vh-64px)] p-5">
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
              <img 
                src="https://ui-avatars.com/api/?name=User&background=8b5cf6&color=fff&size=128" 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-800">Ding_ding</h3>
            <div className="mt-2 bg-green-50 py-1 px-4 rounded-full flex items-center">
              <FaCheckCircle className="text-green-500 mr-1" size={14} />
              <span className="text-green-600 text-xs font-medium">Complete</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center p-3 bg-blue-50 text-blue-700 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-medium">Profile</span>
            </div>
            
            <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className="flex items-center">
                <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-700 mr-3">1</span>
                <div>
                  <p className="text-sm font-medium text-gray-800">Round 1 : Solution Showcase</p>
                  <p className="text-xs text-gray-500 mt-0.5">Round (via Unstop)</p>
                </div>
              </div>
            </div>
            
            <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className="flex items-center">
                <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-700 mr-3">2</span>
                <div>
                  <p className="text-sm font-medium text-gray-800">Offline Grand Finale:</p>
                  <p className="text-xs text-gray-500 mt-0.5">Innovation Round</p>
                </div>
              </div>
            </div>
            
            <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-800">Unstop Participation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-5 md:p-6 space-y-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : (
            <>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Team Members</h2>
              <div className="space-y-6">
                {/* Team Leader Card */}
                <TeamMemberCard 
                  isLeader={true}
                  name="Aneesh Kulkarni"
                  university="RV University, Bangalore"
                  phone="+919147703582"
                  email="aneeshk.btech22@rvu.edu.in"
                  education="Computer Science and Engineering"
                  year="4th"
                  degree="B.Tech"
                  branch="Engineering"
                />
                
                {/* Team Member Card */}
                <TeamMemberCard 
                  isLeader={false}
                  name="Lakshmi K"
                  university="RV University"
                  phone="+918971635167"
                  email="laksri987@gmail.com"
                  education="Computer Science and Engineering"
                  year="3rd"
                  degree="B.Tech"
                  branch="Engineering"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;