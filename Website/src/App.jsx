import MainPage from "./Pages/MainPage"

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Kontakt from "./Pages/KontaktPage";


const router = createBrowserRouter([
    {
      path:"/",
      element:<MainPage/>,
    },
    {
      path: "/Kontakt",
      element:<Kontakt/>,
    },
  ]);
function App() {


  return (
    <RouterProvider router= {router}/>
  );
}



export default App;
