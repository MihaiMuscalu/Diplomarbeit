import MainPage from "./Pages/MainPage"

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StrelePage from "./Pages/StrelePage";
import KontaktPage from "./Pages/KontaktPage";


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


  return (
    <RouterProvider router= {router}/>
  );
}



export default App;
