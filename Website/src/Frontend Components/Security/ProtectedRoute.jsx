import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth"; // Import your useAuth hook

function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth(); // Reactive authentication check

  // If the user is not authenticated, redirect to the login page
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
