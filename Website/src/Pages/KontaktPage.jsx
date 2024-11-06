// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Kontakt = () => {
  const navigate = useNavigate();

  const goToKontakt = () => {
    navigate('/kontakt');
  };

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={goToKontakt} className="bg-blue-500 text-white px-4 py-2 rounded">
        Go to Kontakt
      </button>
    </div>
  );
};

export default Kontakt;
