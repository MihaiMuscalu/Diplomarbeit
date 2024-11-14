// Home.js
import React, { useState } from 'react';
import Table from '../Frontend Components/UI/Table';
import InfoSlide from '../Frontend Components/UI/InfoSlide';

const Home = () => {
  const [isInfoSlideOpen, setIsInfoSlideOpen] = useState(false);


  const toggleInfoSlide = () => {
    setIsInfoSlideOpen(!isInfoSlideOpen);
  };

  return (
      <main className="flex justify-center items-center mt-10">
        {/* Main Table */}
        <Table />
        {/* Button to toggle InfoSlide */}
          <button
            className="fixed top-4 left-4 p-2 bg-blue-500 text-white rounded-md"
            onClick={toggleInfoSlide}
          >
            Toggle Info Slide
          </button>

          {/* InfoSlide component with slide-in animation */}
          <InfoSlide isOpen={isInfoSlideOpen} />
      </main>
        
  );
};

export default Home;
