import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({
  text = "",
  width = "",
  bgColor = "",
  textColor = "",
  borderColor = "",
  hoverTranslate = "",
  to = "",
  onClick,
}) => {
  // Create a mapping object for hover translations
  const hoverClasses = {
    "translate-x-2": "hover:translate-x-2",
    "translate-x-3": "hover:translate-x-3",
    "translate-x-4": "hover:translate-x-4",
  };

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`transition-all ${width} duration-100 ease-in-out transform ${hoverClasses[hoverTranslate]} active:scale-90 border ${borderColor} ${bgColor} ${textColor} py-2 px-4 m-1 text-right font-bold`}
      style={{ textDecoration: "none" }}
    >
      {text}
    </Link>
  );
};

export default CustomButton;
