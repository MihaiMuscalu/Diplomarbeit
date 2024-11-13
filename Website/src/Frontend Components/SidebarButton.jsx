import React from 'react';
import { Link } from 'react-router-dom';

const CustomButton = ({
  text = "",
  width = "",
  bgColor = "",
  textColor = "",
  borderColor = "",
  hoverTranslate = "",
  to = "", // default route to navigate to
  onClick,
}) => {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`transition-all  ${width}  duration-100 ease-in-out transform hover:${hoverTranslate} active:scale-90 border ${borderColor} ${bgColor} ${textColor} py-2 px-4 m-1 text-right font-bold`}
      style={{ textDecoration: 'none' }} // Ensure no underline
    >
      {text}
    </Link>
  );
};

export default CustomButton;


