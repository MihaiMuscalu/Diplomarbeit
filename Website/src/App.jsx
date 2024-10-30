import Sidebar from './Frontend Components/Sidebar';
import Table from './Frontend Components/Table';
import Footer from './Frontend Components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header at the top, spanning full width */}
      <header className="bg-green-600 text-white flex items-center justify-between px-4 py-2 mt-20">
        {/* Placeholder for possible right-aligned content */}
        <div className="w-10"></div>

        {/* Centered text */}
        <div className="text-center flex-grow">
          <h1 className="text-base font-bold">Wärmstes zu empfehlen.</h1>
        </div>

        
        {/* Right-aligned logo */}
        <img src="/path-to-logo.png" alt="Logo" className="h-10" />
      </header>

      {/* Main content area with sidebar and table */}
      <div className="flex">
        {/* Sidebar on the left */}
        <Sidebar />
        
        {/* Main content on the right */}
        <div className="flex-1 p-4">
          <main className="flex justify-center items-center mt-10">
            <Table />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}



export default App;
