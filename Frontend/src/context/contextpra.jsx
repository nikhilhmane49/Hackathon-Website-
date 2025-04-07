import React from 'react'
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const Appcontext = createContext();

const AppProvider = (props) => {
  const [token, settoken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );

  const [atoken, setatoken] = useState(
    localStorage.getItem("atoken") ? localStorage.getItem("atoken") : false
  );
  const [Hackton, setHackton] = useState([]);
  const[parhackton,setparhackton] = useState([]);
  const backendurl = import.meta.env.VITE_BACKEND_URL;
    
    

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
    
    // console.log(Hackton);

  useEffect(() => {
      listhackton();
  }, []);

  const value = {
    Hackton,
    listhackton,
    backendurl,
    token,
    atoken,
    setatoken,
    settoken,
  };

  return (
    <Appcontext.Provider value={value}>{props.children}</Appcontext.Provider>
  );
};

export default AppProvider;
