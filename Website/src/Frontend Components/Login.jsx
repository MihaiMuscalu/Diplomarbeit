import React, { useState } from 'react';
import config from './config';


function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded credentials (for demo purposes)
    if (username === config.username && password === config.password) {
      onLogin(); // Call onLogin function passed from parent (App) to set authentication state
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="w-1/4 mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4"
        />
        <button type="submit" className="bg-[#007945] text-white py-2 px-4">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
