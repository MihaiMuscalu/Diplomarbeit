function Sidebar() {
  return (
    <div className="w-1/5 text-white flex flex-col items-start py-4 mt-10">
      <button className=" transition-transform  duration-100  ease-in-out transform hover:translate-x-2 active:scale-90 border border-black bg-white text-black py-2 px-4 m-1 w-3/4 text-right font-bold">Startseite</button>
      <button className="transition-transform  duration-100  ease-in-out transform hover:translate-x-2 active:scale-90 bg-green-600 py-2 px-4 w-2/4 text-right font-semibold m-1">Strele</button>
      <button className="transition-transform  duration-100  ease-in-out transform hover:translate-x-2 active:scale-90 bg-green-600 py-2 px-4 w-3/4 h-10 text-right font-bold m-1"></button>
      <button className="transition-transform  duration-100  ease-in-out transform hover:translate-x-2 active:scale-90 bg-green-600 py-2 px-4 w-3/4 h-10 text-right font-bold m-1"></button>
      
      {/* Additional buttons */}
    </div>
  );
}


export default Sidebar;