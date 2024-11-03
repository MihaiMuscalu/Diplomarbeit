import Sidebar from './Frontend Components/Sidebar';
import Table from './Frontend Components/Table';
import Footer from './Frontend Components/Footer';
import Image from  "./Frontend Components/Images/strele.png"

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header at the top, spanning full width */}
      <header className="bg-green-600 text-white flex items-end justify-end py-2 mt-20">
        {/* Placeholder for possible left-aligned content */}
        <div className="w-10"></div>

        {/* Centered text */}
        <div className="text-center mr-2">
          <h1 className="text-base font-bold">Wärmstes zu empfehlen.</h1>
        </div>

        
        {/* Right-aligned logo */}
        <img src={Image} alt="Logo" className="h-20 mr-48" />
      </header>

      {/* Main content area with sidebar and table */}
      <div className="flex">
        {/* Sidebar on the left */}
        <Sidebar />
        
        {/* Main content on the right */}
        <div className="flex-1 p-4">
          <main className="flex justify-center items-center mt-10">
            {/* Main Table */}
            <Table />
          </main>
          {/* Footer contact information */}
          <Footer />
        </div>
      </div>
    </div>
  );
}



export default App;
