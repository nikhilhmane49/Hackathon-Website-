// import React, { useState } from "react";
// import axios from "axios";

// function UserSearch() {
//   const [emails, setEmails] = useState([""]); // Initially one input
//   const [teamname, setTeamname] = useState("");

//   const handleEmailChange = (index, value) => {
//     const newEmails = [...emails];
//     newEmails[index] = value;
//     setEmails(newEmails);
//   };

//   const handleAddEmailInput = () => {
//     setEmails([...emails, ""]);
//   };

//   const handleRemoveEmailInput = (index) => {
//     const newEmails = [...emails];
//     newEmails.splice(index, 1);
//     setEmails(newEmails);
//   };

//   const handleSubmitTeam = async () => {
//     const filteredEmails = emails.filter((email) => email.trim() !== "");

//     if (!teamname || filteredEmails.length === 0) {
//       alert(
//         "Please enter a team name and at least one valid participant email."
//       );
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("Token not found in localStorage");
//         return;
//       }

//       const response = await axios.post(
//         "http://localhost:3000/api/user/user-sreach",
//         {
//           teamname: teamname,
//           emails: filteredEmails,
//         },
//         {
//           headers: { token: token },
//         }
//       );

//       console.log("Team registered successfully:", response.data);
//       alert("Team registered successfully!");

//       // Clear all inputs
//       setTeamname("");
//       setEmails([""]);
//     } catch (error) {
//       console.error("Error registering team", error);
//       alert("Failed to register team");
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Create Team</h1>

//       {/* Team Name Input */}
//       <div className="mb-4">
//         <input
//           type="text"
//           value={teamname}
//           onChange={(e) => setTeamname(e.target.value)}
//           placeholder="Enter team name"
//           className="border p-2 w-full rounded"
//         />
//       </div>

//       {/* Dynamic Email Inputs */}
//       <div className="mb-4">
//         {emails.map((email, index) => (
//           <div key={index} className="flex gap-2 mb-2">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => handleEmailChange(index, e.target.value)}
//               placeholder="Enter participant email"
//               className="border p-2 w-full rounded"
//             />
//             {emails.length > 1 && (
//               <button
//                 onClick={() => handleRemoveEmailInput(index)}
//                 className="bg-red-500 text-white px-2 py-1 rounded"
//               >
//                 Remove
//               </button>
//             )}
//           </div>
//         ))}

//         <button
//           onClick={handleAddEmailInput}
//           className="bg-blue-500 text-white p-2 rounded w-full"
//         >
//           Add More Email
//         </button>
//       </div>

//       {/* Submit Button */}
//       {emails.length > 0 && (
//         <button
//           onClick={handleSubmitTeam}
//           className="bg-green-500 text-white p-2 rounded w-full mt-4"
//         >
//           Register Team
//         </button>
//       )}
//     </div>
//   );
// }

// export default UserSearch;









// import React, { useState } from "react";
// import axios from "axios";

// function UserSearch() {
//   const [emails, setEmails] = useState([""]);
//   const [teamname, setTeamname] = useState("");

//       const handleEmailChange = (index, value) => {
//         const newEmails = [...emails];
//         newEmails[index] = value;
//         setEmails(newEmails);
//       };

//       const handleAddEmailInput = () => {
//         setEmails([...emails, ""]);
//       };

//       const handleRemoveEmailInput = (index) => {
//         const newEmails = [...emails];
//         newEmails.splice(index, 1);
//         setEmails(newEmails);
//       };

//       const handleSubmitTeam = async () => {
//         const filteredEmails = emails.filter((email) => email.trim() !== "");

//         if (!teamname || filteredEmails.length === 0) {
//           alert(
//             "Please enter a team name and at least one valid participant email."
//           );
//           return;
//         }

//         try {
//           const token = localStorage.getItem("token");
//           if (!token) {
//             console.log("Token not found in localStorage");
//             return;
//           }

//           const response = await axios.post(
//             "http://localhost:3000/api/user/user-sreach",
//             {
//               teamname: teamname,
//               emails: filteredEmails,
//             },
//             {
//               headers: { token: token },
//             }
//           );

//           console.log("Team registered successfully:", response.data);
//           alert("Team registered successfully!");

