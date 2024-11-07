import MainPage from "./Pages/MainPage"

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StrelePage from "./Pages/StrelePage";
import KontaktPage from "./Pages/KontaktPage";

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Table from './Table';



const router = createBrowserRouter([
    {
      path:"/",
      element:<MainPage/>,
    },
    {
      path: "/Strele",
      element:<StrelePage/>,
    },
    {
      path: "/Kontakt",
      element:<KontaktPage/>,
    },
  ]);
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const handleLogout = () => {
    setIsAuthenticated(false); // Set authenticated state to false when logged out
    console.log("Logged out!");
  };

  return (
    <RouterProvider router= {router}/>
  );
}



export default App;
