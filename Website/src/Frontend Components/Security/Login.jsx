import React, { useState } from "react";
import config from "./config";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Check credentials (replace with your authentication logic)
      if (
        formData.username === config.username &&
        formData.password === config.password
      ) {
        onLogin();
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full h-auto max-w-md mx-auto mt-2 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-[#007945] mb-6">
        Login
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007945]"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007945]"
          />
        </div>

        {error && <div className="text-red-500 text-sm mt-1">{error}</div>}

        <button
          type="submit"
          className="w-full bg-[#007945] text-white py-2 px-4 rounded-md hover:bg-[#006935] transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
