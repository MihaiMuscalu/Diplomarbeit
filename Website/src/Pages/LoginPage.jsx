import React from 'react';
import Footer from '../Frontend Components/Footer';
import Image from '../Frontend Components/Images/strele.png';
import Sidebar from '../Frontend Components/Sidebar';
import Login from '../Frontend Components/Login';
import { useNavigate } from 'react-router-dom';
import { login, logout ,checkAuth} from '../Frontend Components/Auth'; 

const LoginPage = () => {
    const navigate = useNavigate();
      // Login function to handle authentication
      const handleLogin = () => {
        login();  // Call login function
        navigate('/Main');
      };
    
      const handleLogout = () => {
        logout();  // Call logout function
      };

  

    return (
        <div className="min-h-screen bg-white">
          {/* Header at the top, spanning full width */}
          <header className="bg-[#007945] text-white flex items-end justify-end py-2 mt-20">
            {/* Placeholder for possible left-aligned content */}
            <div className="w-10"></div>
    
            {/* Centered text */}
            <div className="text-center mr-2">
              <h1 className=" pt-4 text-base font-bold h-10">Wärmstes zu empfehlen.</h1>
            </div>
            <div className="w-80"></div>
            <div className="w-32"></div>
            
            {/* Right-aligned logo */}
            <img src={Image} alt="Logo" className="absolute h-20 mr-48" />
          </header>
    
          {/* Main content area with sidebar and table */}
          <div className="flex">
            {/* Sidebar on the left */}
            <Sidebar isAuth={checkAuth} onLogout={handleLogout} />
            
            {/* Main content on the right */}
            <div className="flex-1 p-4">
              <main className="flex justify-center items-center mt-10">
                {/* Login */}
                <Login onLogin={handleLogin} />
              </main>
              {/* Footer contact information */}
              <Footer />
            </div>
          </div>
        </div>
      );
};

export default LoginPage;
