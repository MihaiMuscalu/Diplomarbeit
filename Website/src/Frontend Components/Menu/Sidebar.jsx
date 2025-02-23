import { useAuth } from "../Security/Auth";
import { useAirtag } from "../Context/AirtagContext";
import CustomButton from "./SidebarButton";

function Sidebar() {
  const { isAuthenticated, logout } = useAuth(); // Access both state and logout
  const { openPopup } = useAirtag(); // Add this

  return (
    <div className="w-1/5 text-white flex flex-col items-start py-4 mt-10">
      <CustomButton
        to={isAuthenticated ? "/Main" : "/"}
        text="Startseite"
        width="w-3/4" // Change width
        bgColor="bg-[#007945]" // Change background color
        textColor="text-white" // Change text color
        borderColor="" // Change border color
        hoverTranslate="translate-x-4" // Change hover animation
        onClick={() => console.log(isAuthenticated)}
      />
      <CustomButton
        to="/Strele"
        text="Strele"
        width="w-2/4"
        bgColor="bg-[#007945]"
        textColor="text-white"
        borderColor=""
        hoverTranslate="translate-x-3"
        onClick={() => console.log(isAuthenticated)}
      />
      <CustomButton
        to="/Kontakt"
        text="Kontakt"
        width="w-3/4"
        bgColor="bg-[#007945]"
        textColor="text-white"
        borderColor=""
        hoverTranslate="translate-x-3"
        onClick={() => console.log(isAuthenticated)}
      />
      {isAuthenticated && (
        <CustomButton
          to="#"
          text="Create Airtag"
          width="w-2/4"
          bgColor="bg-[#007945]"
          textColor="text-white"
          borderColor=""
          hoverTranslate="translate-x-3"
          onClick={(e) => {
            e.preventDefault();
            openPopup();
          }}
        />
      )}
      <CustomButton
        to="/"
        text="Logout"
        bgColor="bg-red-500"
        width="w-2/4"
        textColor="text-white"
        borderColor=""
        hoverTranslate="translate-x-2"
        onClick={logout} // Logout action
      />

      {/* Additional buttons */}
    </div>
  );
}

export default Sidebar;
