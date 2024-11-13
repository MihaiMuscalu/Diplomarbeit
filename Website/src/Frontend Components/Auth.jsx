// src/auth.js
import { useState, useEffect } from 'react';

// Global authentication state
let isAuthenticated = false;

// Functions to get, set, and subscribe to auth status
export function login() {
  isAuthenticated = true;
  window.localStorage.setItem("isAuthenticated", "true");
}

export function logout() {
  isAuthenticated = false;
  window.localStorage.removeItem("isAuthenticated");
}

export function checkAuth() {
  return window.localStorage.getItem("isAuthenticated") === "true";
}

// Custom hook to access auth state reactively
export function useAuth() {
  const [authState, setAuthState] = useState(checkAuth());

  useEffect(() => {
    const handleAuthChange = () => setAuthState(checkAuth());
    window.addEventListener("storage", handleAuthChange);
    return () => window.removeEventListener("storage", handleAuthChange);
  }, []);

  return authState;
}
