import MainPage from "./Pages/MainPage"

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
    {
      path:"/",
      element:<MainPage/>,
    },
  ]);
function App() {


  return (
    <RouterProvider router= {router}/>
  );
}



export default App;
