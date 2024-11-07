import CustomButton from "./SidebarButton";
import React from "react";
function Sidebar({onLogout}) {
  return (
    <div className="w-1/5 text-white flex flex-col items-start py-4 mt-10">

      {/* Main Webpage */}
      <CustomButton
        to="/"
        text="Startseite"
        width="w-3/4"           // Change width
        bgColor="bg-[#007945]"   // Change background color
        textColor="text-white"  // Change text color
        borderColor="" // Change border color
        hoverTranslate="translate-x-2" // Change hover animation
        onClick={() => console.log("Button clicked!")}/>

        <CustomButton
        to="/Strele"
        text="Strele"
        width="w-2/4"           
        bgColor="bg-[#007945]"   
        textColor="text-white"  
        borderColor="" 
        hoverTranslate="translate-x-2" 
        onClick={() => console.log("Button clicked!")}/>

        <CustomButton
        to="/Kontakt"
        text="Kontakt"
        width="w-3/4"           
        bgColor="bg-[#007945]"   
        textColor="text-white"  
        borderColor="" 
        hoverTranslate="translate-x-2" 
        onClick={() => console.log("Button clicked!")}/>


        {/* Logout Button */}
        <CustomButton
        text="Logout"
        width="w-3/4"
        bgColor="bg-red-500"
        textColor="text-white"
        borderColor=""
        hoverTranslate="translate-x-2"
        onClick={onLogout}  // Logout on click
        />
      
      {/* Additional buttons */}
    </div>
  );
}


export default Sidebar;