//           // Clear all inputs
//           setTeamname("");
//           setEmails([""]);
//         } catch (error) {
//           console.error("Error registering team", error);
//           alert("Failed to register team");
//         }
//       };


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-xl mx-auto bg-white rounded-xl shadow-2xl p-8">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
//             Create Your Team
//           </h1>
//           <p className="text-gray-600">
//             Enter team name and participant emails to get started
//           </p>
//         </div>

//         {/* Team Name Input */}
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Team Name
//           </label>
//           <input
//             type="text"
//             value={teamname}
//             onChange={(e) => setTeamname(e.target.value)}
//             placeholder="Enter your team name"
//             className="shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 transition duration-150 ease-in-out"
//           />
//         </div>

//         {/* Email Inputs Section */}
//         <div className="space-y-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Team Members
//           </label>
//           {emails.map((email, index) => (
//             <div
//               key={index}
//               className="flex items-center space-x-2 animate-fade-in"
//             >
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => handleEmailChange(index, e.target.value)}
//                 placeholder="participant@example.com"
//                 className="shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
//               />
//               {emails.length > 1 && (
//                 <button
//                   onClick={() => handleRemoveEmailInput(index)}
//                   className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full bg-red-100 hover:bg-red-200 transition-colors duration-150 ease-in-out"
//                 >
//                   <svg
//                     className="h-5 w-5 text-red-500"
//                     fill="none"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path d="M6 18L18 6M6 6l12 12"></path>
//                   </svg>
//                 </button>
//               )}
//             </div>
//           ))}

//           {/* Add Email Button */}
//           <button
//             onClick={handleAddEmailInput}
//             className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
//           >
//             <svg
//               className="h-5 w-5 mr-2"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path d="M12 4v16m8-8H4"></path>
//             </svg>
//             Add Another Member
//           </button>
//         </div>

//         {/* Submit Button */}
//         <button
//           onClick={handleSubmitTeam}
//           className="mt-8 w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
//         >
//           <svg
//             className="h-5 w-5 mr-2"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path d="M5 13l4 4L19 7"></path>
//           </svg>
//           Register Team
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UserSearch;



// import React, { useState } from "react";
// import axios from "axios";

// function UserSearch() {
//   const [emails, setEmails] = useState([""]);
//   const [teamname, setTeamname] = useState("");

//   const handleEmailChange = (index, value) => {
//     const newEmails = [...emails];
//     newEmails[index] = value;
//     setEmails(newEmails);
//   };

//   const handleAddEmailInput = () => {
//     setEmails([...emails, ""]);
//   };

//   const handleRemoveEmailInput = (index) => {
//     const newEmails = [...emails];
//     newEmails.splice(index, 1);
//     setEmails(newEmails);
//   };

//   const handleSubmitTeam = async () => {
//     const filteredEmails = emails.filter((email) => email.trim() !== "");

//     if (!teamname || filteredEmails.length === 0) {
//       alert(
//         "Please enter a team name and at least one valid participant email."
//       );
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("Token not found in localStorage");
//         return;
//       }

//       const response = await axios.post(
//         "http://localhost:3000/api/user/user-sreach",
//         {
//           teamname: teamname,
//           emails: filteredEmails,
//         },
//         {
//           headers: { token: token },
//         }
//       );

//       console.log("Team registered successfully:", response.data);
//       alert("Team registered successfully!");

//       // Clear all inputs
//       setTeamname("");
//       setEmails([""]);
//     } catch (error) {
//       console.error("Error registering team", error);
//       alert("Failed to register team");
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
//       <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-10">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
//             Create Your Team
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Enter your team name and participant emails
//           </p>
//         </div>

//         {/* Team Name Input */}
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Team Name
//           </label>
//           <input
//             type="text"
//             value={teamname}
//             onChange={(e) => setTeamname(e.target.value)}
//             placeholder="Enter your team name"
//             className="shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 transition duration-150 ease-in-out"
//           />
//         </div>

