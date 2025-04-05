import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "./components/Home";
import OrganiserSideBar from './Organiser/OrganiserSideBar'
import ParticipantSideBar from "./participant/ParticipantSideBar";
import ParticipantLogin from "./participant/ParticipantLogin";
import OrganiserLogin from "./Organiser/OrganiserLogin";
import HackthonInfo from "./components/HackthonInfo";
import CandidateDetails from "./components/CandidateDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/test",
        element: <h1>Test</h1>,
      },
      {
        path: "/organiser",
        element: <OrganiserSideBar/>
      },
      {
        path: "/participant",
        element: <ParticipantSideBar/>
      },
      {
        path: "/participantLogin",
        element: <ParticipantLogin/>
      },
      {
        path: "/OrganiserLogin",
        element: <OrganiserLogin/>
      },
      {
        path: "/hackinfo",
        element: <HackthonInfo/>
      },
      {
        path: "/partinfo",
        element: <CandidateDetails/>
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)