import CustomButton from "./SidebarButton";
function Sidebar() {
  return (
    <div className="w-1/5 text-white flex flex-col items-start py-4 mt-10">
      <CustomButton
        text="Startseite"
        width="w-3/4"           // Change width
        bgColor="bg-green-600"   // Change background color
        textColor="text-white"  // Change text color
        borderColor="" // Change border color
        hoverTranslate="translate-x-2" // Change hover animation
        onClick={() => console.log("Button clicked!")}/>

        <CustomButton
        text="Strele"
        width="w-2/4"           
        bgColor="bg-green-600"   
        textColor="text-white"  
        borderColor="" 
        hoverTranslate="translate-x-2" 
        onClick={() => console.log("Button clicked!")}/>

        <CustomButton
        text="Example"
        width="w-3/4"           
        bgColor="bg-green-600"   
        textColor="text-white"  
        borderColor="" 
        hoverTranslate="translate-x-2" 
        onClick={() => console.log("Button clicked!")}/>

        <CustomButton
        text="Example"
        width="w-3/4"           
        bgColor="bg-green-600"   
        textColor="text-white"  
        borderColor="" 
        hoverTranslate="translate-x-2" 
        onClick={() => console.log("Button clicked!")}/>
      
      {/* Additional buttons */}
    </div>
  );
}


export default Sidebar;