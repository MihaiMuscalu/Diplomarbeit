// Extensions import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from 'react-router-dom';

// Webpages import
import MainPage from "./Pages/MainPage";
import StrelePage from "./Pages/StrelePage";
import KontaktPage from "./Pages/KontaktPage";
import LoginPage from "./Pages/LoginPage";

import { useAuth } from './Frontend Components/Security/Auth';  // Import useAuth hook


function App() {

  const isAuthenticated = useAuth();

  // Router setup
  const router = createBrowserRouter([
    {
      path: "/Main",
      element: <MainPage />,
    },
    {
      path: "/Strele",
      element: <StrelePage />,
    },
    {
      path: "/Kontakt",
      element: <KontaktPage />,
    },
    {
      path: "/",
      element: <LoginPage />,
    },
  ]);

  return (
    <RouterProvider router={router} >
      {/* Conditional rendering based on authentication state */}
      {isAuthenticated ? (
        <Link to="/Main" />  // Show the table if authenticated
      ) : (
        <Link to="/" />  // Show the login form if not authenticated
      )}


    </RouterProvider>
  );
}

export default App;
