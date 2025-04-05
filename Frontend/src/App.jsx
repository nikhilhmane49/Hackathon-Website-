// src/App.jsx
import React from 'react';

import Login from './components/login';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default App;
