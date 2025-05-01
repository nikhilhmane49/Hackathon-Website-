// // Frontend - Profile.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import { useContext } from "react";
// import { Appcontext } from "../context/contextpra";
// import {
//   FaUser,
//   FaEnvelope,
//   FaLock,
//   FaPhone,
//   FaGithub,
//   FaLinkedin,
//   FaFileAlt,
// } from "react-icons/fa";

// const Profile = () => {


//   const { data } = useContext(Appcontext);
//   console.log(data);



//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     bio: "",
//     resume: "",
//     githubLink: "",
//     linkedinLink: "",
//     technicalSkills: "",
//     projectLinks: "",
//     education: { college: "", degree: "", year: "" }, // Removed 'type' field
//     contactNumber: "",
//   });

//   const [resumeName, setResumeName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [isEdit, setIsEdit] = useState(false);
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     if (id in formData.education) {
//       setFormData({
//         ...formData,
//         education: { ...formData.education, [id]: value },
//       });
//     } else {
//       setFormData({ ...formData, [id]: value });
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === "application/pdf") {
//       setFormData({ ...formData, resume: file });
//       setResumeName(file.name);
//     } else {
//       alert("Please upload a valid PDF file.");
//     }
//   };

  



//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess(false);

//     try {
//       // Validate required fields first
//       if (!formData.name || !formData.email) {
//         throw new Error("Name and email are required fields");
//       }

//       // Create FormData object
//       const userData = new FormData();

//       // Add basic fields - check for existence before adding
//       Object.keys(formData).forEach((key) => {
//         if (key !== "education" && key !== "resume" && formData[key]) {
//           userData.append(key, formData[key]);
//         }
//       });

//       // Handle technical skills
//       if (formData.technicalSkills) {
//         const skills = formData.technicalSkills
//           .split(",")
//           .map((skill) => skill.trim())
//           .filter(Boolean);
//         userData.append("technicalSkills", JSON.stringify(skills));
//       }

//       // Handle project links
//       if (formData.projectLinks) {
//         const links = formData.projectLinks
//           .split(",")
//           .map((link) => link.trim())
//           .filter(Boolean);
//         userData.append("projectLinks", JSON.stringify(links));
//       }

//       // Handle education - only append if at least one field is filled
//       if (
//         formData.education.college ||
//         formData.education.degree ||
//         formData.education.year
//       ) {
//         const education = {
//           college: formData.education.college || "",
//           degree: formData.education.degree || "",
//           year: formData.education.year
//             ? parseInt(formData.education.year)
//             : null,
//         };
//         userData.append("education", JSON.stringify(education));
//       }

//       // Handle resume file
//       if (formData.resume instanceof File) {
//         userData.append("resume", formData.resume);
//       }

//       // Get token from localStorage
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("Authentication token not found");
//       }

//       // Make API request
//       const response = await axios({
//         method: "POST",
//         url: `${import.meta.env.VITE_BACKEND_URL}/api/user/user-update`,
//         data: userData,
//         headers: {
//           token: token,
//         },
//         validateStatus: function (status) {
//           return status < 500; // Resolve only if status code is less than 500
//         },
//       });

//       if (response.status === 200) {
//         setSuccess(true);
//         setIsEdit(false);
//         // Optionally refresh user data
//         // await fetchUserData();
//       } else {
//         throw new Error(response.data.message || "Failed to update profile");
//       }
//     } catch (err) {
//       console.error("Error details:", err);
//       setError(
//         err.message || "Something went wrong while updating the profile"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Add a function to handle edit mode
//   const toggleEditMode = () => {
//     if (isEdit) {
//       // If leaving edit mode, reset form
//       handleReset();
//     } else {
//       // If entering edit mode, populate form with current data
//       setFormData({
//         name: data.name || "",
//         email: data.email || "",
//         bio: data.bio || "",
//         githubLink: data.githubLink || "",
//         linkedinLink: data.linkedinLink || "",
//         technicalSkills: Array.isArray(data.technicalSkills)
//           ? data.technicalSkills.join(", ")
//           : "",
//         projectLinks: Array.isArray(data.projectLinks)
//           ? data.projectLinks.join(", ")
//           : "",
//         education: {
//           college: data.education?.college || "",
//           degree: data.education?.degree || "",
//           year: data.education?.year || "",
//         },
//         contactNumber: data.contactNumber || "",
//       });
//     }
//     setIsEdit(!isEdit);
//   };

//   // Add loading state UI
//   const LoadingSpinner = () => (
//     <div className="flex justify-center items-center">
//       <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
//     </div>
//   );

//   // // Modify the form buttons section
//   // return (
//   //   // ... rest of your JSX ...

//   //   <div className="flex gap-4 mt-6">
//   //     {!isEdit ? (
//   //       <button
//   //         type="button"
//   //         onClick={toggleEditMode}
//   //         className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
//   //       >
//   //         Edit Profile
//   //       </button>
//   //     ) : (
//   //       <>
//   //         <button
//   //           type="submit"
//   //           disabled={loading}
//   //           className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition disabled:bg-gray-400"
//   //         >
//   //           {loading ? <LoadingSpinner /> : "Save Changes"}
//   //         </button>
//   //         <button
//   //           type="button"
//   //           onClick={toggleEditMode}
//   //           className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
//   //         >
//   //           Cancel
//   //         </button>
//   //       </>
//   //     )}
//   //   </div>

//   //   // ... rest of your JSX ...
//   // );


//   const handleReset = () => {
//     setFormData({
//       name: "",
//       email: "",
//       bio: "",
//       resume: "",
//       githubLink: "",
//       linkedinLink: "",
//       technicalSkills: "",
//       projectLinks: "",
//       education: { college: "", degree: "", year: "" },
//       contactNumber: "",
//     });
//     setResumeName("");
//     setError("");
//     setSuccess(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-4xl bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-10 transition-all duration-300 hover:shadow-2xl">
//         <h1 className="text-4xl font-bold text-blue-600 mb-2">
//           Create Your Profile
//         </h1>
//         <p className="text-gray-600 mb-8 text-lg">
//           Boost your presence with a professional-looking profile.
//         </p>

//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}

//         {success && (
//           <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
//             Profile updated successfully!
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-10">
//           {/* Basic Info */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               {
//                 id: "name",
//                 icon: <FaUser />,
//                 label: "Full Name",
//                 type: "text",
//               },
//               {
//                 id: "email",
//                 icon: <FaEnvelope />,
//                 label: "Email",
//                 type: "email",
//               },
//               {
//                 id: "contactNumber",
//                 icon: <FaPhone />,
//                 label: "Contact Number",
//                 type: "tel",
//               },
//             ].map(({ id, icon, label, type }) => (
//               <div key={id}>
//                 <label
//                   htmlFor={id}
//                   className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"
//                 >
//                   {icon} {label}
//                 </label>

//                 {isEdit ? (
//                   <input
//                     type={type}
//                     id={id}
//                     value={formData[id]}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//                   />
//                 ) : (
//                   <p className="text-gray-600">{data[id] || "Not provided."}</p>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Bio */}
//           <div>
//             <label
//               htmlFor="bio"
//               className="block text-sm font-semibold text-gray-700 mb-2"
//             >
//               Bio
//             </label>
//             {isEdit ? (
//               <textarea
//                 id="bio"
//                 rows="4"
//                 value={formData.bio}
//                 onChange={handleChange}
//                 placeholder="Tell us about yourself..."
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//               ></textarea>
//             ) : (
//               <p className="text-gray-600">{data.bio || "No bio provided."}</p>
//             )}
//           </div>

//           {/* Education Section */}
//           <div>
//             <h2 className="text-xl font-bold text-gray-800 border-b pb-1 mb-4">
//               Education
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {[
//                 {
//                   id: "college",
//                   label: "College/University",
//                   placeholder: "College Name",
//                   type: "text",
//                 },
//                 {
//                   id: "degree",
//                   label: "Degree",
//                   placeholder: "e.g. B.Tech, MBA",
//                   type: "text",
//                 },
//                 {
//                   id: "year",
//                   label: "Graduation Year",
//                   placeholder: "Year",
//                   type: "number",
//                 },
//               ].map(({ id, label, placeholder, type }) => (
//                 <div key={id}>
//                   <label
//                     htmlFor={id}
//                     className="text-sm font-semibold text-gray-700 mb-1"
//                   >
//                     {label}
//                   </label>

//                   {isEdit ? (
//                     <input
//                       type={type}
//                       id={id}
//                       value={formData.education[id]}
//                       onChange={handleChange}
//                       placeholder={placeholder}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//                     />
//                   ) : (
//                     <p className="text-gray-600">
//                       {data.education?.[id] || "Not provided."}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Links */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               {
//                 id: "githubLink",
//                 icon: <FaGithub />,
//                 placeholder: "GitHub Profile URL",
//               },
//               {
//                 id: "linkedinLink",
//                 icon: <FaLinkedin />,
//                 placeholder: "LinkedIn Profile URL",
//               },
//             ].map(({ id, icon, placeholder }) => (
//               <div key={id}>
//                 <label
//                   htmlFor={id}
//                   className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"
//                 >
//                   {icon} {id === "githubLink" ? "GitHub" : "LinkedIn"}
//                 </label>

//                 {isEdit ? (
//                   <input
//                     type="url"
//                     id={id}
//                     value={formData[id]}
//                     onChange={handleChange}
//                     placeholder={placeholder}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//                   />
//                 ) : (
//                   <p className="text-blue-600 underline break-words">
//                     {data[id] ? (
//                       <a
//                         href={data[id]}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {data[id]}
//                       </a>
//                     ) : (
//                       "Not provided."
//                     )}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Skills & Projects */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               {
//                 id: "technicalSkills",
//                 label: "Technical Skills (comma-separated)",
//                 placeholder: "React, Node.js, Tailwind, etc.",
//               },
//               {
//                 id: "projectLinks",
//                 label: "Project Links (comma-separated)",
//                 placeholder: "https://project1.com, https://project2.com",
//               },
//             ].map(({ id, label, placeholder }) => {
//               const value = Array.isArray(data[id])
//                 ? data[id]
//                 : typeof data[id] === "string"
//                 ? data[id].split(",")
//                 : [];

//               return (
//                 <div key={id}>
//                   <label
//                     htmlFor={id}
//                     className="text-sm font-semibold text-gray-700 mb-1"
//                   >
//                     {label}
//                   </label>

//                   {isEdit ? (
//                     <input
//                       type="text"
//                       id={id}
//                       value={formData[id]}
//                       onChange={handleChange}
//                       placeholder={placeholder}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//                     />
//                   ) : id === "projectLinks" ? (
//                     <ul className="list-disc list-inside text-blue-600">
//                       {value.length > 0 ? (
//                         value.map((link, i) => (
//                           <li key={i}>
//                             <a
//                               href={link.trim()}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="underline break-words"
//                             >
//                               {link.trim()}
//                             </a>
//                           </li>
//                         ))
//                       ) : (
//                         <li>Not provided.</li>
//                       )}
//                     </ul>
//                   ) : (
//                     <p className="text-gray-600">
//                       {value.length > 0 ? value.join(", ") : "Not provided."}
//                     </p>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           {/* Resume */}
//           <div>
//             <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//               <FaFileAlt /> Upload Resume (PDF)
//             </label>

//             {isEdit ? (
//               <>
//                 <input
//                   type="file"
//                   id="resume"
//                   accept=".pdf"
//                   onChange={handleFileChange}
//                   className="w-full px-4 py-3 border border-dashed border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//                 />
//                 {resumeName && (
//                   <p className="text-sm text-gray-600 mt-1">
//                     File selected:{" "}
//                     <span className="font-medium">{resumeName}</span>
//                   </p>
//                 )}
//               </>
//             ) : (
//               <p className="text-gray-600">
//                 {data.resumeName ? (
//                   <>
//                     Resume Uploaded:{" "}
//                     <span className="font-medium">{data.resumeName}</span>
//                   </>
//                 ) : (
//                   "No resume uploaded."
//                 )}
//               </p>
//             )}
//           </div>

//           {/* Submit + Reset */}
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
//             {isEdit ? (
//               <>
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold w-full md:w-auto disabled:bg-blue-400"
//                 >
//                   {loading ? "Saving..." : "Save"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     handleReset();
//                     setIsEdit(false);
//                   }}
//                   className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-semibold w-full md:w-auto"
//                 >
//                   Cancel
//                 </button>
//               </>
//             ) : (
//               <button
//                 type="button"
//                 onClick={() => setIsEdit(true)}
//                 className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold w-full md:w-auto"
//               >
//                 Edit
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;




// Frontend - Profile.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import { useContext } from "react";
// import { Appcontext } from "../context/contextpra";
// import {
//   FaUser,
//   FaEnvelope,
//   FaLock,
//   FaPhone,
//   FaGithub,
//   FaLinkedin,
//   FaFileAlt,
// } from "react-icons/fa";

// const Profile = () => {
//   const { data } = useContext(Appcontext);
//   console.log(data);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "", // Added password to the initial state
//     bio: "",
//     resume: "",
//     githubLink: "",
//     linkedinLink: "",
//     technicalSkills: "",
//     projectLinks: "",
//     education: { college: "", degree: "", year: "" },
//     contactNumber: "",
//   });

//   const [resumeName, setResumeName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [isEdit, setIsEdit] = useState(false);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     if (id in formData.education) {
//       setFormData({
//         ...formData,
//         education: { ...formData.education, [id]: value },
//       });
//     } else {
//       setFormData({ ...formData, [id]: value });
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === "application/pdf") {
//       setFormData({ ...formData, resume: file });
//       setResumeName(file.name);
//     } else {
//       alert("Please upload a valid PDF file.");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess(false);

//     try {
//       // Validate required fields first
//       if (!formData.name || !formData.email) {
//         throw new Error("Name and email are required fields");
//       }

//       const userData = new FormData();

//       Object.keys(formData).forEach((key) => {
//         if (key !== "education" && key !== "resume" && formData[key]) {
//           userData.append(key, formData[key]);
//         }
//       });

//       if (formData.technicalSkills) {
//         const skills = formData.technicalSkills
//           .split(",")
//           .map((skill) => skill.trim())
//           .filter(Boolean);
//         userData.append("technicalSkills", JSON.stringify(skills));
//       }

//       if (formData.projectLinks) {
//         const links = formData.projectLinks
//           .split(",")
//           .map((link) => link.trim())
//           .filter(Boolean);
//         userData.append("projectLinks", JSON.stringify(links));
//       }

//       if (
//         formData.education.college ||
//         formData.education.degree ||
//         formData.education.year
//       ) {
//         const education = {
//           college: formData.education.college || "",
//           degree: formData.education.degree || "",
//           year: formData.education.year
//             ? parseInt(formData.education.year)
//             : null,
//         };
//         userData.append("education", JSON.stringify(education));
//       }

//       if (formData.resume instanceof File) {
//         userData.append("resume", formData.resume);
//       }

//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("Authentication token not found");
//       }

//       const response = await axios({
//         method: "POST",
//         url: `${import.meta.env.VITE_BACKEND_URL}/api/user/user-update`,
//         data: userData,
//         headers: {
//           token: token,
//         },
//         validateStatus: function (status) {
//           return status < 500;
//         },
//       });

//       if (response.status === 200) {
//         setSuccess(true);
//         setIsEdit(false);
//         // Optionally refresh user data
//         // await fetchUserData();
//       } else {
//         throw new Error(response.data.message || "Failed to update profile");
//       }
//     } catch (err) {
//       console.error("Error details:", err);
//       setError(
//         err.message || "Something went wrong while updating the profile"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const toggleEditMode = () => {
//     if (isEdit) {
//       handleReset();
//     } else {
//       setFormData({
//         name: data.name || "",
//         email: data.email || "",
//         password:data.password || "", // Reset password field when entering edit mode
//         bio: data.bio || "",
//         githubLink: data.githubLink || "",
//         linkedinLink: data.linkedinLink || "",
//         technicalSkills: Array.isArray(data.technicalSkills)
//           ? data.technicalSkills.join(", ")
//           : data.technicalSkills || "",
//         projectLinks: Array.isArray(data.projectLinks)
//           ? data.projectLinks.join(", ")
//           : data.projectLinks || "",
//         education: {
//           college: data.education?.college || "",
//           degree: data.education?.degree || "",
//           year: data.education?.year ? String(data.education.year) : "",
//         },
//         contactNumber: data.contactNumber || "",
//       });
//       setResumeName(data.resumeName || ""); // Set resume name if available
//     }
//     setIsEdit(!isEdit);
//   };

//   const LoadingSpinner = () => (
//     <div className="flex justify-center items-center">
//       <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
//     </div>
//   );

//   const handleReset = () => {
//     setFormData({
//       name: "",
//       email: "",
//       password: "", // Reset password on cancel
//       bio: "",
//       resume: "",
//       githubLink: "",
//       linkedinLink: "",
//       technicalSkills: "",
//       projectLinks: "",
//       education: { college: "", degree: "", year: "" },
//       contactNumber: "",
//     });
//     setResumeName("");
//     setError("");
//     setSuccess(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-4xl bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-10 transition-all duration-300 hover:shadow-2xl">
//         <h1 className="text-4xl font-bold text-blue-600 mb-2">
//           {isEdit ? "Edit Your Profile" : "Your Profile"}
//         </h1>
//         <p className="text-gray-600 mb-8 text-lg">
//           {isEdit
//             ? "Make changes to your profile information."
//             : "View and edit your profile details."}
//         </p>

//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}

//         {success && (
//           <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
//             Profile updated successfully!
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-10">
//           {/* Basic Info */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               {
//                 id: "name",
//                 icon: <FaUser />,
//                 label: "Full Name",
//                 type: "text",
//               },
//               {
//                 id: "email",
//                 icon: <FaEnvelope />,
//                 label: "Email",
//                 type: "email",
//                 readOnly: !isEdit, // Make email read-only if not in edit mode
//               },
//               {
//                 id: "contactNumber",
//                 icon: <FaPhone />,
//                 label: "Contact Number",
//                 type: "tel",
//               },
//             ].map(({ id, icon, label, type, readOnly }) => (
//               <div key={id}>
//                 <label
//                   htmlFor={id}
//                   className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"
//                 >
//                   {icon} {label}
//                 </label>

//                 {isEdit ? (
//                   <input
//                     type={type}
//                     id={id}
//                     value={formData[id]}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//                     readOnly={readOnly}
//                   />
//                 ) : (
//                   <p className="text-gray-600">{data[id] || "Not provided."}</p>
//                 )}
//               </div>
//             ))}
//             {isEdit && (
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"
//                 >
//                   <FaLock /> Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Leave blank to keep current password"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//                 />
//               </div>
//             )}
//           </div>

//           {/* Bio */}
//           <div>
//             <label
//               htmlFor="bio"
//               className="block text-sm font-semibold text-gray-700 mb-2"
//             >
//               Bio
//             </label>
//             {isEdit ? (
//               <textarea
//                 id="bio"
//                 rows="4"
//                 value={formData.bio}
//                 onChange={handleChange}
//                 placeholder="Tell us about yourself..."
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//               ></textarea>
//             ) : (
//               <p className="text-gray-600">{data.bio || "No bio provided."}</p>
//             )}
//           </div>

//           {/* Education Section */}
//           <div>
//             <h2 className="text-xl font-bold text-gray-800 border-b pb-1 mb-4">
//               Education
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {[
//                 {
//                   id: "college",
//                   label: "College/University",
//                   placeholder: "College Name",
//                   type: "text",
//                 },
//                 {
//                   id: "degree",
//                   label: "Degree",
//                   placeholder: "e.g. B.Tech, MBA",
//                   type: "text",
//                 },
//                 {
//                   id: "year",
//                   label: "Graduation Year",
//                   placeholder: "Year",
//                   type: "number",
//                 },
//               ].map(({ id, label, placeholder, type }) => (
//                 <div key={id}>
//                   <label
//                     htmlFor={id}
//                     className="text-sm font-semibold text-gray-700 mb-1"
//                   >
//                     {label}
//                   </label>

//                   {isEdit ? (
//                     <input
//                       type={type}
//                       id={id}
//                       value={formData.education[id]}
//                       onChange={handleChange}
//                       placeholder={placeholder}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//                     />
//                   ) : (
//                     <p className="text-gray-600">
//                       {data.education?.[id] || "Not provided."}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Links */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               {
//                 id: "githubLink",
//                 icon: <FaGithub />,
//                 placeholder: "GitHub Profile URL",
//               },
//               {
//                 id: "linkedinLink",
//                 icon: <FaLinkedin />,
//                 placeholder: "LinkedIn Profile URL",
//               },
//             ].map(({ id, icon, placeholder }) => (
//               <div key={id}>
//                 <label
//                   htmlFor={id}
//                   className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"
//                 >
//                   {icon} {id === "githubLink" ? "GitHub" : "LinkedIn"}
//                 </label>

//                 {isEdit ? (
//                   <input
//                     type="url"
//                     id={id}
//                     value={formData[id]}
//                     onChange={handleChange}
//                     placeholder={placeholder}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//                   />
//                 ) : (
//                   <p className="text-blue-600 underline break-words">
//                     {data[id] ? (
//                       <a
//                         href={data[id]}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {data[id]}
//                       </a>
//                     ) : (
//                       "Not provided."
//                     )}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Skills & Projects */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               {
//                 id: "technicalSkills",
//                 label: "Technical Skills (comma-separated)",
//                 placeholder: "React, Node.js, Tailwind, etc.",
//               },
//               {
//                 id: "projectLinks",
//                 label: "Project Links (comma-separated)",
//                 placeholder: "https://project1.com, https://project2.com",
//               },
//             ].map(({ id, label, placeholder }) => {
//               const value = Array.isArray(data[id])
//                 ? data[id]
//                 : typeof data[id] === "string"
//                 ? data[id].split(",")
//                 : [];

//               return (
//                 <div key={id}>
//                   <label
//                     htmlFor={id}
//                     className="text-sm font-semibold text-gray-700 mb-1"
//                   >
//                     {label}
//                   </label>

//                   {isEdit ? (
//                     <input
//                       type="text"
//                       id={id}
//                       value={formData[id]}
//                       onChange={handleChange}
//                       placeholder={placeholder}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//                     />
//                   ) : id === "projectLinks" ? (
//                     <ul className="list-disc list-inside text-blue-600">
//                       {value.length > 0 ? (
//                         value.map((link, i) => (
//                           <li key={i}>
//                             <a
//                               href={link.trim()}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="underline break-words"
//                             >
//                               {link.trim()}
//                             </a>
//                           </li>
//                         ))
//                       ) : (
//                         <li>Not provided.</li>
//                       )}
//                     </ul>
//                   ) : (
//                     <p className="text-gray-600">
//                       {value.length > 0 ? value.join(", ") : "Not provided."}
//                     </p>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           {/* Resume */}
//           <div>
//             <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//               <FaFileAlt /> Upload Resume (PDF)
//             </label>

//             {isEdit ? (
//               <>
//                 <input
//                   type="file"
//                   id="resume"
//                   accept=".pdf"
//                   onChange={handleFileChange}
//                   className="w-full px-4 py-3 border border-dashed border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//                 />
//                 {resumeName && (
//                   <p className="text-sm text-gray-600 mt-1">
//                     File selected:{" "}
//                     <span className="font-medium">{resumeName}</span>
//                   </p>
//                 )}
//                 {!resumeName && data.resumeName && (
//                   <p className="text-sm text-gray-600 mt-1">
//                     Current Resume:{" "}
//                     <span className="font-medium">{data.resumeName}</span>
//                   </p>
//                 )}
//                 {!resumeName && !data.resumeName && (
//                   <p className="text-sm text-gray-600 mt-1">
//                     No resume selected.
//                   </p>
//                 )}
//               </>
//             ) : (
//               <p className="text-gray-600">
//                 {data.resumeName ? (
//                   <>
//                     Resume Uploaded:{" "}
//                     <span className="font-medium">{data.resumeName}</span>
//                   </>
//                 ) : (
//                   "No resume uploaded."
//                 )}
//               </p>
//             )}
//           </div>

//           {/* Submit + Reset */}
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
//             {isEdit ? (
//               <>
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold w-full md:w-auto disabled:bg-blue-400"
//                 >
//                   {loading ? <LoadingSpinner /> : "Save"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleReset}
//                   className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-semibold w-full md:w-auto"
//                 >
//                   Reset
//                 </button>
//                 <button
//                   type="button"
//                   onClick={toggleEditMode}
//                   className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-semibold w-full md:w-auto"
//                 >
//                   Cancel
//                 </button>
//               </>
//             ) : (
//               <button
//                 type="button"
//                 onClick={toggleEditMode}
//                 className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold w-full md:w-auto"
//               >
//                 Edit
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;
















// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { Appcontext } from "../context/contextpra";
// import {
//   FaUser,
//   FaEnvelope,
//   FaLock,
//   FaPhone,
//   FaGithub,
//   FaLinkedin,
//   FaFileAlt,
// } from "react-icons/fa";

// const Profile = () => {
//   const { data } = useContext(Appcontext);
//   console.log(data);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "", // Added password to the initial state
//     bio: "",
//     resume: "",
//     githubLink: "",
//     linkedinLink: "",
//     technicalSkills: "",
//     projectLinks: "",
//     education: { college: "", degree: "", year: "" },
//     contactNumber: "",
//   });

//   const [resumeName, setResumeName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     if (data) {
//       setFormData({
//         name: data.name || "",
//         email: data.email || "",
//         password: "", // Keep password empty for editing
//         bio: data.bio || "",
//         githubLink: data.githubLink || "",
//         linkedinLink: data.linkedinLink || "",
//         technicalSkills: Array.isArray(data.technicalSkills)
//           ? data.technicalSkills.join(", ")
//           : data.technicalSkills || "",
//         projectLinks: Array.isArray(data.projectLinks)
//           ? data.projectLinks.join(", ")
//           : data.projectLinks || "",
//         education: {
//           college: data.education?.college || "",
//           degree: data.education?.degree || "",
//           year: data.education?.year ? String(data.education.year) : "",
//         },
//         contactNumber: data.contactNumber || "",
//       });
//       setResumeName(data.resumeName || "");
//     }
//   }, [data]);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     if (id in formData.education) {
//       setFormData({
//         ...formData,
//         education: { ...formData.education, [id]: value },
//       });
//     } else {
//       setFormData({ ...formData, [id]: value });
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === "application/pdf") {
//       setFormData({ ...formData, resume: file });
//       setResumeName(file.name);
//     } else {
//       alert("Please upload a valid PDF file.");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess(false);

//     try {
//       // Validate required fields first
//       if (!formData.name || !formData.email) {
//         throw new Error("Name and email are required fields");
//       }

//       const userData = new FormData();

//       Object.keys(formData).forEach((key) => {
//         if (key !== "education" && key !== "resume" && formData[key]) {
//           userData.append(key, formData[key]);
//         }
//       });

//       // if (formData.technicalSkills) {
//       //   const skills = formData.technicalSkills
//       //     .split(",")
//       //     .map((skill) => skill.trim())
//       //     .filter(Boolean);
//       //   try {
//       //     userData.append("technicalSkills", JSON.stringify(skills));
//       //   } catch (stringificationError) {
//       //     console.error(
//       //       "Error stringifying technicalSkills:",
//       //       stringificationError
//       //     );
//       //     setError(
//       //       "Error processing technical skills. Please check your input."
//       //     );
//       //     setLoading(false);
//       //     return; // Prevent the API call if stringification fails
//       //   }
//       // } else {
//       //   userData.append("technicalSkills", JSON.stringify([])); // Send an empty array if no skills
//       // }

//       if (formData.technicalSkills) {
//         const skills = formData.technicalSkills
//           .split(",")
//           .map((skill) => skill.trim())
//           .filter(Boolean);
//         try {
//           userData.append("technicalSkills", JSON.stringify(skills));
//         } catch (stringificationError) {
//           console.error(
//             "Error stringifying technicalSkills:",
//             stringificationError
//           );
//           setError(
//             "Error processing technical skills. Please check your input."
//           );
//           setLoading(false);
//           return; // Prevent the API call if stringification fails
//         }
//       } else {
//         userData.append("technicalSkills", JSON.stringify([])); // Send an empty array if no skills
//       }



//       if (formData.projectLinks) {
//         const links = formData.projectLinks
//           .split(",")
//           .map((link) => link.trim())
//           .filter(Boolean);
//         userData.append("projectLinks", JSON.stringify(links));
//       }

//       if (
//         formData.education.college ||
//         formData.education.degree ||
//         formData.education.year
//       ) {
//         const education = {
//           college: formData.education.college || "",
//           degree: formData.education.degree || "",
//           year: formData.education.year
//             ? parseInt(formData.education.year)
//             : null,
//         };
//         userData.append("education", JSON.stringify(education));
//       }

//       if (formData.resume instanceof File) {
//         userData.append("resume", formData.resume);
//       }

//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("Authentication token not found");
//       }

//       const response = await axios({
//         method: "POST",
//         url: `${import.meta.env.VITE_BACKEND_URL}/api/user/user-update`,
//         data: userData,
//         headers: {
//           token: token,
//         },
//         validateStatus: function (status) {
//           return status < 500;
//         },
//       });

//       if (response.status === 200) {
//         setSuccess(true);
//         // Optionally refresh user data
//         // await fetchUserData();
//       } else {
//         throw new Error(response.data.message || "Failed to update profile");
//       }
//     } catch (err) {
//       console.error("Error details:", err);
//       setError(
//         err.message || "Something went wrong while updating the profile"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const LoadingSpinner = () => (
//     <div className="flex justify-center items-center">
//       <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
//     </div>
//   );

//   const handleReset = () => {
//     setFormData({
//       name: data?.name || "",
//       email: data?.email || "",
//       password: "", // Reset password on cancel
//       bio: data?.bio || "",
//       resume: "",
//       githubLink: data?.githubLink || "",
//       linkedinLink: data?.linkedinLink || "",
//       technicalSkills: Array.isArray(data?.technicalSkills)
//         ? data.technicalSkills.join(", ")
//         : data?.technicalSkills || "",
//       projectLinks: Array.isArray(data?.projectLinks)
//         ? data.projectLinks.join(", ")
//         : data?.projectLinks || "",
//       education: {
//         college: data?.education?.college || "",
//         degree: data?.education?.degree || "",
//         year: data?.education?.year ? String(data.education.year) : "",
//       },
//       contactNumber: data?.contactNumber || "",
//     });
//     setResumeName(data?.resumeName || "");
//     setError("");
//     setSuccess(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-4xl bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-10 transition-all duration-300 hover:shadow-2xl">
//         <h1 className="text-4xl font-bold text-blue-600 mb-2">
//           Edit Your Profile
//         </h1>
//         <p className="text-gray-600 mb-8 text-lg">
//           Make changes to your profile information.
//         </p>

//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}

//         {success && (
//           <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
//             Profile updated successfully!
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-10">
//           {/* Basic Info */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               {
//                 id: "name",
//                 icon: <FaUser />,
//                 label: "Full Name",
//                 type: "text",
//               },
//               {
//                 id: "email",
//                 icon: <FaEnvelope />,
//                 label: "Email",
//                 type: "email",
//               },
//               {
//                 id: "contactNumber",
//                 icon: <FaPhone />,
//                 label: "Contact Number",
//                 type: "tel",
//               },
//             ].map(({ id, icon, label, type }) => (
//               <div key={id}>
//                 <label
//                   htmlFor={id}
//                   className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"
//                 >
//                   {icon} {label}
//                 </label>
//                 <input
//                   type={type}
//                   id={id}
//                   value={formData[id]}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//                 />
//               </div>
//             ))}
//             <div>
//               <label
//                 htmlFor="password"
//                 className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"
//               >
//                 <FaLock /> Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Leave blank to keep current password"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//               />
//             </div>
//           </div>

//           {/* Bio */}
//           <div>
//             <label
//               htmlFor="bio"
//               className="block text-sm font-semibold text-gray-700 mb-2"
//             >
//               Bio
//             </label>
//             <textarea
//               id="bio"
//               rows="4"
//               value={formData.bio}
//               onChange={handleChange}
//               placeholder="Tell us about yourself..."
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//             ></textarea>
//           </div>

//           {/* Education Section */}
//           <div>
//             <h2 className="text-xl font-bold text-gray-800 border-b pb-1 mb-4">
//               Education
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {[
//                 {
//                   id: "college",
//                   label: "College/University",
//                   placeholder: "College Name",
//                   type: "text",
//                 },
//                 {
//                   id: "degree",
//                   label: "Degree",
//                   placeholder: "e.g. B.Tech, MBA",
//                   type: "text",
//                 },
//                 {
//                   id: "year",
//                   label: "Graduation Year",
//                   placeholder: "Year",
//                   type: "number",
//                 },
//               ].map(({ id, label, placeholder, type }) => (
//                 <div key={id}>
//                   <label
//                     htmlFor={id}
//                     className="text-sm font-semibold text-gray-700 mb-1"
//                   >
//                     {label}
//                   </label>
//                   <input
//                     type={type}
//                     id={id}
//                     value={formData.education[id]}
//                     onChange={handleChange}
//                     placeholder={placeholder}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Links */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               {
//                 id: "githubLink",
//                 icon: <FaGithub />,
//                 placeholder: "GitHub Profile URL",
//               },
//               {
//                 id: "linkedinLink",
//                 icon: <FaLinkedin />,
//                 placeholder: "LinkedIn Profile URL",
//               },
//             ].map(({ id, icon, placeholder }) => (
//               <div key={id}>
//                 <label
//                   htmlFor={id}
//                   className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"
//                 >
//                   {icon} {id === "githubLink" ? "GitHub" : "LinkedIn"}
//                 </label>
//                 <input
//                   type="url"
//                   id={id}
//                   value={formData[id]}
//                   onChange={handleChange}
//                   placeholder={placeholder}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Skills & Projects */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               {
//                 id: "technicalSkills",
//                 label: "Technical Skills (comma-separated)",
//                 placeholder: "React, Node.js, Tailwind, etc.",
//               },
//               {
//                 id: "projectLinks",
//                 label: "Project Links (comma-separated)",
//                 placeholder: "https://project1.com, https://project2.com",
//               },
//             ].map(({ id, label, placeholder }) => (
//               <div key={id}>
//                 <label
//                   htmlFor={id}
//                   className="text-sm font-semibold text-gray-700 mb-1"
//                 >
//                   {label}
//                 </label>
//                 <input
//                   type="text"
//                   id={id}
//                   value={formData[id]}
//                   onChange={handleChange}
//                   placeholder={placeholder}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Resume */}
//           <div>
//             <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//               <FaFileAlt /> Upload Resume (PDF)
//             </label>
//             <input
//               type="file"
//               id="resume"
//               accept=".pdf"
//               onChange={handleFileChange}
//               className="w-full px-4 py-3 border border-dashed border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//             />
//             {resumeName && (
//               <p className="text-sm text-gray-600 mt-1">
//                 File selected: <span className="font-medium">{resumeName}</span>
//               </p>
//             )}
//             {data?.resumeName && !resumeName && (
//               <p className="text-sm text-gray-600 mt-1">
//                 Current Resume:{" "}
//                 <span className="font-medium">{data.resumeName}</span>
//               </p>
//             )}
//           </div>

//           {/* Submit + Reset */}
//           <div className="flex flex-col md:flex-row items-center justify-end gap-4 mt-6">
//             <button
//               type="button"
//               onClick={handleReset}
//               className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-semibold w-full md:w-auto"
//             >
//               Reset
//             </button>
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold w-full md:w-auto disabled:bg-blue-400"
//             >
//               {loading ? <LoadingSpinner /> : "Save Changes"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;




import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";

import { Appcontext } from "../context/contextpra";

const Profile = () => {
  const { data } = useContext(Appcontext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    resume: "",
    githubLink: "",
    linkedinLink: "",
    technicalSkills: "",
    projectLinks: "",
    education: { college: "", degree: "", year: "" },
    contactNumber: "",
  });

  const [resumeName, setResumeName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name || "",
        email: data.email || "",
        password: "",
        bio: data.bio || "",
        githubLink: data.githubLink || "",
        linkedinLink: data.linkedinLink || "",
        technicalSkills: Array.isArray(data.technicalSkills)
          ? data.technicalSkills.join(", ")
          : data.technicalSkills || "",
        projectLinks: Array.isArray(data.projectLinks)
          ? data.projectLinks.join(", ")
          : data.projectLinks || "",
        education: {
          college: data.education?.college || "",
          degree: data.education?.degree || "",
          year: data.education?.year ? String(data.education.year) : "",
        },
        contactNumber: data.contactNumber || "",
        resume: "",
      });
      setResumeName(data.resumeName || "");
    }
  }, [data]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id in formData.education) {
      setFormData({
        ...formData,
        education: { ...formData.education, [id]: value },
      });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFormData({ ...formData, resume: file });
      setResumeName(file.name);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      if (!formData.name || !formData.email) {
        throw new Error("Name and email are required fields");
      }

      const userData = new FormData();

      // Append all fields except education, resume, technicalSkills, projectLinks
      Object.keys(formData).forEach((key) => {
        if (
          key !== "education" &&
          key !== "resume" &&
          key !== "technicalSkills" &&
          key !== "projectLinks" &&
          formData[key]
        ) {
          userData.append(key, formData[key]);
        }
      });

      // Handle technicalSkills
      const skills = formData.technicalSkills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean);
      userData.append("technicalSkills", JSON.stringify(skills));

      // Handle projectLinks
      const links = formData.projectLinks
        .split(",")
        .map((link) => link.trim())
        .filter(Boolean);
      userData.append("projectLinks", JSON.stringify(links));

      // Handle education
      if (
        formData.education.college ||
        formData.education.degree ||
        formData.education.year
      ) {
        const education = {
          college: formData.education.college || "",
          degree: formData.education.degree || "",
          year: formData.education.year
            ? parseInt(formData.education.year)
            : null,
        };
        userData.append("education", JSON.stringify(education));
      }

      // Handle resume
      if (formData.resume instanceof File) {
        userData.append("resume", formData.resume);
      }

      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Authentication token not found");
      }

      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_BACKEND_URL}/api/user/user-update`,
        data: userData,
        headers: {
          token: token,
        },
        validateStatus: function (status) {
          return status < 500;
        },
      });

      if (response.status === 200) {
        setSuccess(true);
      } else {
        throw new Error(response.data.message || "Failed to update profile");
      }
    } catch (err) {
      console.error("Error details:", err);
      setError(
        err.message || "Something went wrong while updating the profile"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: data?.name || "",
      email: data?.email || "",
      password: "",
      bio: data?.bio || "",
      resume: "",
      githubLink: data?.githubLink || "",
      linkedinLink: data?.linkedinLink || "",
      technicalSkills: Array.isArray(data?.technicalSkills)
        ? data.technicalSkills.join(", ")
        : data?.technicalSkills || "",
      projectLinks: Array.isArray(data?.projectLinks)
        ? data.projectLinks.join(", ")
        : data?.projectLinks || "",
      education: {
        college: data?.education?.college || "",
        degree: data?.education?.degree || "",
        year: data?.education?.year ? String(data.education.year) : "",
      },
      contactNumber: data?.contactNumber || "",
    });
    setResumeName(data?.resumeName || "");
    setError("");
    setSuccess(false);
  };



    const LoadingSpinner = () => (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-10 transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">
          Edit Your Profile
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Make changes to your profile information.
        </p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Profile updated successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                id: "name",
                icon: <FaUser />,
                label: "Full Name",
                type: "text",
              },
              {
                id: "email",
                icon: <FaEnvelope />,
                label: "Email",
                type: "email",
              },
              {
                id: "contactNumber",
                icon: <FaPhone />,
                label: "Contact Number",
                type: "tel",
              },
            ].map(({ id, icon, label, type }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"
                >
                  {icon} {label}
                </label>
                <input
                  type={type}
                  id={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"
              >
                <FaLock /> Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Leave blank to keep current password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
          </div>

          {/* Bio */}

          {/* Bio */}
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Bio
            </label>
            <textarea
              id="bio"
              rows="4"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            ></textarea>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 border-b pb-1 mb-4">
              Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  id: "college",
                  label: "College/University",
                  placeholder: "College Name",
                  type: "text",
                },
                {
                  id: "degree",
                  label: "Degree",
                  placeholder: "e.g. B.Tech, MBA",
                  type: "text",
                },
                {
                  id: "year",
                  label: "Graduation Year",
                  placeholder: "Year",
                  type: "number",
                },
              ].map(({ id, label, placeholder, type }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="text-sm font-semibold text-gray-700 mb-1"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    value={formData.education[id]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Social Links and Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                id: "githubLink",
                icon: <FaGithub />,
                label: "GitHub Profile",
                type: "url",
              },
              {
                id: "linkedinLink",
                icon: <FaLinkedin />,
                label: "LinkedIn Profile",
                type: "url",
              },
              {
                id: "technicalSkills",
                icon: <FaFileAlt />,
                label: "Technical Skills (comma separated)",
                type: "text",
              },
              {
                id: "projectLinks",
                icon: <FaFileAlt />,
                label: "Project Links (comma separated)",
                type: "text",
              },
            ].map(({ id, icon, label, type }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"
                >
                  {icon} {label}
                </label>
                <input
                  type={type}
                  id={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
            ))}
          </div>

          {/* Resume Upload */}
          <div>
            <label
              htmlFor="resume"
              className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"
            >
              <FaFileAlt /> Upload Resume (PDF)
            </label>
            <input
              type="file"
              id="resume"
              accept="application/pdf"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm"
            />
            {resumeName && (
              <p className="text-sm text-gray-600 mt-2">
                Uploaded: {resumeName}
              </p>
            )}
          </div>

          {/* Submit & Reset Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition flex items-center gap-2"
            >
              {loading ? <LoadingSpinner /> : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile; 