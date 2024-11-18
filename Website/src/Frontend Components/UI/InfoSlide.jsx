// InfoSlide.jsx
import React from "react";
import Card from "./Card";

function InfoSlide({ isOpen }) {
  return (
    <div
      className={`flex flex-col items-center fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className=" w-full h-8 bg-green-800 mb-4"></div>
      <Card name="Türtscher Daniel" role="PL" />
      <Card name="Ehe Immanuel" role="PM" />
      <Card name="Muscalu Mihai" role="PM" />
      <Card name="Hallinger Eduard" role="Betreuer" />
    </div>
  );
}

export default InfoSlide;
