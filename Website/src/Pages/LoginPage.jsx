import React from "react";
import Login from "../Frontend Components/Security/Login";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Frontend Components/Security/Auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Access login from useAuth

  // Login function to handle authentication
  const handleLogin = () => {
    login(); // Call login function
    navigate("/Main"); // Redirect to /Main
  };

  return (
    <main className="flex justify-center items-center mt-10">
      <Login onLogin={handleLogin} />
    </main>
  );
};

export default LoginPage;
