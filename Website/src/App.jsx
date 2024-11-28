import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./Frontend Components/Security/Auth"; // Import AuthProvider
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
        { path: "Main", element: <MainPage /> },
        { path: "Strele", element: <StrelePage /> },
        { path: "Kontakt", element: <KontaktPage /> },
        { path: "/", element: <LoginPage /> },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
