import React from 'react';

const CustomButton = ({
  text = "Button", // default button text
  width = "w-3/4", // default width
  bgColor = "bg-white", // default background color
  textColor = "text-black", // default text color
  borderColor = "border-black", // default border color
  hoverTranslate = "translate-x-2", // default hover animation
  onClick, // action on click
}) => {
  return (
    <button
      onClick={onClick}
      className={`transition-transform duration-100 ease-in-out transform hover:${hoverTranslate} active:scale-90 border ${borderColor} ${bgColor} ${textColor} py-2 px-4 m-1 ${width} text-right font-bold`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
