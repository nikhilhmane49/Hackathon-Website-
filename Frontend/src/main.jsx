import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import AppProvider from "./context/contextpra";
import Home from "./components/Home";
import OrganiserSideBar from './Organiser/OrganiserSideBar'
import ParticipantSideBar from "./participant/ParticipantSideBar";
import ParticipantLogin from "./participant/ParticipantLogin";
import OrganiserLogin from "./Organiser/OrganiserLogin";
import HackathonInfo from "./components/HackthonInfo";
import CandidateDetails from "./components/CandidateDetails";
import UserSearch from "./participant/UserSearch";
import TeamRegistrations from "./participant/Displayteampar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/test",
        element: <h1>Test</h1>,
      },
      {
        path: "/organiser",
        element: <OrganiserSideBar />,
      },
      {
        path: "/participant",
        element: <ParticipantSideBar />,
      },
      {
        path: "/hackathon/:hackathon_id",
        element: <HackathonInfo />,
      },
      {
        path: "/participantLogin",
        element: <ParticipantLogin />,
      },
      {
        path: "/OrganiserLogin",
        element: <OrganiserLogin />,
      },
      {
        path: "/partinfo",
        element: <CandidateDetails />,
      },
      {
        path: "/search-participant",
        element: <UserSearch />,
      },
      {
        path: "/display-team",
        element: <TeamRegistrations />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
</StrictMode>

)