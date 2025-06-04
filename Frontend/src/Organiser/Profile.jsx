// import React, { useState , useContext, useEffect} from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// import { Appcontext } from "../context/contextpra";

// const Profile =  () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [formData, setFormData] = useState({
//     hackathonName: "",
//     collegeName: "",
//     collegeAddress: "",
//     mode: "online",
//     prizePool: "",
//     teamSize: {
//       min: "",
//       max: "",
//     },
//     registration: {
//       startDate: null,
//       endDate: null,
//     },
//     stages: [
//       {
//         roundTitle: "",
//         description: "",
//         participantTask: "",
//         impact: "",
//         timeline: {
//           stageStartDate: null,
//           stageEndDate: null,
//         },
//       },
//     ],
//     contactDetails: {
//       name: "",
//       email: "",
//       phone: "",
//     },
//     rules: [""],
//     brochure: "",
//     logo: "",
//     banner: "",
//     sponsors: [
//       {
//         name: "",
//         tier: "gold",
//         logo: "",
//       },
//     ],
//   });

//   const { backendurl, atoken, hacktondata } = useContext(Appcontext);

//   console.log(atoken);

//   const Onclickhandeler = async (e) => {
//     e.preventDefault();

//     try {
//       const form = new FormData();

//       form.append("hackathonName", formData.hackathonName);
//       form.append("collegeName", formData.collegeName);
//       form.append("collegeAddress", formData.collegeAddress);
//       form.append("mode", formData.mode);
//       form.append("prizePool", formData.prizePool);

//       form.append("teamSize", JSON.stringify(formData.teamSize));
//       form.append("registration", JSON.stringify(formData.registration));
//       form.append("stages", JSON.stringify(formData.stages));
//       form.append("contactDetails", JSON.stringify(formData.contactDetails));
//       form.append("rules", JSON.stringify(formData.rules));
//       form.append("brochure", formData.brochure);
//       form.append("logo", formData.logo);
//       form.append("banner", formData.banner);
//       form.append("sponsors", JSON.stringify(formData.sponsors));

//       // Append each sponsor logo as a file
//       formData.sponsors.forEach((sponsor, index) => {
//         if (sponsor.logo && typeof sponsor.logo === "object") {
//           form.append("sponsorsLogo", sponsor.logo); // name matches multer config
//         }
//       });

//       useEffect(() => {
//         if (hacktondata) {
//           setFormData({
//             hackathonName: hacktondata.hackathonName || "",
//             collegeName: hacktondata.collegeName || "",
//             collegeAddress:  hacktondata.collegeAddress || "",
//             mode: hacktondata.mode || "online",
//             prizePool: hacktondata.prizePool || "",
//             teamSize: {
//               min: hacktondata.teamSize?.min || "",
//               max: hacktondata.teamSize?.max || "",
//             },
//             registration: {
//               startDate: hacktondata.registration?.startDate || null,
//               endDate: hacktondata.registration?.endDate || null,
//             },
//             stages: [
//               {
//                 roundTitle: hacktondata.stages?.roundTitle || "",
//                 description: hacktondata.stages?.description || "",
//                 participantTask: hacktondata.stages?.participantTask || "",
//                 impact: hacktondata.stages?.impact || "",
//                 timeline: {
//                   stageStartDate: hacktondata.stages?.timeline?.stageStartDate || null,
//                   stageEndDate: hacktondata.stages?.timeline?.stageEndDate || null,
//                 },
//               },
//             ],
//             contactDetails: {
//               name: hacktondata.contactDetails?.name || "",
//               email: hacktondata.contactDetails?.email || "",
//               phone:  hacktondata.contactDetails?.phone || "",
//             },
//             rules: hacktondata.rules || [""],
//             brochure: hacktondata.brochure || null,
//             logo: hacktondata.logo || null,
//             banner: hacktondata.banner || null,

//             sponsors: [
//               {
//                 name: hacktondata.sponsors?.[0]?.name || "",
//                 tier: hacktondata.sponsors?.[0]?.tier || "gold",
//                 logo: hacktondata.sponsors?.[0]?.logo || "",
//               },
//             ],
//           });
//         }
//       }, [hacktondata]);

//       const response = await axios.post(
//         `${backendurl}/api/orgnizer/orgnizer-hackathon`,
//         form,
//         {
//           headers: {
//             atoken: atoken,
//           },
//         }
//       );

//       if (response.data.success) {
//         toast.success("Hackathon created successfully!");

//         // 🧹 Reset the form state
//         setFormData({
//           hackathonName: "",
//           collegeName: "",
//           collegeAddress: "",
//           mode: "online",
//           prizePool: "",
//           teamSize: {
//             min: "",
//             max: "",
//           },
//           registration: {
//             startDate: null,
//             endDate: null,
//           },
//           stages: [
//             {
//               roundTitle: "",
//               description: "",
//               participantTask: "",
//               impact: "",
//               timeline: {
//                 stageStartDate: null,
//                 stageEndDate: null,
//               },
//             },
//           ],
//           contactDetails: {
//             name: "",
//             email: "",
//             phone: "",
//           },
//           rules: [""],
//           brochure: null,
//           logo: null,
//           banner: null,

//           sponsors: [
//             {
//               name: "",
//               tier: "gold",
//               logo: "",
//             },
//           ],
//         });

