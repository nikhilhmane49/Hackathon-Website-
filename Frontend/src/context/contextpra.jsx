// import React from 'react'
// import { createContext, useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// export const Appcontext = createContext();

// const AppProvider = (props) => {
//   const [token, settoken] = useState(
//     localStorage.getItem("token") ? localStorage.getItem("token") : false
//   );

//   const [atoken, setatoken] = useState(
//     localStorage.getItem("atoken") ? localStorage.getItem("atoken") : false
//   );
//   const [Hackton, setHackton] = useState([]);
//   const [parhackton, setparhackton] = useState([]);
//   const [data, setData] = useState({});
//   const [hacktondata, setHacktondata] = useState({});
//   // const[userreg ,setuserreg] = useState(false);
//   const backendurl = import.meta.env.VITE_BACKEND_URL;

//   console.log("backendurl: " + backendurl);

//    const [teams, setTeams] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [refreshing, setRefreshing] = useState(false);
    
    

//   const listhackton = async () => {
//     try {
//       const response = await axios.get(
//         `${backendurl}/api/orgnizer/orgnizer-gethackathon`
//       );

//       if (response.data.success) {
//         toast.success(response.data.message);
//         setHackton(response.data.data);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message || "Something went wrong");
//     }
//     };
    
//     // console.log(Hackton);

//   useEffect(() => {
//       listhackton();
//   }, []);



//   const getproile = async () => {
//     try {
//       const response = await axios.get(
//         'http://localhost:3000/api/user/user-getprofile',
//         {
//           headers: {
//             token: token,
//           },
//         }
//       );

//       if (response.data.success) {
//         toast.success(response.data.message);
//         setData(response.data.data);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   useEffect(() => {
//     getproile();
//   }, []);



  
//     const fetchTeams = async (showRefreshing = false) => {
//       try {
//         if (showRefreshing) setRefreshing(true);
  
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.log("Token not found in localStorage");
//           return;
//         }
  
//         const response = await axios.get(
//           "http://localhost:3000/api/user/user-getteam",
//           {
//             headers: { token },
//           }
//         );
  
//         setTeams(response.data.data);
//           setLoading(false);
//           // if (response.data.data.userreg==true) {
//           //   setuserreg(true);
//           // }
//           if (showRefreshing) setRefreshing(false);
       
//       } catch (error) {
//         console.error("Error fetching team registrations:", error);
//         setLoading(false);
//         if (showRefreshing) setRefreshing(false);
//       }
//     };
  
//     useEffect(() => {
//       fetchTeams();
//     }, []);


//   const Hacktondata= async () => {
//     try {
//       const response = await axios.get(
//         'http://localhost:3000/api/orgnizer/orgnizer-hacktondata',
//         {
//           headers: {
//             atoken: atoken,
//           },
//         }
//       );

//       if (response.data.success) {
//         toast.success(response.data.message);

//         console.log("response.data.data"+response.data)
//         setHacktondata(response.data.data);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   useEffect(() => {
//     Hacktondata();
//   }, []);
  


//   console.log("hackdata"+hacktondata);
  
//   console.log("atoken"+atoken)

//   const value = {
//     Hackton,
//     listhackton,
//     backendurl,
//     token,
//     atoken,
//     setatoken,
//     settoken,
//     data,
//     hacktondata,
//     // userreg,
//     // setuserreg,
//     teams,
//     loading,
//     refreshing,
//   };

//   return (
//     <Appcontext.Provider value={value}>{props.children}</Appcontext.Provider>
//   );
// };

// export default AppProvider;







import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const Appcontext = createContext();

const AppProvider = (props) => {
  const [token, settoken] = useState(localStorage.getItem("token") || false);
  const [atoken, setatoken] = useState(localStorage.getItem("atoken") || false);
  const [Hackton, setHackton] = useState([]);
  const [parhackton, setparhackton] = useState([]);
  const [data, setData] = useState({});
  const [hacktondata, setHacktondata] = useState([]); // 🔧 FIXED: initialized as array
  const backendurl = import.meta.env.VITE_BACKEND_URL;

  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // ✅ List hackathons
  const listhackton = async () => {
    try {
      const response = await axios.get(
        `${backendurl}/api/orgnizer/orgnizer-gethackathon`
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setHackton(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    listhackton();
  }, []);

  // ✅ User Profile
  const getproile = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/user/user-getprofile",
        {
          headers: { token },
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setData(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    getproile();
  }, []);

  // ✅ Fetch Teams
  const fetchTeams = async (showRefreshing = false) => {
    try {
      if (showRefreshing) setRefreshing(true);
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Token not found in localStorage");
        return;
      }
      const response = await axios.get(
        "http://localhost:3000/api/user/user-getteam",
        {
          headers: { token },
        }
      );
      setTeams(response.data.data);
      setLoading(false);
      if (showRefreshing) setRefreshing(false);
    } catch (error) {
      console.error("Error fetching team registrations:", error);
      setLoading(false);
      if (showRefreshing) setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  // ✅ Hackathon Data (for organizer)
  const Hacktondata = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/orgnizer/orgnizer-hacktondata",
        {
          headers: { atoken },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        console.log("Hackathon data:", response.data.data); // ✅ Better logging
        setHacktondata(response.data.data); // ✅ Setting full array
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    Hacktondata();
  }, []);

  // ✅ Console check
  console.log("Hacktondata state:", hacktondata);
  console.log("atoken:", atoken);

  // ✅ Value for context
  const value = {
    Hackton,
    listhackton,
    backendurl,
    token,
    atoken,
    setatoken,
    settoken,
    data,
    hacktondata,
    teams,
    loading,
    refreshing,
  };

  return (
    <Appcontext.Provider value={value}>{props.children}</Appcontext.Provider>
  );
};

export default AppProvider;

