import React from 'react';
import Footer from '../Frontend Components/Footer';
import ImageLogo from '../Frontend Components/Images/strele.png';
import Image from '../Frontend Components/Images/strele-bassenaandrea-fritz-pingerra.jpg';
import Sidebar from '../Frontend Components/Sidebar';

const StrelePage = () => {
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
            <img src={ImageLogo} alt="Logo" className="absolute h-20 mr-48" />
          </header>
    
          {/* Main content area with sidebar and table */}
          <div className="flex">
            {/* Sidebar on the left */}
            <Sidebar />
            
            {/* Main content on the right */}
            <div className="flex-1 p-4">
            <main className="gallery ng-scope">
            {/* Text Section 1 */}
            <div className="text mb-6">
                <h1 className="text-2xl font-bold mb-4">
                <strong>Perfektion </strong>auf<strong> höchstem Niveau</strong>
                </h1>
                <p className="text-lg">
                Qualität hat Bestand. Perfektion auf höchstem Niveau. Seit über 50 Jahren vollenden wir meisterliches Handwerk für Installationen in den Bereichen Heizung, Bad, Sanitär, Solar sowie Klima für Neubau, Altbau und Umbau.
                </p>
            </div>

            {/* Text Section 2 */}
            <div className="text mb-6">
                <p className="text-lg mb-4">
                Unsere Leistung basiert auf kundenorientierter Beratung, Zuverlässigkeit und präziser Planung mit Preisgarantie. Perfekte Detailpläne geben Einsicht und Sicherheit in das gemeinsame Vorhaben.
                </p>
                <p className="text-lg">
                Ein eingespieltes Handwerker-Team sorgt verantwortungsvoll für die professionelle Realisierung. Und damit Ihr Installationssystem immer zu Ihrer höchsten Zufriedenheit funktioniert, sind Sie mit unserem nachhaltigen Service bestens betreut.
                </p>
            </div>

            {/* Text Section 3 */}
            <div className="text mb-6">
                <p className="text-lg">
                Besuchen Sie unseren{' '}
                <a
                    href="https://shop.strele.at/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    Strele Online-Shop
                </a>{' '}
                und erfahren Sie mehr über unsere Produkte. Hier haben Sie die Möglichkeit, rund um die Uhr und bequem vom Sofa aus einzukaufen. Mit den vorwiegend nachhaltigen, ressourcenschonenden Produkten fällt es Ihnen leicht, der Umwelt etwas Gutes zu tun, ohne auf den gewohnten Komfort zu verzichten.
                </p>
            </div>

            {/* Image Section */}
            <div className="images mb-6">
                <a
                href={Image + "?width=1920&height=1080"}
                data-rel="zoom"
                >
                <img
                    src= {Image + "?width=300&height=300" }  
                    alt="Installations"
                    className="w-full max-w-sm mx-auto"
                />
                </a>
            </div>
            </main> 
              {/* Footer contact information */}
              <Footer />
            </div>
          </div>
        </div>
  );
};

export default StrelePage;