//         {/* Email Inputs Section */}
//         <div className="space-y-4 mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Team Members
//           </label>
//           {emails.map((email, index) => (
//             <div
//               key={index}
//               className="flex items-center space-x-2 animate-fade-in"
//             >
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => handleEmailChange(index, e.target.value)}
//                 placeholder="participant@example.com"
//                 className="shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
//               />
//               {emails.length > 1 && (
//                 <button
//                   onClick={() => handleRemoveEmailInput(index)}
//                   className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full bg-red-100 hover:bg-red-200 transition-colors duration-150 ease-in-out"
//                 >
//                   <svg
//                     className="h-5 w-5 text-red-500"
//                     fill="none"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path d="M6 18L18 6M6 6l12 12"></path>
//                   </svg>
//                 </button>
//               )}
//             </div>
//           ))}

//           {/* Add Email Button */}
//           <button
//             onClick={handleAddEmailInput}
//             className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
//           >
//             <svg
//               className="h-5 w-5 mr-2"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path d="M12 4v16m8-8H4"></path>
//             </svg>
//             Add Another Member
//           </button>
//         </div>

//         {/* Submit Button */}
//         <button
//           onClick={handleSubmitTeam}
//           className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-lg font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
//         >
//           <svg
//             className="h-5 w-5 mr-2"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path d="M5 13l4 4L19 7"></path>
//           </svg>
//           Register Team
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UserSearch;




import React, { useState } from "react";
import axios from "axios";

function UserSearch() {
  const [emails, setEmails] = useState([""]);
  const [teamname, setTeamname] = useState("");

  const handleEmailChange = (index, value) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handleAddEmailInput = () => {
    setEmails([...emails, ""]);
  };

  const handleRemoveEmailInput = (index) => {
    const newEmails = [...emails];
    newEmails.splice(index, 1);
    setEmails(newEmails);
  };

  const handleSubmitTeam = async () => {
    const filteredEmails = emails.filter((email) => email.trim() !== "");

    if (!teamname || filteredEmails.length === 0) {
      alert(
        "Please enter a team name and at least one valid participant email."
      );
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Token not found in localStorage");
        return;
      }

      const response = await axios.post(
        "http://localhost:3000/api/user/user-sreach",
        {
          teamname: teamname,
          emails: filteredEmails,
        },
        {
          headers: { token: token },
        }
      );

      console.log("Team registered successfully:", response.data);
      alert("Team registered successfully!");

      // Clear all inputs
      setTeamname("");
      setEmails([""]);
    } catch (error) {
      console.error("Error registering team", error);
      alert("Failed to register team");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-12">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Create Your Team
          </h1>
          <p className="text-gray-600 text-2xl">
            Enter your team name and participant emails
          </p>
        </div>

        {/* Team Name Input */}
        <div className="mb-8">
          <label className="block text-gray-700 text-xl font-bold mb-3">
            Team Name
          </label>
          <input
            type="text"
            value={teamname}
            onChange={(e) => setTeamname(e.target.value)}
            placeholder="Enter your team name"
            className="shadow-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full text-lg border-gray-300 rounded-lg p-4 transition duration-150 ease-in-out"
          />
        </div>

        {/* Email Inputs Section */}
        <div className="space-y-6 mb-8">
          <label className="block text-gray-700 text-xl font-bold mb-3">
            Team Members
          </label>
          {emails.map((email, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 animate-fade-in"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => handleEmailChange(index, e.target.value)}
                placeholder="participant@example.com"
                className="shadow-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full text-lg border-gray-300 rounded-lg p-4"
              />
              {emails.length > 1 && (
                <button
                  onClick={() => handleRemoveEmailInput(index)}
                  className="flex-shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-100 hover:bg-red-200 transition-colors duration-150 ease-in-out"
                >
                  <svg
                    className="h-6 w-6 text-red-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              )}
            </div>
          ))}

          {/* Add Email Button */}
          <button
            onClick={handleAddEmailInput}
            className="mt-6 w-full inline-flex justify-center items-center px-5 py-3 border border-transparent text-xl font-semibold rounded-lg text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            <svg
              className="h-6 w-6 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 4v16m8-8H4"></path>
            </svg>
            Add Another Member
          </button>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmitTeam}
          className="w-full inline-flex justify-center items-center px-8 py-4 border border-transparent text-2xl font-bold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        >
          <svg
            className="h-6 w-6 mr-3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          Register Team
        </button>
      </div>
    </div>
  );
}

export default UserSearch;