//         // Optional: Reset stepper if using one
//         setActiveStep(0);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   const [errors, setErrors] = useState({});
//   const [preview, setPreview] = useState({
//     logo: null,
//     banner: null,
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name.includes(".")) {
//       const [parent, child] = name.split(".");
//       setFormData((prev) => ({
//         ...prev,
//         [parent]: {
//           ...prev[parent],
//           [child]: value,
//         },
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   // Handle nested objects like teamSize, registration
//   const handleNestedChange = (section, field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [section]: {
//         ...prev[section],
//         [field]: value,
//       },
//     }));
//   };

//   const handleSponsorFileChange = (index, file) => {
//   if (!file) return;

//   setFormData((prev) => {
//     const updatedSponsors = [...prev.sponsors];
//     updatedSponsors[index] = {
//       ...updatedSponsors[index],
//       logo: file,
//     };

//     return {
//       ...prev,
//       sponsors: updatedSponsors,
//     };
//   });
// };

//   // Handle date inputs
//   const handleDateChange = (section, field, e) => {
//     const value = e.target.value;
//     if (section === "stages") {
//       const [index, subfield] = field.split(".");
//       const updatedStages = [...formData.stages];
//       if (!updatedStages[index].timeline) {
//         updatedStages[index].timeline = {};
//       }
//       updatedStages[index].timeline[subfield] = value;
//       setFormData((prev) => ({
//         ...prev,
//         stages: updatedStages,
//       }));
//     } else {
//       handleNestedChange(section, field, value);
//     }
//   };

//   // Handle sponsor input changes
//   const handleSponsorChange = (index, field, value) => {
//     const updatedSponsors = [...formData.sponsors];
//     updatedSponsors[index][field] = value;
//     setFormData((prev) => ({
//       ...prev,
//       sponsors: updatedSponsors,
//     }));
//   };

//   // Add a new sponsor input field
//   const addSponsorField = () => {
//     setFormData((prev) => ({
//       ...prev,
//       sponsors: [...prev.sponsors, { name: "", tier: "gold", logo: "" }],
//     }));
//   };

//   // Handle stage updates
//   const handleStageChange = (index, field, value) => {
//     const updatedStages = [...formData.stages];
//     if (field.includes(".")) {
//       const [parent, child] = field.split(".");
//       if (!updatedStages[index][parent]) {
//         updatedStages[index][parent] = {};
//       }
//       updatedStages[index][parent][child] = value;
//     } else {
//       updatedStages[index][field] = value;
//     }
//     setFormData((prev) => ({
//       ...prev,
//       stages: updatedStages,
//     }));
//   };

//   // Add a new stage
//   const addStage = () => {
//     setFormData((prev) => ({
//       ...prev,
//       stages: [
//         ...prev.stages,
//         {
//           roundTitle: "",
//           description: "",
//           participantTask: "",
//           impact: "",
//           timeline: {
//             startDate: null,
//             endDate: null,
//           },
//         },
//       ],
//     }));
//   };

//   // Remove a stage
//   const removeStage = (index) => {
//     if (formData.stages.length > 1) {
//       const updatedStages = [...formData.stages];
//       updatedStages.splice(index, 1);
//       setFormData((prev) => ({
//         ...prev,
//         stages: updatedStages,
//       }));
//     }
//   };

//   const removeSponsor = (index) => {
//     if (formData.sponsors.length > 1) {
//       const updatedSponsors = [...formData.sponsors];
//       updatedSponsors.splice(index, 1);
//       setFormData((prev) => ({
//         ...prev,
//         sponsors: updatedSponsors,
//       }));
//     }
//   };

//   // Rules change
//   const handleRuleChange = (index, value) => {
//     const updatedRules = [...formData.rules];
//     updatedRules[index] = value;
//     setFormData((prev) => ({
//       ...prev,
//       rules: updatedRules,
//     }));
//   };

//   const addRule = () => {
//     setFormData((prev) => ({
//       ...prev,
//       rules: [...prev.rules, ""],
//     }));
//   };

//   const removeRule = (index) => {
//     if (formData.rules.length > 1) {
//       const updatedRules = [...formData.rules];
//       updatedRules.splice(index, 1);
//       setFormData((prev) => ({
//         ...prev,
//         rules: updatedRules,
//       }));
//     }
//   };

//   // Handle file uploads
//   const handleFileChange = (field, file) => {
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setPreview((prev) => ({
//         ...prev,
//         [field]: imageUrl,
//       }));

//       // In a real app, you'd upload to a server and get a URL
//       // For now, just store the file object reference
//       setFormData((prev) => ({
//         ...prev,
//         [field]: file,
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     // Basic validation
//     if (!formData.hackathonName)
//       newErrors.hackathonName = "Hackathon name is required";
//     if (!formData.collegeName)
//       newErrors.collegeName = "College name is required";
//     if (!formData.prizePool) newErrors.prizePool = "Prize pool is required";

//     // Could add more validation here for each field

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleNext = () => {
//     if (validateForm()) {
//       setActiveStep((prevStep) => prevStep + 1);
//     }
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Submitted Data:", formData);
//       // Submit logic would go here
//       alert("Hackathon created successfully!");
//     }
//   };

//   const steps = [
//     "Basic Information",
//     "Stages & Timeline",
//     "Rules & Contact",
//     "Media & Preview",
//     "Add Sponsors",
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
//           <div className="flex items-center mb-6">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-8 w-8 text-indigo-600 mr-3"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M6 3.75A3.75 3.75 0 019.75 0h.5A3.75 3.75 0 0114 3.75v.5A3.75 3.75 0 0110.25 8h-.5A3.75 3.75 0 016 4.25v-.5zm7 6a1 1 0 00-.75.75v.5a1 1 0 00.75.75h.5a1 1 0 00.75-.75v-.5a1 1 0 00-.75-.75h-.5zM4.992 19h10.016a2 2 0 002-2V7a2 2 0 00-2-2H4.992a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <h1 className="text-3xl font-bold text-gray-900">
//               Create Your Hackathon
//             </h1>
//           </div>

//           <hr className="mb-6 border-gray-200" />

//           {/* Stepper */}
//           <div className="mb-8">
//             <div className="flex justify-between items-center">
//               {steps.map((step, index) => (
//                 <div key={index} className="flex flex-col items-center">
//                   <div
//                     className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                       activeStep > index
//                         ? "bg-indigo-600 text-white"
//                         : activeStep === index
//                         ? "bg-indigo-100 border-2 border-indigo-600 text-indigo-600"
//                         : "bg-gray-100 text-gray-500"
//                     }`}
//                   >
//                     {activeStep > index ? (
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     ) : (
//                       <span>{index + 1}</span>
//                     )}
//                   </div>
//                   <span
//                     className={`mt-2 text-sm ${
//                       activeStep >= index
//                         ? "text-indigo-600 font-medium"
//                         : "text-gray-500"
//                     }`}
//                   >
//                     {step}
//                   </span>
//                   {index < steps.length - 1 && (
//                     <div className="hidden sm:block absolute-center">
//                       <div
//                         className={`h-0.5 w-24 ${
//                           activeStep > index ? "bg-indigo-600" : "bg-gray-200"
//                         }`}
//                       ></div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <form onSubmit={handleSubmit}>
//             {activeStep === 0 && (
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">
//                   Hackathon Details
//                 </h2>

//                 <div className="grid grid-cols-1 gap-6">
//                   {/* Hackathon Name */}
//                   <div>
//                     <label
//                       htmlFor="hackathonName"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Hackathon Name
//                     </label>
//                     <input
//                       type="text"
//                       id="hackathonName"
//                       name="hackathonName"
//                       className={`w-full px-4 py-3 rounded-lg border ${
//                         errors.hackathonName
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
//                       placeholder="Enter your hackathon name"
//                       value={formData.hackathonName}
//                       onChange={handleChange}
//                     />
//                     {errors.hackathonName && (
//                       <p className="mt-1 text-sm text-red-600">
//                         {errors.hackathonName}
//                       </p>
//                     )}
//                   </div>

//                   {/* College Details */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label
//                         htmlFor="collegeName"
//                         className="block text-sm font-medium text-gray-700 mb-1"
//                       >
//                         College/University Name
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5 text-gray-400"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
//                           </svg>
//                         </div>
//                         <input
//                           type="text"
//                           id="collegeName"
//                           name="collegeName"
//                           className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
//                             errors.collegeName
//                               ? "border-red-500"
//                               : "border-gray-300"
//                           } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
//                           placeholder="Enter college name"
//                           value={formData.collegeName}
//                           onChange={handleChange}
//                         />
//                       </div>
//                       {errors.collegeName && (
//                         <p className="mt-1 text-sm text-red-600">
//                           {errors.collegeName}
//                         </p>
//                       )}
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="collegeAddress"
//                         className="block text-sm font-medium text-gray-700 mb-1"
//                       >
//                         College Address
//                       </label>
//                       <input
//                         type="text"
//                         id="collegeAddress"
//                         name="collegeAddress"
//                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//                         placeholder="Enter college address"
//                         value={formData.collegeAddress}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                   {/* Mode & Prize Pool */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label
//                         htmlFor="mode"
//                         className="block text-sm font-medium text-gray-700 mb-1"
//                       >
//                         Mode
//                       </label>
//                       <select
//                         id="mode"
//                         name="mode"
//                         className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//                         value={formData.mode}
//                         onChange={handleChange}
//                       >
//                         <option value="online">Online</option>
//                         <option value="offline">Offline</option>
//                         <option value="hybrid">Hybrid</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="prizePool"
//                         className="block text-sm font-medium text-gray-700 mb-1"
//                       >
//                         Prize Pool
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5 text-gray-400"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </div>
//                         <input
//                           type="text"
//                           id="prizePool"
//                           name="prizePool"
//                           className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
//                             errors.prizePool
//                               ? "border-red-500"
//                               : "border-gray-300"
//                           } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
//                           placeholder="Enter prize pool (e.g. $5,000)"
//                           value={formData.prizePool}
//                           onChange={handleChange}
//                         />
//                       </div>
//                       {errors.prizePool && (
//                         <p className="mt-1 text-sm text-red-600">
//                           {errors.prizePool}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Team Size */}
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800 mb-3">
//                       Team Size
//                     </h3>
//                     <div className="grid grid-cols-2 gap-4 md:gap-6">
//                       <div>
//                         <label
//                           htmlFor="teamSizeMin"
//                           className="block text-sm font-medium text-gray-700 mb-1"
//                         >
//                           Minimum Team Size
//                         </label>
//                         <div className="relative">
//                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-5 w-5 text-gray-400"
//                               viewBox="0 0 20 20"
//                               fill="currentColor"
//                             >
//                               <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
//                             </svg>
//                           </div>
//                           <input
//                             type="number"
//                             id="teamSizeMin"
//                             className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//                             placeholder="Min"
//                             value={formData.teamSize.min}
//                             onChange={(e) =>
//                               handleNestedChange(
//                                 "teamSize",
//                                 "min",
//                                 e.target.value
//                               )
//                             }
//                             min="1"
//                           />
//                         </div>
//                       </div>
//                       <div>
//                         <label
//                           htmlFor="teamSizeMax"
//                           className="block text-sm font-medium text-gray-700 mb-1"
//                         >
//                           Maximum Team Size
//                         </label>
//                         <div className="relative">
//                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-5 w-5 text-gray-400"
//                               viewBox="0 0 20 20"
//                               fill="currentColor"
//                             >
//                               <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
//                             </svg>
//                           </div>
//                           <input
//                             type="number"
//                             id="teamSizeMax"
//                             className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//                             placeholder="Max"
//                             value={formData.teamSize.max}
//                             onChange={(e) =>
//                               handleNestedChange(
//                                 "teamSize",
//                                 "max",
//                                 e.target.value
//                               )
//                             }
//                             min={formData.teamSize.min || "1"}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Registration Period */}
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800 mb-3">
//                       Registration Period
//                     </h3>
//                     <div className="grid grid-cols-2 gap-4 md:gap-6">
//                       <div>
//                         <label
//                           htmlFor="registrationStart"
//                           className="block text-sm font-medium text-gray-700 mb-1"
//                         >
//                           Start Date
//                         </label>
//                         <input
//                           type="date"
//                           id="registrationStart"
//                           className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//                           value={formData.registration.startDate || ""}
//                           onChange={(e) =>
//                             handleDateChange("registration", "startDate", e)
//                           }
//                         />
//                       </div>
//                       <div>
//                         <label
//                           htmlFor="registrationEnd"
//                           className="block text-sm font-medium text-gray-700 mb-1"
//                         >
//                           End Date
//                         </label>
//                         <input
//                           type="date"
//                           id="registrationEnd"
//                           className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//                           value={formData.registration.endDate || ""}
//                           onChange={(e) =>
//                             handleDateChange("registration", "endDate", e)
//                           }
//                           min={formData.registration.startDate}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeStep === 1 && (
//               <div>
//                 <div className="flex justify-between items-center mb-6">
//                   <h2 className="text-2xl font-bold text-gray-800">
//                     Stages & Rounds
//                   </h2>
//                   <button
//                     type="button"
//                     className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors"
//                     onClick={addStage}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5 mr-2"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     Add Stage
//                   </button>
//                 </div>

//                 {formData.stages.map((stage, index) => (
//                   <div
//                     key={index}
//                     className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6 overflow-hidden"
//                   >
//                     <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
//                       <h3 className="text-lg font-semibold text-indigo-900">
//                         Stage {index + 1}
//                       </h3>
//                       {formData.stages.length > 1 && (
//                         <button
//                           type="button"
//                           onClick={() => removeStage(index)}
//                           className="text-red-600 hover:text-red-800 focus:outline-none transition-colors p-1"
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </button>
//                       )}
//                     </div>

//                     <div className="p-6">
//                       <div className="grid grid-cols-1 gap-5">
//                         <div>
//                           <label
//                             htmlFor={`roundTitle-${index}`}
//                             className="block text-sm font-medium text-gray-700 mb-1"
//                           >
//                             Round Title
//                           </label>
//                           <input
//                             type="text"
//                             id={`roundTitle-${index}`}
//                             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//                             placeholder="Enter round title"
//                             value={stage.roundTitle}
//                             onChange={(e) =>
//                               handleStageChange(
//                                 index,
//                                 "roundTitle",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>

//                         <div>
//                           <label
//                             htmlFor={`description-${index}`}
//                             className="block text-sm font-medium text-gray-700 mb-1"
//                           >
//                             Description
//                           </label>
//                           <textarea
//                             id={`description-${index}`}
//                             rows="3"
//                             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//                             placeholder="Describe what this stage is about"
//                             value={stage.description}
//                             onChange={(e) =>
//                               handleStageChange(
//                                 index,
//                                 "description",
//                                 e.target.value
//                               )
//                             }
//                           ></textarea>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           <div>
//                             <label
//                               htmlFor={`participantTask-${index}`}
//                               className="block text-sm font-medium text-gray-700 mb-1"
//                             >
//                               Participant Task
//                             </label>
//                             <input
//                               type="text"
//                               id={`participantTask-${index}`}
//                               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//                               placeholder="What participants will do"
//                               value={stage.participantTask}
//                               onChange={(e) =>
//                                 handleStageChange(
//                                   index,
//                                   "participantTask",
//                                   e.target.value
//                                 )
//                               }
//                             />
//                           </div>

//                           <div>
//                             <label
//                               htmlFor={`impact-${index}`}
//                               className="block text-sm font-medium text-gray-700 mb-1"
//                             >
//                               Impact/Outcome
//                             </label>
//                             <input
//                               type="text"
//                               id={`impact-${index}`}
//                               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//                               placeholder="Expected outcomes"
//                               value={stage.impact}
//                               onChange={(e) =>
//                                 handleStageChange(
//                                   index,
//                                   "impact",
//                                   e.target.value
//                                 )
//                               }
//                             />
//                           </div>
//                         </div>

//                         <div>
//                           <h4 className="font-medium text-sm text-gray-700 mb-2">
//                             Timeline
//                           </h4>
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div>
//                               <label
//                                 htmlFor={`stageStartDate-${index}`}
//                                 className="block text-sm text-gray-500 mb-1"
//                               >
//                                 Start Date
//                               </label>
//                               <input
//                                 type="date"
//                                 id={`stageStartDate-${index}`}
//                                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//                                 value={stage.timeline?.stageStartDate || ""}
//                                 onChange={(e) =>
//                                   handleStageChange(
//                                     index,
//                                     "timeline.stageStartDate",
//                                     e.target.value
//                                   )
//                                 }
//                               />
//                             </div>

//                             <div>
//                               <label
//                                 htmlFor={`stageEndDate-${index}`}
//                                 className="block text-sm text-gray-500 mb-1"
//                               >
//                                 End Date
//                               </label>
//                               <input
//                                 type="date"
//                                 id={`stageEndDate-${index}`}
//                                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//                                 value={stage.timeline?.stageEndDate || ""}
//                                 onChange={(e) =>
//                                   handleStageChange(
//                                     index,
//                                     "timeline.stageEndDate",
//                                     e.target.value
//                                   )
//                                 }
//                                 min={stage.timeline?.stageStartDate}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {activeStep === 2 && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                   <div className="flex justify-between items-center mb-5">
//                     <h2 className="text-2xl font-bold text-gray-800 flex items-center">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6 mr-2 text-indigo-600"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//                         />
//                       </svg>
//                       Rules & Guidelines
//                     </h2>
//                     <button
//                       type="button"
//                       className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
//                       onClick={addRule}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4 mr-1"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       Add Rule
//                     </button>
//                   </div>

//                   <div className="space-y-3 mb-6">
//                     {formData.rules.map((rule, index) => (
//                       <div key={index} className="flex items-center">
//                         <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-800 text-xs font-medium mr-3">
//                           {index + 1}
//                         </span>
//                         <input
//                           type="text"
//                           className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//                           placeholder={`Rule ${index + 1}`}
//                           value={rule}
//                           onChange={(e) =>
//                             handleRuleChange(index, e.target.value)
//                           }
//                         />
//                         {formData.rules.length > 1 && (
//                           <button
//                             type="button"
//                             onClick={() => removeRule(index)}
//                             className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-5 w-5"
//                               viewBox="0 0 20 20"
//                               fill="currentColor"
//                             >
//                               <path
//                                 fillRule="evenodd"
//                                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                                 clipRule="evenodd"
//                               />
//                             </svg>
//                           </button>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 mr-2 text-indigo-600"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                       />
//                     </svg>
//                     Contact Details
//                   </h2>

//                   <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
//                     <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
//                       <h3 className="text-lg font-medium text-gray-800">
//                         Organizer Information
//                       </h3>
//                     </div>

//                     <div className="p-6 space-y-4">
//                       <div>
//                         <label
//                           htmlFor="contactName"
//                           className="block text-sm font-medium text-gray-700 mb-1"
//                         >
//                           Organizer Name
//                         </label>
//                         <input
//                           type="text"
//                           id="contactName"
//                           name="contactDetails.name"
//                           className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//                           placeholder="Enter name"
//                           value={formData.contactDetails.name}
//                           onChange={handleChange}
//                         />
//                       </div>

//                       <div>
//                         <label
//                           htmlFor="contactEmail"
//                           className="block text-sm font-medium text-gray-700 mb-1"
//                         >
//                           Email
//                         </label>
//                         <input
//                           type="email"
//                           id="contactEmail"
//                           name="contactDetails.email"
//                           className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//                           placeholder="Enter email address"
//                           value={formData.contactDetails.email}
//                           onChange={handleChange}
//                         />
//                       </div>

//                       <div>
//                         <label
//                           htmlFor="contactPhone"
//                           className="block text-sm font-medium text-gray-700 mb-1"
//                         >
//                           Phone
//                         </label>
//                         <input
//                           type="tel"
//                           id="contactPhone"
//                           name="contactDetails.phone"
//                           className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//                           placeholder="Enter phone number"
//                           value={formData.contactDetails.phone}
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeStep === 3 && (
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 mr-2 text-indigo-600"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
//                     />
//                   </svg>
//                   Media & Branding
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                   <div className="md:col-span-1">
//                     <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-full">
//                       <div className="p-6">
//                         <h3 className="text-lg font-medium text-gray-800 mb-4">
//                           Hackathon Logo
//                         </h3>

//                         <div
//                           className={`border-2 border-dashed rounded-lg ${
//                             preview.logo
//                               ? "border-indigo-300 bg-indigo-50"
//                               : "border-gray-300"
//                           } p-4 flex flex-col items-center justify-center h-48 mb-4 relative overflow-hidden`}
//                         >
//                           {preview.logo ? (
//                             <img
//                               src={preview.logo}
//                               alt="Logo preview"
//                               className="max-h-full max-w-full object-contain"
//                             />
//                           ) : (
//                             <>
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-12 w-12 text-gray-400 mb-2"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
//                                 />
//                               </svg>
//                               <p className="text-sm text-gray-500 text-center">
//                                 Drag & drop your logo or click to browse
//                               </p>
//                             </>
//                           )}
//                         </div>

//                         <label className="block">
//                           <span className="sr-only">Choose logo</span>
//                           <input
//                             type="file"
//                             className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
//                             accept="image/*"
//                             onChange={(e) =>
//                               handleFileChange("logo", e.target.files[0])
//                             }
//                           />
//                         </label>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="md:col-span-2">
//                     <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-full">
//                       <div className="p-6">
//                         <h3 className="text-lg font-medium text-gray-800 mb-4">
//                           Banner Image
//                         </h3>

//                         <div
//                           className={`border-2 border-dashed rounded-lg ${
//                             preview.banner
//                               ? "border-indigo-300 bg-indigo-50"
//                               : "border-gray-300"
//                           } p-4 flex flex-col items-center justify-center h-48 mb-4 relative overflow-hidden`}
//                         >
//                           {preview.banner ? (
//                             <img
//                               src={preview.banner}
//                               alt="Banner preview"
//                               className="absolute inset-0 w-full h-full object-cover"
//                             />
//                           ) : (
//                             <>
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-12 w-12 text-gray-400 mb-2"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
//                                 />
//                               </svg>
//                               <p className="text-sm text-gray-500 text-center">
//                                 Upload a banner image (recommended size:
//                                 1200×400px)
//                               </p>
//                             </>
//                           )}
//                         </div>

//                         <label className="block">
//                           <span className="sr-only">Choose banner image</span>
//                           <input
//                             type="file"
//                             className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
//                             accept="image/*"
//                             onChange={(e) =>
//                               handleFileChange("banner", e.target.files[0])
//                             }
//                           />
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* <div className="mb-6">
//                   <label
//                     htmlFor="brochure"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Brochure PDF URL (or upload PDF)
//                   </label>
//                   <div className="mt-1 flex rounded-md shadow-sm">
//                     <input
//                       type="text"
//                       name="brochure"
//                       id="brochure"
//                       className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 py-3"
//                       placeholder="https://example.com/your-brochure.pdf"
//                       value={formData.brochure}
//                       onChange={handleChange}
//                     />
//                     <label className="inline-flex items-center px-4 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-700 text-sm">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 mr-2 text-gray-400"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
//                         />
//                       </svg>
//                       Upload PDF
//                       <input
//                         type="file"
//                         className="sr-only"
//                         accept="application/pdf"
//                       />
//                     </label>
//                   </div>
//                 </div> */}

//                 <div className="mb-6">
//                   <label
//                     htmlFor="brochure"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Brochure PDF URL (or upload PDF)
//                   </label>
//                   <div className="mt-1 flex rounded-md shadow-sm">
//                     {/* Text input for brochure URL (optional) */}
//                     <input
//                       type="text"
//                       name="brochure"
//                       id="brochure"
//                       className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 py-3"
//                       placeholder="https://example.com/your-brochure.pdf"
//                       value={
//                         typeof formData.brochure === "string"
//                           ? formData.brochure
//                           : ""
//                       }
//                       onChange={(e) =>
//                         setFormData({ ...formData, brochure: e.target.value })
//                       }
//                     />

//                     {/* Upload button for PDF */}
//                     <label className="inline-flex items-center px-4 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-700 text-sm cursor-pointer">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 mr-2 text-gray-400"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
//                         />
//                       </svg>
//                       Upload PDF
//                       <input
//                         type="file"
//                         accept="application/pdf"
//                         className="sr-only"
//                         onChange={(e) => {
//                           const file = e.target.files[0];
//                           if (file) {
//                             setFormData({ ...formData, brochure: file });
//                           }
//                         }}
//                       />
//                     </label>
//                   </div>

//                   {/* Show uploaded file name for clarity */}
//                   {formData.brochure instanceof File && (
//                     <p className="text-sm text-gray-500 mt-2">
//                       Selected file: {formData.brochure.name}
//                     </p>
//                   )}
//                 </div>

//                 {/* Preview section */}
//                 <div className="mt-8 bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
//                   <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
//                     <h3 className="text-lg font-medium text-gray-900">
//                       Hackathon Preview
//                     </h3>
//                   </div>

//                   <div className="p-6">
//                     <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden mb-4">
//                       {preview.banner ? (
//                         <img
//                           src={preview.banner}
//                           alt="Banner preview"
//                           className="w-full h-full object-cover"
//                         />
//                       ) : (
//                         <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
//                           <h4 className="text-2xl font-bold text-white">
//                             {formData.hackathonName || "Your Hackathon Banner"}
//                           </h4>
//                         </div>
//                       )}

//                       {preview.logo && (
//                         <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white p-1 shadow-lg">
//                           <img
//                             src={preview.logo}
//                             alt="Logo preview"
//                             className="w-full h-full object-contain rounded-full"
//                           />
//                         </div>
//                       )}
//                     </div>

//                     <h3 className="text-xl font-bold text-gray-900 mb-1">
//                       {formData.hackathonName || "Your Hackathon Title"}
//                     </h3>

//                     <p className="text-gray-600 mb-3">
//                       Organized by {formData.collegeName || "Your Organization"}
//                     </p>

//                     <div className="flex flex-wrap gap-2 mb-4">
//                       <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 mr-1"
//                           viewBox="0 0 20 20"
//                           fill="currentColor"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                         Prize Pool: {formData.prizePool || "TBA"}
//                       </span>

//                       <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 mr-1"
//                           viewBox="0 0 20 20"
//                           fill="currentColor"
//                         >
//                           <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
//                         </svg>
//                         Team Size: {formData.teamSize.min || "?"} -{" "}
//                         {formData.teamSize.max || "?"}
//                       </span>

//                       <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-rose-100 text-rose-800">
//                         {formData.mode === "online"
//                           ? "Online"
//                           : formData.mode === "offline"
//                           ? "Offline"
//                           : "Hybrid"}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* {activeStep === 4 && (
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 mr-2 text-indigo-600"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
//                     />
//                   </svg>
//                   Add Sponsors
//                 </h2>
//                 <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     Sponsors
//                   </h3>

//                   {formData.sponsors.map((sponsor, index) => (
//                     <div
//                       key={index}
//                       className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end border p-4 rounded-lg"
//                     >
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Sponsor Name
//                         </label>
//                         <input
//                           type="text"
//                           value={sponsor.name}
//                           onChange={(e) =>
//                             handleSponsorChange(index, "name", e.target.value)
//                           }
//                           className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
//                           required
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Tier
//                         </label>
//                         <select
//                           value={sponsor.tier}
//                           onChange={(e) =>
//                             handleSponsorChange(index, "tier", e.target.value)
//                           }
//                           className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
//                         >
//                           <option value="platinum">Platinum</option>
//                           <option value="gold">Gold</option>
//                           <option value="silver">Silver</option>
//                         </select>
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Logo URL
//                         </label>
//                         <input
//                           type="text"
//                           value={sponsor.logo}
//                           onChange={(e) =>
//                             handleSponsorChange(index, "logo", e.target.value)
//                           }
//                           className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
//                         />
//                       </div>
//                     </div>
//                   ))}

//                   <button
//                     type="button"
//                     onClick={addSponsorField}
//                     className="mt-2 text-indigo-600 hover:underline text-sm"
//                   >
//                     + Add another sponsor
//                   </button>
//                 </div>
//               </div>
//             )} */}

//             {activeStep === 4 && (
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 mr-2 text-indigo-600"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
//                     />
//                   </svg>
//                   Add Sponsors
//                 </h2>

//                 <div className="bg-white p-6 rounded-xl shadow space-y-6">
//                   {formData.sponsors.map((sponsor, index) => (
//                     <div
//                       key={index}
//                       className="relative border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-4"
//                     >
//                       {/* Delete Icon - Top Right */}
//                       {formData.sponsors.length > 1 && (
//                         <button
//                           type="button"
//                           onClick={() => removeSponsor(index)}
//                           className="absolute top-3 right-3 text-red-600 hover:text-red-800 focus:outline-none transition-colors"
//                           title="Remove Sponsor"
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </button>
//                       )}

//                       <div className="text-indigo-700 font-semibold mb-2">
//                         Sponsor {index + 1}
//                       </div>

//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {/* Sponsor Name */}
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700">
//                             Sponsor Name
//                           </label>
//                           <input
//                             type="text"
//                             value={sponsor.name}
//                             onChange={(e) =>
//                               handleSponsorChange(index, "name", e.target.value)
//                             }
//                             className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             placeholder="Company Name"
//                             required
//                           />
//                         </div>

//                         {/* Sponsor Tier */}
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700">
//                             Sponsor Tier
//                           </label>
//                           <select
//                             value={sponsor.tier}
//                             onChange={(e) =>
//                               handleSponsorChange(index, "tier", e.target.value)
//                             }
//                             className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
//                           >
//                             <option value="platinum">Platinum</option>
//                             <option value="gold">Gold</option>
//                             <option value="silver">Silver</option>
//                           </select>
//                         </div>

//                         {/* Sponsor Logo Upload */}
//                         <div className="md:col-span-2">
//                           <label className="block text-sm font-medium text-gray-700">
//                             Sponsor Logo
//                           </label>
//                           <input
//                             type="file"
//                             accept="image/*"
//                             name={`sponsorsLogo`}
//                             onChange={(e) =>
//                               handleSponsorFileChange(index, e.target.files[0])
//                             }
//                             className="mt-1 w-full"
//                           />
//                           {sponsor.logo && typeof sponsor.logo === "object" && (
//                             <img
//                               src={URL.createObjectURL(sponsor.logo)}
//                               alt="Logo Preview"
//                               className="mt-2 h-16 object-contain"
//                             />
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ))}

//                   <button
//                     type="button"
//                     onClick={addSponsorField}
//                     className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors"
//                   >
//                     + Add another sponsor
//                   </button>
//                 </div>
//               </div>
//             )}

//             <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
//               <button
//                 type="button"
//                 onClick={handleBack}
//                 className={`px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
//                   activeStep === 0 ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//                 disabled={activeStep === 0}
//               >
//                 Back
//               </button>

//               {activeStep < steps.length - 1 ? (
//                 <button
//                   type="button"
//                   onClick={handleNext}
//                   className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   Next
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="ml-2 h-4 w-4"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
//                       clipRule="evenodd"
//                     />
//                     <path
//                       fillRule="evenodd"
//                       d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//               ) : (
//                 <button
//                   type="button"
//                   onClick={Onclickhandeler}
//                   className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform hover:scale-105"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="mr-2 h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M3 3a1 1 0 000 2h10a1 1 0 100-2H3zm0 4a1 1 0 000 2h10a1 1 0 100-2H3zm0 4a1 1 0 100 2h10a1 1 0 100-2H3z"
//                       clipRule="evenodd"
//                     />
//                     <path d="M15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
//                   </svg>
//                   Create Hackathon
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { Appcontext } from "../context/contextpra";

const Profile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [originalData, setOriginalData] = useState(null);

  const [formData, setFormData] = useState({
    hackathonName: "",
    collegeName: "",
    collegeAddress: "",
    mode: "online",
    prizePool: "",
    teamSize: {
      min: "",
      max: "",
    },
    registration: {
      startDate: null,
      endDate: null,
    },
    stages: [
      {
        roundTitle: "",
        description: "",
        participantTask: "",
        impact: "",
        timeline: {
          stageStartDate: null,
          stageEndDate: null,
        },
      },
    ],
    contactDetails: {
      name: "",
      email: "",
      phone: "",
    },
    rules: [""],
    brochure: "",
    logo: "",
    banner: "",
    sponsors: [
      {
        name: "",
        tier: "gold",
        logo: "",
      },
    ],
  });

  const { backendurl, atoken, hacktondata } = useContext(Appcontext);
 
  console.log("hackton", hacktondata);
  console.log(atoken);

  useEffect(() => {
    if (Array.isArray(hacktondata) && hacktondata.length > 0) {
      const firstHackathon = hacktondata[0]; // Access the first object

      setFormData({
        hackathonName: firstHackathon.hackathonName || "",
        collegeName: firstHackathon.collegeName || "",
        collegeAddress: firstHackathon.collegeAddress || "",
        mode: firstHackathon.mode || "online",
        prizePool: firstHackathon.prizePool || "",
        teamSize: {
          min: firstHackathon.teamSize?.min || "",
          max: firstHackathon.teamSize?.max || "",
        },
        registration: {
          startDate: firstHackathon.registration?.startDate || null,
          endDate: firstHackathon.registration?.endDate || null,
        },
        stages: Array.isArray(firstHackathon.stages)
          ? firstHackathon.stages.map((stage) => ({
              roundTitle: stage.roundTitle || "",
              description: stage.description || "",
              participantTask: stage.participantTask || "",
              impact: stage.impact || "",
              timeline: {
                stageStartDate: stage.timeline?.stageStartDate || null,
                stageEndDate: stage.timeline?.stageEndDate || null,
              },
            }))
          : [
              {
                roundTitle: firstHackathon.stages?.roundTitle || "",
                description: firstHackathon.stages?.description || "",
                participantTask: firstHackathon.stages?.participantTask || "",
                impact: firstHackathon.stages?.impact || "",
                timeline: {
                  stageStartDate:
                    firstHackathon.stages?.timeline?.stageStartDate || null,
                  stageEndDate:
                    firstHackathon.stages?.timeline?.stageEndDate || null,
                },
              },
            ],
        contactDetails: {
          name: firstHackathon.contactDetails?.name || "",
          email: firstHackathon.contactDetails?.email || "",
          phone: firstHackathon.contactDetails?.phone || "",
        },
        rules: firstHackathon.rules || [""],
        brochure: firstHackathon.brochure || "",
        logo: firstHackathon.logo || "",
        banner: firstHackathon.banner || "",
        sponsors: Array.isArray(firstHackathon.sponsors)
          ? firstHackathon.sponsors.map((s) => ({
              name: s.name || "",
              tier: s.tier || "gold",
              logo: s.logo || "",
            }))
          : [{ name: "", tier: "gold", logo: "" }],
      });

      setOriginalData(firstHackathon);
      setIsEdit(false);
      setPreview({
        logo: firstHackathon.logo || null,
        banner: firstHackathon.banner || null,
      });
    } else {
      // If no hackathon data available
      setIsEdit(true);
      setOriginalData(null);
      setFormData({
        hackathonName: "",
        collegeName: "",
        collegeAddress: "",
        mode: "online",
        prizePool: "",
        teamSize: { min: "", max: "" },
        registration: { startDate: null, endDate: null },
        stages: [
          {
            roundTitle: "",
            description: "",
            participantTask: "",
            impact: "",
            timeline: { stageStartDate: null, stageEndDate: null },
          },
        ],
        contactDetails: { name: "", email: "", phone: "" },
        rules: [""],
        brochure: "",
        logo: "",
        banner: "",
        sponsors: [{ name: "", tier: "gold", logo: "" }],
      });
      setPreview({ logo: null, banner: null });
    }
  }, [hacktondata]);


  // const Onclickhandeler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const form = new FormData();

  //     form.append("hackathonName", formData.hackathonName);
  //     form.append("collegeName", formData.collegeName);
  //     form.append("collegeAddress", formData.collegeAddress);
  //     form.append("mode", formData.mode);
  //     form.append("prizePool", formData.prizePool);

  //     form.append("teamSize", JSON.stringify(formData.teamSize));
  //     form.append("registration", JSON.stringify(formData.registration));
  //     form.append("stages", JSON.stringify(formData.stages));
  //     form.append("contactDetails", JSON.stringify(formData.contactDetails));
  //     form.append("rules", JSON.stringify(formData.rules));
  //     form.append("brochure", formData.brochure);
  //     form.append("logo", formData.logo);
  //     form.append("banner", formData.banner);
  //     form.append("sponsors", JSON.stringify(formData.sponsors));

  //     // Append each sponsor logo as a file
  //     formData.sponsors.forEach((sponsor, index) => {
  //       if (sponsor.logo && typeof sponsor.logo === "object") {
  //         form.append("sponsorsLogo", sponsor.logo); // name matches multer config
  //       }
  //     });

  //     //   if (hacktondata) {
  //     //     setFormData({
  //     //       hackathonName: hacktondata.hackathonName || "",
  //     //       collegeName: hacktondata.collegeName || "",
  //     //       collegeAddress: hacktondata.collegeAddress || "",
  //     //       mode: hacktondata.mode || "online",
  //     //       prizePool: hacktondata.prizePool || "",
  //     //       teamSize: {
  //     //         min: hacktondata.teamSize?.min || "",
  //     //         max: hacktondata.teamSize?.max || "",
  //     //       },
  //     //       registration: {
  //     //         startDate: hacktondata.registration?.startDate || null,
  //     //         endDate: hacktondata.registration?.endDate || null,
  //     //       },
  //     //       stages: [
  //     //         {
  //     //           roundTitle: hacktondata.stages?.roundTitle || "",
  //     //           description: hacktondata.stages?.description || "",
  //     //           participantTask: hacktondata.stages?.participantTask || "",
  //     //           impact: hacktondata.stages?.impact || "",
  //     //           timeline: {
  //     //             stageStartDate:
  //     //               hacktondata.stages?.timeline?.stageStartDate || null,
  //     //             stageEndDate:
  //     //               hacktondata.stages?.timeline?.stageEndDate || null,
  //     //           },
  //     //         },
  //     //       ],
  //     //       contactDetails: {
  //     //         name: hacktondata.contactDetails?.name || "",
  //     //         email: hacktondata.contactDetails?.email || "",
  //     //         phone: hacktondata.contactDetails?.phone || "",
  //     //       },
  //     //       rules: hacktondata.rules || [""],
  //     //       brochure: hacktondata.brochure || null,
  //     //       logo: hacktondata.logo || null,
  //     //       banner: hacktondata.banner || null,

  //     //       sponsors: [
  //     //         {
  //     //           name: hacktondata.sponsors?.[0]?.name || "",
  //     //           tier: hacktondata.sponsors?.[0]?.tier || "gold",
  //     //           logo: hacktondata.sponsors?.[0]?.logo || "",
  //     //         },
  //     //       ],
  //     //     });
  //     //   }
  //     // }, [hacktondata]);

  //     const response = await axios.post(
  //       `${backendurl}/api/orgnizer/orgnizer-hackathon`,
  //       form,
  //       {
  //         headers: {
  //           atoken: atoken,
  //         },
  //       }
  //     );

  //     if (response.data.success) {
  //       toast.success("Hackathon created successfully!");

  //       // 🧹 Reset the form state
  //       setFormData({
  //         hackathonName: "",
  //         collegeName: "",
  //         collegeAddress: "",
  //         mode: "online",
  //         prizePool: "",
  //         teamSize: {
  //           min: "",
  //           max: "",
  //         },
  //         registration: {
  //           startDate: null,
  //           endDate: null,
  //         },
  //         stages: [
  //           {
  //             roundTitle: "",
  //             description: "",
  //             participantTask: "",
  //             impact: "",
  //             timeline: {
  //               stageStartDate: null,
  //               stageEndDate: null,
  //             },
  //           },
  //         ],
  //         contactDetails: {
  //           name: "",
  //           email: "",
  //           phone: "",
  //         },
  //         rules: [""],
  //         brochure: null,
  //         logo: null,
  //         banner: null,

  //         sponsors: [
  //           {
  //             name: "",
  //             tier: "gold",
  //             logo: "",
  //           },
  //         ],
  //       });

  //       // Optional: Reset stepper if using one
  //       setActiveStep(0);
  //     } else {
  //       toast.error(response.data.message);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error(error.response?.data?.message || "Something went wrong");
  //   }
  // };

  const Onclickhandeler = async (e) => {
    if (e) e.preventDefault();
    if (!validateForm()) return;

    try {
      const form = new FormData();
      form.append("hackathonName", formData.hackathonName);
      form.append("collegeName", formData.collegeName);
      form.append("collegeAddress", formData.collegeAddress);
      form.append("mode", formData.mode);
      form.append("prizePool", formData.prizePool);
      form.append("teamSize", JSON.stringify(formData.teamSize));
      form.append("registration", JSON.stringify(formData.registration));
      form.append("stages", JSON.stringify(formData.stages));
      form.append("contactDetails", JSON.stringify(formData.contactDetails));
      form.append("rules", JSON.stringify(formData.rules));
      if (formData.brochure instanceof File) {
        form.append("brochure", formData.brochure);
      } else {
        form.append("brochure", formData.brochure || "");
      }
      if (formData.logo instanceof File) {
        form.append("logo", formData.logo);
      } else {
        form.append("logo", formData.logo || "");
      }
      if (formData.banner instanceof File) {
        form.append("banner", formData.banner);
      } else {
        form.append("banner", formData.banner || "");
      }
      form.append(
        "sponsors",
        JSON.stringify(
          formData.sponsors.map((s) => ({
            name: s.name,
            tier: s.tier,
            logo: typeof s.logo === "string" ? s.logo : "",
          }))
        )
      );
      // Append each sponsor logo as a file
      formData.sponsors.forEach((sponsor, index) => {
        if (sponsor.logo && typeof sponsor.logo === "object") {
          form.append("sponsorsLogo", sponsor.logo);
        }
      });

      let url = `${backendurl}/api/orgnizer/orgnizer-hackathon`;
      let method = "post";
      if (hacktondata && hacktondata._id) {
        url = `${backendurl}/api/orgnizer/orgnizer-hackathon/${hacktondata._id}`;
        method = "put";
      }

      const response = await axios({
        method,
        url,
        data: form,
        headers: { atoken },
      });

      if (response.data.success) {
        toast.success(
          hacktondata
            ? "Hackathon updated successfully!"
            : "Hackathon created successfully!"
        );
        setIsEdit(false);
        setActiveStep(0);
        // Optionally, you can refresh data here
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState({
    logo: null,
    banner: null,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle nested objects like teamSize, registration
  const handleNestedChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSponsorFileChange = (index, file) => {
    if (!file) return;

    setFormData((prev) => {
      const updatedSponsors = [...prev.sponsors];
      updatedSponsors[index] = {
        ...updatedSponsors[index],
        logo: file,
      };

      return {
        ...prev,
        sponsors: updatedSponsors,
      };
    });
  };

  // Handle date inputs
  const handleDateChange = (section, field, e) => {
    const value = e.target.value;
    if (section === "stages") {
      const [index, subfield] = field.split(".");
      const updatedStages = [...formData.stages];
      if (!updatedStages[index].timeline) {
        updatedStages[index].timeline = {};
      }
      updatedStages[index].timeline[subfield] = value;
      setFormData((prev) => ({
        ...prev,
        stages: updatedStages,
      }));
    } else {
      handleNestedChange(section, field, value);
    }
  };

  // Handle sponsor input changes
  const handleSponsorChange = (index, field, value) => {
    const updatedSponsors = [...formData.sponsors];
    updatedSponsors[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      sponsors: updatedSponsors,
    }));
  };

  // Add a new sponsor input field
  const addSponsorField = () => {
    setFormData((prev) => ({
      ...prev,
      sponsors: [...prev.sponsors, { name: "", tier: "gold", logo: "" }],
    }));
  };

  // Handle stage updates
  const handleStageChange = (index, field, value) => {
    const updatedStages = [...formData.stages];
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      if (!updatedStages[index][parent]) {
        updatedStages[index][parent] = {};
      }
      updatedStages[index][parent][child] = value;
    } else {
      updatedStages[index][field] = value;
    }
    setFormData((prev) => ({
      ...prev,
      stages: updatedStages,
    }));
  };

  // Add a new stage
  const addStage = () => {
    setFormData((prev) => ({
      ...prev,
      stages: [
        ...prev.stages,
        {
          roundTitle: "",
          description: "",
          participantTask: "",
          impact: "",
          timeline: {
            startDate: null,
            endDate: null,
          },
        },
      ],
    }));
  };

  // Remove a stage
  const removeStage = (index) => {
    if (formData.stages.length > 1) {
      const updatedStages = [...formData.stages];
      updatedStages.splice(index, 1);
      setFormData((prev) => ({
        ...prev,
        stages: updatedStages,
      }));
    }
  };

  const removeSponsor = (index) => {
    if (formData.sponsors.length > 1) {
      const updatedSponsors = [...formData.sponsors];
      updatedSponsors.splice(index, 1);
      setFormData((prev) => ({
        ...prev,
        sponsors: updatedSponsors,
      }));
    }
  };

  // Rules change
  const handleRuleChange = (index, value) => {
    const updatedRules = [...formData.rules];
    updatedRules[index] = value;
    setFormData((prev) => ({
      ...prev,
      rules: updatedRules,
    }));
  };

  const addRule = () => {
    setFormData((prev) => ({
      ...prev,
      rules: [...prev.rules, ""],
    }));
  };

  const removeRule = (index) => {
    if (formData.rules.length > 1) {
      const updatedRules = [...formData.rules];
      updatedRules.splice(index, 1);
      setFormData((prev) => ({
        ...prev,
        rules: updatedRules,
      }));
    }
  };

  // Handle file uploads
  const handleFileChange = (field, file) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview((prev) => ({
        ...prev,
        [field]: imageUrl,
      }));

      // In a real app, you'd upload to a server and get a URL
      // For now, just store the file object reference
      setFormData((prev) => ({
        ...prev,
        [field]: file,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Basic validation
    if (!formData.hackathonName)
      newErrors.hackathonName = "Hackathon name is required";
    if (!formData.collegeName)
      newErrors.collegeName = "College name is required";
    if (!formData.prizePool) newErrors.prizePool = "Prize pool is required";

    // Could add more validation here for each field

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Cancel Handler ---
  const handleCancel = () => {
    if (originalData) {
      setFormData({
        hackathonName: originalData.hackathonName || "",
        collegeName: originalData.collegeName || "",
        collegeAddress: originalData.collegeAddress || "",
        mode: originalData.mode || "online",
        prizePool: originalData.prizePool || "",
        teamSize: {
          min: originalData.teamSize?.min || "",
          max: originalData.teamSize?.max || "",
        },
        registration: {
          startDate: originalData.registration?.startDate || null,
          endDate: originalData.registration?.endDate || null,
        },
        stages: Array.isArray(originalData.stages)
          ? originalData.stages.map((stage) => ({
              roundTitle: stage.roundTitle || "",
              description: stage.description || "",
              participantTask: stage.participantTask || "",
              impact: stage.impact || "",
              timeline: {
                stageStartDate: stage.timeline?.stageStartDate || null,
                stageEndDate: stage.timeline?.stageEndDate || null,
              },
            }))
          : [
              {
                roundTitle: originalData.stages?.roundTitle || "",
                description: originalData.stages?.description || "",
                participantTask: originalData.stages?.participantTask || "",
                impact: originalData.stages?.impact || "",
                timeline: {
                  stageStartDate:
                    originalData.stages?.timeline?.stageStartDate || null,
                  stageEndDate:
                    originalData.stages?.timeline?.stageEndDate || null,
                },
              },
            ],
        contactDetails: {
          name: originalData.contactDetails?.name || "",
          email: originalData.contactDetails?.email || "",
          phone: originalData.contactDetails?.phone || "",
        },
        rules: originalData.rules || [""],
        brochure: originalData.brochure || "",
        logo: originalData.logo || "",
        banner: originalData.banner || "",
        sponsors: Array.isArray(originalData.sponsors)
          ? originalData.sponsors.map((s) => ({
              name: s.name || "",
              tier: s.tier || "gold",
              logo: s.logo || "",
            }))
          : [{ name: "", tier: "gold", logo: "" }],
      });
      setPreview({
        logo: originalData.logo ? originalData.logo : null,
        banner: originalData.banner ? originalData.banner : null,
      });
    }
    setIsEdit(false);
  };

  const handleNext = () => {
    if (validateForm()) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Submitted Data:", formData);
      // Submit logic would go here
      alert("Hackathon created successfully!");
    }
  };

  const steps = [
    "Basic Information",
    "Stages & Timeline",
    "Rules & Contact",
    "Media & Preview",
    "Add Sponsors",
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <div className="flex justify-end mb-4">
            {hacktondata && !isEdit && (
              <button
                onClick={() => setIsEdit(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <FaEdit /> Edit
              </button>
            )}
            {isEdit && hacktondata && (
              <>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mr-2 flex items-center gap-2"
                >
                  <FaTimes /> Cancel
                </button>
                <button
                  type="button"
                  onClick={Onclickhandeler}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaSave /> Save
                </button>
              </>
            )}
          </div>

          <div className="flex items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-indigo-600 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 3.75A3.75 3.75 0 019.75 0h.5A3.75 3.75 0 0114 3.75v.5A3.75 3.75 0 0110.25 8h-.5A3.75 3.75 0 016 4.25v-.5zm7 6a1 1 0 00-.75.75v.5a1 1 0 00.75.75h.5a1 1 0 00.75-.75v-.5a1 1 0 00-.75-.75h-.5zM4.992 19h10.016a2 2 0 002-2V7a2 2 0 00-2-2H4.992a2 2 0 00-2 2v10a2 2 0 002 2z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="text-3xl font-bold text-gray-900">
              Create Your Hackathon
            </h1>
          </div>

          <hr className="mb-6 border-gray-200" />

          {/* Stepper */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeStep > index
                        ? "bg-indigo-600 text-white"
                        : activeStep === index
                        ? "bg-indigo-100 border-2 border-indigo-600 text-indigo-600"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {activeStep > index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span
                    className={`mt-2 text-sm ${
                      activeStep >= index
                        ? "text-indigo-600 font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    {step}
                  </span>
                  {index < steps.length - 1 && (
                    <div className="hidden sm:block absolute-center">
                      <div
                        className={`h-0.5 w-24 ${
                          activeStep > index ? "bg-indigo-600" : "bg-gray-200"
                        }`}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {activeStep === 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Hackathon Details
                </h2>

                <div className="grid grid-cols-1 gap-6">
                  {/* Hackathon Name */}
                  <div>
                    <label
                      htmlFor="hackathonName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Hackathon Name
                    </label>
                    <input
                      type="text"
                      id="hackathonName"
                      name="hackathonName"
                      disabled={!isEdit}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.hackathonName
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950`}
                      placeholder="Enter your hackathon name"
                      value={formData.hackathonName}
                      onChange={handleChange}
                    />
                    {errors.hackathonName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.hackathonName}
                      </p>
                    )}
                  </div>

                  {/* College Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="collegeName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        College/University Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="collegeName"
                          name="collegeName"
                          disabled={!isEdit}
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                            errors.collegeName
                              ? "border-red-500"
                              : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950`}
                          placeholder="Enter college name"
                          value={formData.collegeName}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.collegeName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.collegeName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="collegeAddress"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        College Address
                      </label>
                      <input
                        type="text"
                        id="collegeAddress"
                        name="collegeAddress"
                        disabled={!isEdit}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                        placeholder="Enter college address"
                        value={formData.collegeAddress}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Mode & Prize Pool */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="mode"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Mode
                      </label>
                      <select
                        id="mode"
                        name="mode"
                        disabled={!isEdit}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                        value={formData.mode}
                        onChange={handleChange}
                      >
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                        <option value="hybrid">Hybrid</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="prizePool"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Prize Pool
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="prizePool"
                          name="prizePool"
                          disabled={!isEdit}
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                            errors.prizePool
                              ? "border-red-500"
                              : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950`}
                          placeholder="Enter prize pool (e.g. $5,000)"
                          value={formData.prizePool}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.prizePool && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.prizePool}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Team Size */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Team Size
                    </h3>
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label
                          htmlFor="teamSizeMin"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Minimum Team Size
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                          </div>
                          <input
                            type="number"
                            id="teamSizeMin"
                            disabled={!isEdit}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                            placeholder="Min"
                            value={formData.teamSize.min}
                            onChange={(e) =>
                              handleNestedChange(
                                "teamSize",
                                "min",
                                e.target.value
                              )
                            }
                            min="1"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="teamSizeMax"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Maximum Team Size
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                          </div>
                          <input
                            type="number"
                            id="teamSizeMax"
                            disabled={!isEdit}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                            placeholder="Max"
                            value={formData.teamSize.max}
                            onChange={(e) =>
                              handleNestedChange(
                                "teamSize",
                                "max",
                                e.target.value
                              )
                            }
                            min={formData.teamSize.min || "1"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Registration Period */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Registration Period
                    </h3>
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label
                          htmlFor="registrationStart"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Start Date
                        </label>
                        <input
                          type="date"
                          id="registrationStart"
                          disabled={!isEdit}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                          value={
                            formData.registration.startDate?.slice(0, 10) || ""
                          }
                          onChange={(e) =>
                            handleDateChange("registration", "startDate", e)
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="registrationEnd"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          End Date
                        </label>
                        <input
                          type="date"
                          id="registrationEnd"
                          disabled={!isEdit}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                          value={
                            formData.registration.endDate?.slice(0, 10) || ""
                          }
                          onChange={(e) =>
                            handleDateChange("registration", "endDate", e)
                          }
                          min={formData.registration.startDate}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 1 && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Stages & Rounds
                  </h2>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors"
                    onClick={addStage}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Add Stage
                  </button>
                </div>

                {formData.stages.map((stage, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-indigo-900">
                        Stage {index + 1}
                      </h3>
                      {formData.stages.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeStage(index)}
                          className="text-red-600 hover:text-red-800 focus:outline-none transition-colors p-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-5">
                        <div>
                          <label
                            htmlFor={`roundTitle-${index}`}
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Round Title
                          </label>
                          <input
                            type="text"
                            id={`roundTitle-${index}`}
                            disabled={!isEdit}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                            placeholder="Enter round title"
                            value={stage.roundTitle}
                            onChange={(e) =>
                              handleStageChange(
                                index,
                                "roundTitle",
                                e.target.value
                              )
                            }
                          />
                        </div>

                        <div>
                          <label
                            htmlFor={`description-${index}`}
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Description
                          </label>
                          <textarea
                            id={`description-${index}`}
                            disabled={!isEdit}
                            rows="3"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                            placeholder="Describe what this stage is about"
                            value={stage.description}
                            onChange={(e) =>
                              handleStageChange(
                                index,
                                "description",
                                e.target.value
                              )
                            }
                          ></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor={`participantTask-${index}`}
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Participant Task
                            </label>
                            <input
                              type="text"
                              id={`participantTask-${index}`}
                              disabled={!isEdit}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                              placeholder="What participants will do"
                              value={stage.participantTask}
                              onChange={(e) =>
                                handleStageChange(
                                  index,
                                  "participantTask",
                                  e.target.value
                                )
                              }
                            />
                          </div>

                          <div>
                            <label
                              htmlFor={`impact-${index}`}
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Impact/Outcome
                            </label>
                            <input
                              type="text"
                              id={`impact-${index}`}
                              disabled={!isEdit}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                              placeholder="Expected outcomes"
                              value={stage.impact}
                              onChange={(e) =>
                                handleStageChange(
                                  index,
                                  "impact",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-sm text-gray-700 mb-2">
                            Timeline
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label
                                htmlFor={`stageStartDate-${index}`}
                                className="block text-sm text-gray-500 mb-1"
                              >
                                Start Date
                              </label>
                              <input
                                type="date"
                                id={`stageStartDate-${index}`}
                                disabled={!isEdit}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                                value={
                                  stage.timeline?.stageStartDate.slice(0, 10) ||
                                  ""
                                }
                                onChange={(e) =>
                                  handleStageChange(
                                    index,
                                    "timeline.stageStartDate",
                                    e.target.value
                                  )
                                }
                              />
                            </div>

                            <div>
                              <label
                                htmlFor={`stageEndDate-${index}`}
                                className="block text-sm text-gray-500 mb-1"
                              >
                                End Date
                              </label>
                              <input
                                type="date"
                                id={`stageEndDate-${index}`}
                                disabled={!isEdit}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                                value={
                                  stage.timeline?.stageEndDate.slice(0, 10) ||
                                  ""
                                }
                                onChange={(e) =>
                                  handleStageChange(
                                    index,
                                    "timeline.stageEndDate",
                                    e.target.value
                                  )
                                }
                                min={stage.timeline?.stageStartDate}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeStep === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                      Rules & Guidelines
                    </h2>
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                      onClick={addRule}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Add Rule
                    </button>
                  </div>

                  <div className="space-y-3 mb-6">
                    {formData.rules.map((rule, index) => (
                      <div key={index} className="flex items-center">
                        <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-800 text-xs font-medium mr-3">
                          {index + 1}
                        </span>
                        <input
                          type="text"
                          disabled={!isEdit}
                          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950 "
                          placeholder={`Rule ${index + 1}`}
                          value={rule}
                          onChange={(e) =>
                            handleRuleChange(index, e.target.value)
                          }
                        />
                        {formData.rules.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeRule(index)}
                            className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Contact Details
                  </h2>

                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
                      <h3 className="text-lg font-medium text-gray-800">
                        Organizer Information
                      </h3>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <label
                          htmlFor="contactName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Organizer Name
                        </label>
                        <input
                          type="text"
                          id="contactName"
                          disabled={!isEdit}
                          name="contactDetails.name"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                          placeholder="Enter name"
                          value={formData.contactDetails.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contactEmail"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="contactEmail"
                          disabled={!isEdit}
                          name="contactDetails.email"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                          placeholder="Enter email address"
                          value={formData.contactDetails.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contactPhone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="contactPhone"
                          disabled={!isEdit}
                          name="contactDetails.phone"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950 "
                          placeholder="Enter phone number"
                          value={formData.contactDetails.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Media & Branding
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="md:col-span-1">
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-full">
                      <div className="p-6">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">
                          Hackathon Logo
                        </h3>

                        <div
                          className={`border-2 border-dashed rounded-lg ${
                            preview.logo
                              ? "border-indigo-300 bg-indigo-50"
                              : "border-gray-300"
                          } p-4 flex flex-col items-center justify-center h-48 mb-4 relative overflow-hidden`}
                        >
                          {preview.logo ? (
                            <img
                              src={preview.logo}
                              alt="Logo preview"
                              disabled={!isEdit}
                              className="max-h-full max-w-full object-contain"
                            />
                          ) : (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-gray-400 mb-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                              </svg>
                              <p className="text-sm text-gray-500 text-center">
                                Drag & drop your logo or click to browse
                              </p>
                            </>
                          )}
                        </div>

                        <label className="block">
                          <span className="sr-only">Choose logo</span>
                          <input
                            type="file"
                            disabled={!isEdit}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                            accept="image/*"
                            onChange={(e) =>
                              handleFileChange("logo", e.target.files[0])
                            }
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-full">
                      <div className="p-6">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">
                          Banner Image
                        </h3>

                        <div
                          className={`border-2 border-dashed rounded-lg ${
                            preview.banner
                              ? "border-indigo-300 bg-indigo-50"
                              : "border-gray-300"
                          } p-4 flex flex-col items-center justify-center h-48 mb-4 relative overflow-hidden`}
                        >
                          {preview.banner ? (
                            <img
                              src={preview.banner}
                              alt="Banner preview"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          ) : (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-gray-400 mb-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                              </svg>
                              <p className="text-sm text-gray-500 text-center">
                                Upload a banner image (recommended size:
                                1200×400px)
                              </p>
                            </>
                          )}
                        </div>

                        <label className="block">
                          <span className="sr-only">Choose banner image</span>
                          <input
                            type="file"
                            disabled={!isEdit}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                            accept="image/*"
                            onChange={(e) =>
                              handleFileChange("banner", e.target.files[0])
                            }
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="mb-6">
                  <label
                    htmlFor="brochure"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Brochure PDF URL (or upload PDF)
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="brochure"
                      id="brochure"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 py-3"
                      placeholder="https://example.com/your-brochure.pdf"
                      value={formData.brochure}
                      onChange={handleChange}
                    />
                    <label className="inline-flex items-center px-4 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-700 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      Upload PDF
                      <input
                        type="file"
                        className="sr-only"
                        accept="application/pdf"
                      />
                    </label>
                  </div>
                </div> */}

                <div className="mb-6">
                  <label
                    htmlFor="brochure"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Brochure PDF URL (or upload PDF)
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    {/* Text input for brochure URL (optional) */}
                    <input
                      type="text"
                      name="brochure"
                      disabled={!isEdit}
                      id="brochure"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 py-3  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                      placeholder="https://example.com/your-brochure.pdf"
                      value={
                        typeof formData.brochure === "string"
                          ? formData.brochure
                          : ""
                      }
                      onChange={(e) =>
                        setFormData({ ...formData, brochure: e.target.value })
                      }
                    />

                    {/* Upload button for PDF */}
                    <label className="inline-flex items-center px-4 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-700 text-sm cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      Upload PDF
                      <input
                        type="file"
                        disabled={!isEdit}
                        accept="application/pdf"
                        className="sr-only"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            setFormData({ ...formData, brochure: file });
                          }
                        }}
                      />
                    </label>
                  </div>

                  {/* Show uploaded file name for clarity */}
                  {formData.brochure instanceof File && (
                    <p className="text-sm text-gray-500 mt-2">
                      Selected file: {formData.brochure.name}
                    </p>
                  )}
                </div>

                {/* Preview section */}
                <div className="mt-8 bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">
                      Hackathon Preview
                    </h3>
                  </div>

                  <div className="p-6">
                    <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden mb-4">
                      {preview.banner ? (
                        <img
                          src={preview.banner}
                          alt="Banner preview"
                          disabled={!isEdit}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                          <h4 className="text-2xl font-bold text-white">
                            {formData.hackathonName || "Your Hackathon Banner"}
                          </h4>
                        </div>
                      )}

                      {preview.logo && (
                        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white p-1 shadow-lg">
                          <img
                            src={preview.logo}
                            disabled={!isEdit}
                            alt="Logo preview"
                            className="w-full h-full object-contain rounded-full"
                          />
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {formData.hackathonName || "Your Hackathon Title"}
                    </h3>

                    <p className="text-gray-600 mb-3">
                      Organized by {formData.collegeName || "Your Organization"}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Prize Pool: {formData.prizePool || "TBA"}
                      </span>

                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        Team Size: {formData.teamSize.min || "?"} -{" "}
                        {formData.teamSize.max || "?"}
                      </span>

                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-rose-100 text-rose-800">
                        {formData.mode === "online"
                          ? "Online"
                          : formData.mode === "offline"
                          ? "Offline"
                          : "Hybrid"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* {activeStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Add Sponsors
                </h2>
                <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Sponsors
                  </h3>

                  {formData.sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end border p-4 rounded-lg"
                    >
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Sponsor Name
                        </label>
                        <input
                          type="text"
                          value={sponsor.name}
                          onChange={(e) =>
                            handleSponsorChange(index, "name", e.target.value)
                          }
                          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Tier
                        </label>
                        <select
                          value={sponsor.tier}
                          onChange={(e) =>
                            handleSponsorChange(index, "tier", e.target.value)
                          }
                          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
                        >
                          <option value="platinum">Platinum</option>
                          <option value="gold">Gold</option>
                          <option value="silver">Silver</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Logo URL
                        </label>
                        <input
                          type="text"
                          value={sponsor.logo}
                          onChange={(e) =>
                            handleSponsorChange(index, "logo", e.target.value)
                          }
                          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
                        />
                      </div>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={addSponsorField}
                    className="mt-2 text-indigo-600 hover:underline text-sm"
                  >
                    + Add another sponsor
                  </button>
                </div>
              </div>
            )} */}

            {activeStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Add Sponsors
                </h2>

                <div className="bg-white p-6 rounded-xl shadow space-y-6">
                  {formData.sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="relative border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-4"
                    >
                      {/* Delete Icon - Top Right */}
                      {formData.sponsors.length > 1 && (
                        <button
                          type="button"
                          disabled={!isEdit}
                          onClick={() => removeSponsor(index)}
                          className="absolute top-3 right-3 text-red-600 hover:text-red-800 focus:outline-none transition-colors"
                          title="Remove Sponsor"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      )}

                      <div className="text-indigo-700 font-semibold mb-2">
                        Sponsor {index + 1}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Sponsor Name */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Sponsor Name
                          </label>
                          <input
                            type="text"
                            disabled={!isEdit}
                            value={sponsor.name}
                            onChange={(e) =>
                              handleSponsorChange(index, "name", e.target.value)
                            }
                            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                            placeholder="Company Name"
                            required
                          />
                        </div>

                        {/* Sponsor Tier */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Sponsor Tier
                          </label>
                          <select
                            value={sponsor.tier}
                            disabled={!isEdit}
                            onChange={(e) =>
                              handleSponsorChange(index, "tier", e.target.value)
                            }
                            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                          >
                            <option value="platinum">Platinum</option>
                            <option value="gold">Gold</option>
                            <option value="silver">Silver</option>
                          </select>
                        </div>

                        {/* Sponsor Logo Upload */}
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Sponsor Logo
                          </label>
                          <input
                            type="file"
                            disabled={!isEdit}
                            accept="image/*"
                            name={`sponsorsLogo`}
                            onChange={(e) =>
                              handleSponsorFileChange(index, e.target.files[0])
                            }
                            className="mt-1 w-full  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-95 disabled:text-gray-950"
                          />
                          {sponsor.logo && typeof sponsor.logo === "object" && (
                            <img
                              src={URL.createObjectURL(sponsor.logo)}
                              disabled={!isEdit}
                              alt="Logo Preview"
                              className="mt-2 h-16 object-contain"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    type="button"
                    disabled={!isEdit}
                    onClick={addSponsorField}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors"
                  >
                    + Add another sponsor
                  </button>
                </div>
              </div>
            )}

            {/* <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handleBack}
                className={`px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  activeStep === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={activeStep === 0}
              >
                Back
              </button>

              {activeStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={Onclickhandeler}
                  className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2h10a1 1 0 100-2H3zm0 4a1 1 0 000 2h10a1 1 0 100-2H3zm0 4a1 1 0 100 2h10a1 1 0 100-2H3z"
                      clipRule="evenodd"
                    />
                    <path d="M15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                  </svg>
                  Create Hackathon
                </button>
              )}
            </div> */}

            {/* Step navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => setActiveStep((prev) => prev - 1)}
                className={`px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  activeStep === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={activeStep === 0}
              >
                Back
              </button>
              {activeStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => prev + 1)}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  // disabled={!isEdit}
                >
                  Next
                </button>
              ) : (
                !hacktondata && (
                  <button
                    type="button"
                    onClick={Onclickhandeler}
                    className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform hover:scale-105"
                    disabled={!isEdit}
                  >
                    <FaSave className="mr-2" />
                    Create Hackathon
                  </button>
                )
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
