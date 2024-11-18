// App.js

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import StrelePage from "./Pages/StrelePage";
import KontaktPage from "./Pages/KontaktPage";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Layout";

function App() {
  // Router setup
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Use Layout component here
      children: [
        {
          path: "Main",
          element: <MainPage />,
        },
        {
          path: "Strele",
          element: <StrelePage />,
        },
        {
          path: "Kontakt",
          element: <KontaktPage />,
        },
        {
          path: "/",
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
