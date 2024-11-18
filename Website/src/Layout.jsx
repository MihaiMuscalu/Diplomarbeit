// Layout.js

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Frontend Components/Menu/Sidebar";
import Footer from "./Frontend Components/UI/Footer";
import { checkAuth, logout } from "./Frontend Components/Security/Auth";
import ImageLogo from "./Frontend Components/Images/strele.png";

const Layout = () => {
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#007945] text-white flex items-end justify-end py-2 mt-20">
        <div className="w-10"></div>
        <div className="text-center mr-2">
          <h1 className="pt-4 text-base font-bold h-10">
            Wärmstes zu empfehlen.
          </h1>
        </div>
        <div className="w-80"></div>
        <div className="w-32"></div>
        <img src={ImageLogo} alt="Logo" className="absolute h-20 mr-48" />
      </header>

      {/* Main content area with sidebar */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isAuth={checkAuth} onLogout={handleLogout} />

        {/* Main content */}
        <div className="flex-1 p-4">
          <main className="mt-10">
            {/* Render the routed page here */}
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
