// Layout.js

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Frontend Components/Menu/Sidebar";
import Footer from "./Frontend Components/UI/Footer";

import ImageLogo from "./Frontend Components/Images/strele.png";

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#007945] text-white flex items-center justify-between py-2 mt-20 px-4">
        <div className="flex-1" />
        <div className="text-center">
          <h1 className="pt-4 text-base font-bold h-10">
            Wärmstes zu empfehlen.
          </h1>
        </div>
        <div className="flex-1 relative">
          <img
            src={ImageLogo}
            alt="Logo"
            className="absolute right-12 -top-10 h-20"
          />
        </div>
      </header>

      {/* Main content area with sidebar */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

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
