// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function TeamRegistrations() {
//   const [teams, setTeams] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchTeams = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("Token not found in localStorage");
//         return;
//       }

//       const response = await axios.get(
//         "http://localhost:3000/api/user/user-getteam",
//         {
//           headers: {
//             token: token, // Send token from frontend headers
//           },
//         }
//       );

//       setTeams(response.data.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching team registrations:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTeams();
//   }, []);

//   return (
//     <div className="p-4 max-w-2xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4 text-center">Your Teams</h1>

//       {loading ? (
//         <p className="text-center">Loading teams...</p>
//       ) : teams.length === 0 ? (
//         <p className="text-center">No team registrations found.</p>
//       ) : (
//         teams.map((team) => (
//           <div key={team._id} className="border p-4 rounded shadow mb-4">
//             <h2 className="text-xl font-semibold mb-2">{team.teamname}</h2>

//             <p className="font-medium mb-2">Participants:</p>
//             <ul className="list-disc list-inside space-y-1">
//               {team.praticipante.map((email, index) => (
//                 <li key={index}>{email}</li>
//               ))}
//             </ul>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default TeamRegistrations;







// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function TeamRegistrations() {
//   const [teams, setTeams] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);

//   const fetchTeams = async (showRefreshing = false) => {
//     try {
//       if (showRefreshing) setRefreshing(true);

//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("Token not found in localStorage");
//         return;
//       }

//       const response = await axios.get(
//         "http://localhost:3000/api/user/user-getteam",
//         {
//           headers: { token },
//         }
//       );

//       setTeams(response.data.data);
//       setLoading(false);
//       if (showRefreshing) setRefreshing(false);
//     } catch (error) {
//       console.error("Error fetching team registrations:", error);
//       setLoading(false);
//       if (showRefreshing) setRefreshing(false);
//     }
//   };

//   useEffect(() => {
//     fetchTeams();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <div className="text-center mb-10">
//           <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Your Teams
//           </h1>
//           <p className="mt-3 text-lg text-gray-500">
//             View and manage your registered teams
//           </p>
//         </div>

//         <div className="flex justify-end mb-6">
//           <button
//             onClick={() => fetchTeams(true)}
//             disabled={refreshing}
//             className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150 disabled:opacity-70"
//           >
//             {refreshing ? (
//               <>
//                 <svg
//                   className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//                 Refreshing...
//               </>
//             ) : (
//               <>
//                 <svg
//                   className="-ml-1 mr-2 h-4 w-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//                   />
//                 </svg>
//                 Refresh Teams
//               </>
//             )}
//           </button>
//         </div>

//         {loading ? (
//           <div className="flex flex-col items-center justify-center py-12">
//             <svg
//               className="animate-spin mb-4 h-10 w-10 text-indigo-600"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//               ></path>
//             </svg>
//             <p className="text-lg text-gray-600">Loading your teams...</p>
//           </div>
//         ) : teams.length === 0 ? (
//           <div className="rounded-lg bg-white shadow-sm p-8 text-center border border-gray-200">
//             <svg
//               className="mx-auto h-16 w-16 text-gray-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//                 d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//               />
//             </svg>
//             <h3 className="mt-4 text-xl font-medium text-gray-900">
//               No teams found
//             </h3>
//             <p className="mt-2 text-gray-500">
//               You haven't registered any teams yet.
//             </p>
//           </div>
//         ) : (
//           <div className="grid gap-6">
//             {teams.map((team) => (
//               <div
//                 key={team._id}
//                 className="bg-white overflow-hidden rounded-lg shadow-md border border-gray-200 transition-all duration-200 hover:shadow-lg hover:border-indigo-200"
//               >
//                 <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
//                   <div className="flex items-center justify-between">
//                     <h2 className="text-xl font-bold text-gray-800">
//                       {team.teamname}
//                     </h2>
//                     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
//                       {team.praticipante.length}{" "}
//                       {team.praticipante.length === 1 ? "Member" : "Members"}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="px-6 py-5">
//                   <h3 className="text-base font-semibold text-gray-700 mb-3">
//                     Team Members
//                   </h3>
//                   <ul className="divide-y divide-gray-200">
//                     {team.praticipante.map((email, index) => (
//                       <li key={index} className="py-3 flex items-center">
//                         <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
//                           {email.charAt(0).toUpperCase()}
//                         </div>
//                         <span className="ml-3 truncate text-gray-700">
//                           {email}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
//                   <div className="flex justify-end">
//                     <button className="text-xs text-indigo-600 hover:text-indigo-800 font-medium">
//                       View Details →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default TeamRegistrations;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { Appcontext } from "../context/contextpra";
import { useContext } from "react";

function TeamRegistrations() {
    const { teams, loading, refreshing } = useContext(Appcontext);
//   const [teams, setTeams] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);

//   const fetchTeams = async (showRefreshing = false) => {
//     try {
//       if (showRefreshing) setRefreshing(true);

//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("Token not found in localStorage");
//         return;
//       }

//       const response = await axios.get(
//         "http://localhost:3000/api/user/user-getteam",
//         {
//           headers: { token },
//         }
//       );

//       setTeams(response.data.data);
//         setLoading(false);
//         if (response.data.data.userreg==true) {
//           setuserreg(true);
//         }
//         if (showRefreshing) setRefreshing(false);
     
//     } catch (error) {
//       console.error("Error fetching team registrations:", error);
//       setLoading(false);
//       if (showRefreshing) setRefreshing(false);
//     }
//   };

//   useEffect(() => {
//     fetchTeams();
//   }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6 sm:px-8 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Your Teams
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            View and manage your registered teams
          </p>
        </div>

        <div className="flex justify-end mb-8">
          <button
            onClick={() => fetchTeams(true)}
            disabled={refreshing}
            className="inline-flex items-center px-5 py-3 border border-transparent rounded-md shadow-sm text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition disabled:opacity-70"
          >
            {refreshing ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Refreshing...
              </>
            ) : (
              <>
                <svg
                  className="-ml-1 mr-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Refresh Teams
              </>
            )}
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <svg
              className="animate-spin mb-6 h-12 w-12 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p className="text-xl text-gray-600">Loading your teams...</p>
          </div>
        ) : teams.length === 0 ? (
          <div className="rounded-lg bg-white shadow p-10 text-center border border-gray-200">
            <svg
              className="mx-auto h-20 w-20 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              No teams found
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              You haven't registered any teams yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-8">
            {teams.map((team) => (
              <div
                key={team._id}
                className="bg-white overflow-hidden rounded-xl shadow-md border border-gray-200 transition-all hover:shadow-lg hover:border-indigo-300"
              >
                <div className="px-8 py-6 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {team.teamname}
                    </h2>
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-semibold bg-indigo-100 text-indigo-800">
                      {team.praticipante.length}{" "}
                      {team.praticipante.length === 1 ? "Member" : "Members"}
                    </span>
                  </div>
                </div>
                <div className="px-8 py-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">
                    Team Members
                  </h3>
                  <ul className="divide-y divide-gray-200">
                    {team.praticipante.map((email, index) => (
                      <li key={index} className="py-4 flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                          {email.charAt(0).toUpperCase()}
                        </div>
                        <span className="ml-4 text-lg text-gray-700">
                          {email}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex justify-end">
                    <button className="text-base text-indigo-600 hover:text-indigo-800 font-semibold">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TeamRegistrations;
