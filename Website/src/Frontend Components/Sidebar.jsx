function Sidebar() {
  return (
    <div className="w-1/5 text-white flex flex-col items-start py-4 mt-10">
      <button className="border border-black bg-white text-black py-2 px-4 m-1 w-3/4 text-right font-bold">Startseite</button>
      <button className="bg-green-600 py-2 px-4 w-2/4 text-right font-semibold m-1">Strele</button>
      <button className="bg-green-600 py-2 px-4 w-3/4 h-10 text-right font-bold m-1"></button>
      <button className="bg-green-600 py-2 px-4 w-3/4 h-10 text-right font-bold m-1"></button>
      
      {/* Additional buttons */}
    </div>
  );
}


export default Sidebar;