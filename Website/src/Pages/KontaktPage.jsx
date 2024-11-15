import React from 'react';

const KontaktPage = () => {
    
  return (
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

  );
};

export default KontaktPage;