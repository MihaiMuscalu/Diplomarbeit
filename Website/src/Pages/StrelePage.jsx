import React from 'react';
import Image from '../Frontend Components/Images/strele-bassenaandrea-fritz-pingerra.jpg';

const StrelePage = () => {
  
  return (
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
  );
}

export default StrelePage;
