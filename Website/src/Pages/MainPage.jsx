// Home.js
import React, { useState } from 'react';
import Table from '../Frontend Components/UI/Table';
import Footer from '../Frontend Components/UI/Footer';
import Image from '../Frontend Components/Images/strele.png';
import Sidebar from '../Frontend Components/Menu/Sidebar';
import InfoSlide from '../Frontend Components/UI/InfoSlide';
import { logout, checkAuth } from '../Frontend Components/Security/Auth';

const Home = () => {
  const [isInfoSlideOpen, setIsInfoSlideOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const toggleInfoSlide = () => {
    setIsInfoSlideOpen(!isInfoSlideOpen);
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#007945] text-white flex items-end justify-end py-2 mt-20">
        <div className="w-10"></div>
        <div className="text-center mr-2">
          <h1 className="pt-4 text-base font-bold h-10">Wärmstes zu empfehlen.</h1>
        </div>
        <div className="w-80"></div>
        <div className="w-32"></div>
        <img src={Image} alt="Logo" className="absolute h-20 mr-48" />
      </header>

      {/* Main content area with sidebar and table */}
      <div className="flex">
        {/* Sidebar on the left */}
        <Sidebar isAuth={checkAuth} onLogout={handleLogout} />
        
        {/* Main content on the right */}
        <div className="flex-1 p-4">
          <main className="flex justify-center items-center mt-10">
            {/* Main Table */}
            <Table />
          </main>
          <Footer />
        </div>
      </div>

      {/* Button to toggle InfoSlide */}
      <button
        className="fixed top-4 left-4 p-2 bg-blue-500 text-white rounded-md"
        onClick={toggleInfoSlide}
      >
        Toggle Info Slide
      </button>

      {/* InfoSlide component with slide-in animation */}
      <InfoSlide isOpen={isInfoSlideOpen} />
    </div>
  );
};

export default Home;
