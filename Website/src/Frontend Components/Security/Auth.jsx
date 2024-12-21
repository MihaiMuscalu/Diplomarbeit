import { useState, useEffect, createContext, useContext } from "react";

// Authentication context
const AuthContext = createContext();

// Provider component
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkInitialAuth = () => {
      const auth = localStorage.getItem("isAuthenticated") === "true";
      setIsAuthenticated(auth);
      setIsLoading(false);
    };
    checkInitialAuth();
  }, []);

  useEffect(() => {
    const syncAuthState = () => {
      const auth = checkAuth();
      if (auth !== isAuthenticated) {
        setIsAuthenticated(auth);
      }
    };
    window.addEventListener("storage", syncAuthState);
    return () => window.removeEventListener("storage", syncAuthState);
  }, [isAuthenticated]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const login = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  function checkAuth() {
    return localStorage.getItem("isAuthenticated") === "true";
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use auth
export function useAuth() {
  return useContext(AuthContext);
}
