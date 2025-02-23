import { createContext, useContext, useState } from "react";

const AirtagContext = createContext();

export function AirtagProvider({ children }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    setError(null);
    setSuccess(false);
    setIsLoading(false);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setError(null);
    setSuccess(false);
    setIsLoading(false);
  };

  const createAirtag = async (airtagData) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://10.0.0.201:8080/createAirtag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(airtagData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSuccess(true);
      setIsLoading(false);
      return data;
    } catch (err) {
      setError(err.message);
      setSuccess(false);
      setIsLoading(false);
      console.error("Error creating Airtag:", err);
    }
  };

  return (
    <AirtagContext.Provider
      value={{
        isPopupOpen,
        openPopup,
        closePopup,
        createAirtag,
        error,
        success,
        isLoading,
      }}
    >
      {children}
    </AirtagContext.Provider>
  );
}

export function useAirtag() {
  return useContext(AirtagContext);
}
