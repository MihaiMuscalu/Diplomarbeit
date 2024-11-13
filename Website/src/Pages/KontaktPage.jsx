import React from 'react';
import Footer from '../Frontend Components/Footer';
import Image from '../Frontend Components/Images/strele.png';
import Sidebar from '../Frontend Components/Sidebar';
import { logout ,checkAuth} from '../Frontend Components/Auth'; 

const KontaktPage = () => {
    
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
            <Sidebar isAuth= {checkAuth} onLogout={handleLogout}/>
            
            {/* Main content on the right */}
            <div className="flex-1 p-4">


              <main className="w-3/4 p-8"> {/* Main content takes up 3/4th of the width */}
                {/* Contact Information */}
                <div className="text mb-8">
                  <h1 className="text-2xl font-bold mb-4">
                    <strong>Nehmen </strong>Sie<strong> Kontakt mit </strong>uns<strong> auf</strong>
                  </h1>
                  <p className="mb-4">
                    Strele Installationen GmbH<br />
                    Karl-Heinz Strele<br />
                    Riedweg 10<br />
                    A-6850 Dornbirn
                  </p>
                  <p className="mb-4">
                    Telefon: +43 5572 25060<br />
                    Fax: +43 5572 25060 75<br />
                    E-Mail: <a href="mailto:office@strele.at" className="text-blue-500">office@strele.at</a><br />
                    Web: <a href="http://www.strele.at" className="text-blue-500">www.strele.at</a>
                  </p>
                  <p className="mb-4">
                    Haben Sie Fragen oder Anregungen?<br />
                    Wir freuen uns von Ihnen zu hören.<br />
                    Nehmen Sie Kontakt mit uns auf.
                  </p>
                </div>

                {/* Google Map iframe */}
                <iframe
                  title="Google Maps location for Strele Installationen GmbH"
                  className="map w-full h-96 mb-8"
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d86403.66909339734!2d9.644095304847482!3d47.409704671133454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x479b14c05d8df785%3A0x52f108ce7e2ea04a!2sstrele+installationen!3m2!1d47.409726!2d9.714134999999999!5e0!3m2!1sde!2sus!4v1460365147806"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                ></iframe>

                {/* Office Hours */}
                <div className="text mb-8">
                  <h2 className="text-xl font-bold mb-4">Unsere <strong>Bürozeiten:</strong></h2>
                  <p className="mb-2">
                    <strong>Montag bis Donnerstag</strong><br />
                    07:00 - 12:00 Uhr<br />
                    13:30 - 17:00 Uhr
                  </p>
                  <p>
                    <strong>Freitag</strong><br />
                    07:00 - 11.30 Uhr
                  </p>
                </div>
              </main>


           
              {/* Footer contact information */}
              <Footer />
            </div>
          </div>
        </div>
  );
};

export default KontaktPage;