import React from "react";
import Login from "../Frontend Components/Security/Login";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Frontend Components/Security/Auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    navigate("/Main");
  };

  return (
    <main className="flex justify-center bg-gray-50">
      <Login onLogin={handleLogin} />
    </main>
  );
};

export default LoginPage;
