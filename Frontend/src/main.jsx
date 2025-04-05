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
<<<<<<< HEAD
import ParticipantLogin from "./participant/ParticipantLogin";
import OrganiserLogin from "./Organiser/OrganiserLogin";
=======
import HackthonInfo from "./components/HackthonInfo";
<<<<<<< HEAD
import ParticipantsPanel from "./components/CandidateDetails";
=======
>>>>>>> 758fa6f42f3f0468e990e5b777a2bb400b5ba862
>>>>>>> 24277ea248bed7b3be996a0171d7475a48c60e72


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
<<<<<<< HEAD
      },
      {
        path: "/partinfo",
        element: <ParticipantsPanel/>
      },

=======
      }
>>>>>>> 24277ea248bed7b3be996a0171d7475a48c60e72
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)