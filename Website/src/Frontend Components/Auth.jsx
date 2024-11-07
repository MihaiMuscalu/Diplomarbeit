import React, { createContext, useContext, useState } from 'react';

// Create context for authentication
const AuthContext = createContext();

// Create a provider to wrap the app and provide authentication state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication state
export const useAuth = () => {
  return useContext(AuthContext);
};
