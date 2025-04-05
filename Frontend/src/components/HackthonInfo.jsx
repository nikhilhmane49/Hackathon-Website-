import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import React from 'react';

function HackathonInfo() {
  const [activeTab, setActiveTab] = useState('stages');
  const [isLoading, setIsLoading] = useState(true);
  const [hackathon, setHackathon] = useState(null);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setHackathon({
        hackathonName: "TechInnovate 2025",
        collegeName: "Global Tech University",
        collegeAddress: "123 Innovation Avenue, Silicon Valley, CA",
        mode: "hybrid",
        prizePool: "$45,000",
        teamSize: {
          min: 2,
          max: 4
        },
        registration: {
          startDate: new Date("2025-03-01T00:00:00"),
          endDate: new Date("2025-05-15T23:59:00")
        },
        stages: [
          {
            roundTitle: "Ideation & Problem Statement",
            description: "Submit your innovative ideas and problem statements that address real-world challenges in technology, healthcare, education, or sustainability.",
            participantTask: "Create a detailed proposal with problem definition, target audience, and potential impact",
            impact: "Top ideas will be selected based on originality, feasibility, and potential for positive impact",
            timeline: {
              startDate: new Date("2025-03-10T12:00:00"),
              endDate: new Date("2025-03-30T23:59:00")
            }
          },
          {
            roundTitle: "Prototype Development",
            description: "Bring your ideas to life with a working prototype that demonstrates your solution's core functionality.",
            participantTask: "Develop an MVP and prepare a technical implementation plan",
            impact: "Prototypes will be evaluated on technical execution, innovation, and user experience",
            timeline: {
              startDate: new Date("2025-04-05T12:00:00"),
              endDate: new Date("2025-04-25T23:59:00")
            }
          },
          {
            roundTitle: "Final Presentation & Demo Day",
            description: "Showcase your complete solution to industry experts, investors, and technology leaders.",
            participantTask: "Deliver a compelling presentation and live demonstration of your solution",
            impact: "Winners will be selected based on overall execution, market potential, and presentation quality",
            timeline: {
              startDate: new Date("2025-05-10T09:00:00"),
              endDate: new Date("2025-05-10T18:00:00")
            }
          }
        ],
        contactDetails: {
          name: "Dr. Sarah Johnson",
          email: "techinnovate@globaltech.edu",
          phone: "+1 (555) 789-3456"
        },
        rules: [
          "All team members must be currently enrolled students",
          "Projects must be original work created during the hackathon period",
          "Use of open-source libraries and frameworks is permitted with proper attribution",
          "Solutions must address one of the provided challenge categories",
          "Teams must submit all required deliverables by the specified deadlines",
          "Participants must adhere to the code of conduct throughout the event",
          "Final presentations must not exceed 8 minutes plus 4 minutes for Q&A"
        ],
        brochure: "https://example.com/brochure.pdf",
        logo: "https://via.placeholder.com/150",
        banner: "https://via.placeholder.com/1200x300",
        stats: {
          registered: 342,
          impressions: 15780,
          countries: 24,
          partners: 12
        },
        sponsors: [
          { name: "TechCorp", tier: "platinum" },
          { name: "InnoVentures", tier: "gold" },
          { name: "DevStream", tier: "gold" },
          { name: "CloudNative", tier: "silver" }
        ],
        highlights: [
          "Mentorship from industry experts",
          "Networking with tech recruiters",
          "Workshops on cutting-edge technologies",
          "Opportunities for internships and job offers"
        ],
        winners: {
          prizes: [
            { position: "1st Place", amount: "$20,000", perks: "Accelerator Program Access" },
            { position: "2nd Place", amount: "$15,000", perks: "Cloud Credits" },
            { position: "3rd Place", amount: "$7,500", perks: "Hardware Kits" },
            { position: "Innovation Award", amount: "$2,500", perks: "Mentorship Program" }
          ]
        }
      });
      setIsLoading(false);
    }, 1000);

    // Countdown timer
    const timer = setInterval(() => {
      const now = new Date();
      const targetDate = new Date("2025-03-15T00:00:00");
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  const formatSimpleDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const handleRegisterClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-40 bg-white/60 rounded-xl"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="h-10 bg-white/60 rounded-lg w-1/2"></div>
                <div className="h-96 bg-white/60 rounded-xl"></div>
              </div>
              <div className="space-y-4">
                <div className="h-60 bg-white/60 rounded-xl"></div>
                <div className="h-40 bg-white/60 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 font-sans">
      {showConfetti && <Confetti />}

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r bg-[#3498db] text-white w-[1400px] ml-16">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
          </svg>
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="bg-white p-3 rounded-xl mr-6 shadow-lg">
                <img src={hackathon.logo} alt={`${hackathon.hackathonName} Logo`}
                  className="w-16 h-16 object-contain" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold">{hackathon.hackathonName}</h1>
                <h3 className="text-xl text-indigo-200 mt-1">{hackathon.collegeName}</h3>
              </div>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-xl flex items-center"
            >
              <span className="text-yellow-300 text-3xl mr-3">🏆</span>
              <div>
                <p className="text-xs uppercase tracking-wider text-indigo-200">Total Prize Pool</p>
                <p className="text-2xl font-bold">{hackathon.prizePool}</p>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium">
              {hackathon.mode.charAt(0).toUpperCase() + hackathon.mode.slice(1)} Hackathon
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {hackathon.collegeAddress}
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Team Size: {hackathon.teamSize.min}-{hackathon.teamSize.max}
            </div>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="bg-white shadow-md border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 mb-3 sm:mb-0">Registration closing in:</p>
            <div className="flex space-x-4">
              <CountdownItem value={countdown.days} label="Days" />
              <CountdownItem value={countdown.hours} label="Hours" />
              <CountdownItem value={countdown.minutes} label="Minutes" />
              <CountdownItem value={countdown.seconds} label="Seconds" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="border-b">
                <div className="flex overflow-x-auto scrollbar-hide">
                  {['stages', 'prizes', 'details', 'rules', 'contact'].map((tab) => (
                    <button
                      key={tab}
                      className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab
                          ? 'text-indigo-600 border-b-2 border-indigo-600'
                          : 'text-gray-500 hover:text-gray-900'
                        }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                {/* Stages Tab */}
                {activeTab === 'stages' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">Hackathon Timeline</h2>
                    </div>

                    <div className="relative">
                      {/* Timeline vertical line */}
                      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-indigo-200"></div>

                      <div className="space-y-10">
                        {hackathon.stages.map((stage, index) => (
                          <motion.div
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative flex"
                          >
                            {/* Timeline dot */}
                            <div className="absolute left-6 transform -translate-x-1/2 w-3 h-3 bg-white border-4 border-indigo-500 rounded-full z-10"></div>

                            {/* Date block */}
                            <div className="min-w-[90px] pr-6 pt-1">
                              <div className="text-center w-16 py-1 px-2 bg-indigo-100 text-indigo-800 rounded-lg text-sm font-medium">
                                {formatSimpleDate(stage.timeline.startDate)}
                              </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                              <h3 className="font-bold text-lg text-gray-900 mb-2">{stage.roundTitle}</h3>
                              <p className="text-gray-600 mb-4">{stage.description}</p>

                              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                <div className="bg-gray-50 p-3 rounded-lg">
                                  <p className="font-medium text-gray-700">Your Task:</p>
                                  <p className="mt-1 text-gray-600">{stage.participantTask}</p>
                                </div>

                                <div className="bg-gray-50 p-3 rounded-lg">
                                  <p className="font-medium text-gray-700">Evaluation Criteria:</p>
                                  <p className="mt-1 text-gray-600">{stage.impact}</p>
                                </div>
                              </div>

                              <div className="mt-4 text-xs text-gray-500">
                                <span className="font-medium">Timeline:</span> {formatDate(stage.timeline.startDate)} to {formatDate(stage.timeline.endDate)}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Prizes Tab */}
                {activeTab === 'prizes' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm4 5V6a4 4 0 00-8 0v1h8zm-3 2a1 1 0 10-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">Awards & Prizes</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      {hackathon.winners.prizes.map((prize, index) => (
                        <motion.div
                          key={index}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                        >
                          {index === 0 && (
                            <div className="absolute -top-1 -right-1">
                              <div className="text-xs font-bold uppercase tracking-wider text-white transform rotate-45 bg-gradient-to-r from-yellow-500 to-yellow-300 px-6 py-1 shadow-md">
                                Top Prize
                              </div>
                            </div>
                          )}

                          <div className="flex items-center">
                            <div className={`text-3xl mr-4 ${index === 0 ? 'text-yellow-500' :
                                index === 1 ? 'text-gray-400' :
                                  index === 2 ? 'text-yellow-700' : 'text-indigo-500'
                              }`}>
                              {index === 0 ? '🏆' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🎖️'}
                            </div>
                            <div>
                              <h3 className="font-bold text-lg text-gray-900">{prize.position}</h3>
                              <p className="text-gray-500 text-sm">{prize.perks}</p>
                            </div>
                          </div>

                          <div className="mt-4 text-3xl font-bold text-indigo-600">{prize.amount}</div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 bg-indigo-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-indigo-800 mb-3">Additional Benefits</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {hackathon.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Details Tab */}
                {activeTab === 'details' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">Hackathon Details</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-5">
                        <DetailItem icon="🏫" label="Organizing Institution" value={hackathon.collegeName} />
                        <DetailItem icon="📍" label="Location" value={hackathon.collegeAddress} />
                        <DetailItem icon="🖥️" label="Mode" value={hackathon.mode.charAt(0).toUpperCase() + hackathon.mode.slice(1)} />
                        <DetailItem icon="👥" label="Team Size" value={`${hackathon.teamSize.min} - ${hackathon.teamSize.max} members`} />
                      </div>

                      <div className="space-y-5">
                        <DetailItem icon="🏆" label="Prize Pool" value={hackathon.prizePool} />
                        <DetailItem icon="📅" label="Registration Period"
                          value={`${formatDate(hackathon.registration.startDate)} to ${formatDate(hackathon.registration.endDate)}`} />
                        <DetailItem icon="🌎" label="Countries Represented" value={hackathon.stats.countries.toString()} />
                        <DetailItem icon="🤝" label="Industry Partners" value={hackathon.stats.partners.toString()} />
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between bg-gray-50 rounded-xl p-5 border border-gray-200">
                      <div>
                        <h3 className="font-medium text-gray-800">Hackathon Brochure</h3>
                        <p className="text-sm text-gray-500 mt-1">Download the complete information package</p>
                      </div>
                      <a
                        href={hackathon.brochure}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg flex items-center transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Download PDF
                      </a>
                    </div>
                  </div>
                )}

                {/* Rules Tab */}
                {activeTab === 'rules' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">Rules & Guidelines</h2>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-gray-600 mb-4">
                        To ensure a fair and productive event for all participants, please adhere to the following rules:
                      </p>

                      <div className="space-y-3">
                        {hackathon.rules.map((rule, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center border border-gray-200 text-indigo-600 font-medium text-sm mt-0.5 mr-3 flex-shrink-0">
                              {index + 1}
                            </div>
                            <p className="text-gray-700">{rule}</p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 bg-yellow-50 border border-yellow-100 rounded-lg p-4 text-sm text-yellow-800">
                        <div className="flex">
                          <svg className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <p className="font-medium">Important Note</p>
                            <p className="mt-1">Violation of any of these rules may result in disqualification. The judges' decision is final in all matters.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact Tab */}
                {activeTab === 'contact' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 py-4 px-6 text-white">
                          <h3 className="font-medium">Hackathon Organizer</h3>
                        </div>
                        <div className="p-6 space-y-4">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-gray-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            <div>
                              <p className="text-sm text-gray-500">Name</p>
                              <p className="font-medium">{hackathon.contactDetails.name}</p>
                            </div>
                          </div>

                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-gray-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <div>
                              <p className="text-sm text-gray-500">Email</p>
                              <p className="font-medium">{hackathon.contactDetails.email}</p>
                            </div>
                          </div>

                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-gray-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <div>
                              <p className="text-sm text-gray-500">Phone</p>
                              <p className="font-medium">{hackathon.contactDetails.phone}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-4 px-6 text-white">
                          <h3 className="font-medium">Quick Inquiry</h3>
                        </div>
                        <div className="p-6">
                          <form className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                              <input
                                type="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="you@example.com"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Question about registration"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                              <textarea
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                rows="3"
                                placeholder="Your question or comment"
                              ></textarea>
                            </div>
                            <button
                              type="button"
                              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md shadow-sm transition-colors"
                            >
                              Send Message
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sponsors */}
            <div className="bg-white rounded-2xl shadow-lg p-6 overflow-hidden">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Our Sponsors</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {hackathon.sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center py-4 px-6 bg-gray-50 rounded-lg border ${sponsor.tier === 'platinum' ? 'border-yellow-300' :
                        sponsor.tier === 'gold' ? 'border-gray-300' :
                          'border-gray-200'
                      }`}
                  >
                    <div className="text-center">
                      <div className="text-gray-700 font-medium">{sponsor.name}</div>
                      <div className={`text-xs mt-1 ${sponsor.tier === 'platinum' ? 'text-yellow-600' :
                          sponsor.tier === 'gold' ? 'text-yellow-700' :
                            'text-gray-600'
                        }`}>
                        {sponsor.tier.toUpperCase()} SPONSOR
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white">
                <h3 className="text-xl font-bold">Join the Challenge</h3>
                <p className="mt-1 text-indigo-100">Showcase your skills and win amazing prizes</p>
              </div>

              <div className="p-6">
                <button
                  onClick={handleRegisterClick}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  Register Now
                </button>

                <div className="mt-6 space-y-4">
                  {/* Stats */}
                  <StatsItem
                    icon="👥"
                    label="Teams Registered"
                    value={hackathon.stats.registered}
                    color="bg-blue-50"
                    textColor="text-blue-700"
                  />

                  <StatsItem
                    icon="🌎"
                    label="Countries Represented"
                    value={hackathon.stats.countries}
                    color="bg-green-50"
                    textColor="text-green-700"
                  />

                  <StatsItem
                    icon="👁️"
                    label="Page Views"
                    value={hackathon.stats.impressions.toLocaleString()}
                    color="bg-purple-50"
                    textColor="text-purple-700"
                  />

                  <StatsItem
                    icon="📅"
                    label="Registration Deadline"
                    value={formatDate(hackathon.registration.endDate)}
                    color="bg-red-50"
                    textColor="text-red-700"
                    isDate={true}
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Why Participate?</h3>

              <div className="space-y-3">
                {[
                  { icon: "💡", text: "Develop innovative solutions to real-world problems" },
                  { icon: "🚀", text: "Launch your career with industry recognition" },
                  { icon: "🌐", text: "Network with tech leaders and innovators" },
                  { icon: "🏆", text: "Win substantial prizes and perks" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-xl mr-3">{item.icon}</div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                  <p className="font-medium">Exclusive Opportunities</p>
                </div>
                <p className="mt-2 text-sm text-indigo-200">Top-performing teams will be invited to exclusive mentorship programs and potential internship opportunities with our sponsor companies.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Resources</h3>

              <div className="space-y-3">
                {[
                  { icon: "📝", text: "Preparation Guide", link: "#" },
                  { icon: "🎬", text: "Introduction Webinar", link: "#" },
                  { icon: "📚", text: "Learning Materials", link: "#" },
                  { icon: "❓", text: "FAQs", link: "#" }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-xl mr-3">{item.icon}</span>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function CountdownItem({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-indigo-100 text-indigo-800 font-bold rounded-md w-12 h-12 flex items-center justify-center text-lg">
        {value}
      </div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  );
}

function DetailItem({ icon, label, value }) {
  return (
    <div className="flex items-start">
      <div className="text-2xl mr-3">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium text-gray-800">{value}</p>
      </div>
    </div>
  );
}

function StatsItem({ icon, label, value, color, textColor, isDate = false }) {
  return (
    <div className={`flex items-center p-3 rounded-lg ${color}`}>
      <div className="text-2xl mr-3">{icon}</div>
      <div className="flex-1">
        <p className="text-xs text-gray-600">{label}</p>
        <p className={`font-bold ${textColor} ${isDate ? 'text-sm' : 'text-lg'}`}>{value}</p>
      </div>
    </div>
  );
}

function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex justify-center">
      <div className="w-full h-full absolute">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              top: -20,
              left: Math.random() * 100 + "%",
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              backgroundColor: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'][Math.floor(Math.random() * 6)],
              borderRadius: Math.random() > 0.5 ? '50%' : '0%'
            }}
            animate={{
              top: "100%",
              rotate: Math.random() * 360,
              opacity: [1, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default HackathonInfo;