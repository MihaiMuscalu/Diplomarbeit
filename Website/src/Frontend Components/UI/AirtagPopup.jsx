import React, { useState } from "react";
import { useAirtag } from "../Context/AirTagContext";

function AirtagPopup() {
  const { isPopupOpen, closePopup, createAirtag, error, success, isLoading } =
    useAirtag();
  const [formData, setFormData] = useState({
    AirtagId: "",
    tool: "",
    toolNr: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAirtag({
      ...formData,
      AirtagId: parseInt(formData.AirtagId),
      toolNr: parseInt(formData.toolNr),
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isPopupOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={!isLoading ? closePopup : undefined}
      />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl z-50 w-96">
        <h2 className="text-2xl font-bold text-[#007945] mb-4">
          Create Airtag
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Airtag ID
            </label>
            <input
              type="number"
              name="AirtagId"
              value={formData.AirtagId}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007945]"
              required
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tool
            </label>
            <input
              type="text"
              name="tool"
              value={formData.tool}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007945]"
              required
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tool Number
            </label>
            <input
              type="number"
              name="toolNr"
              value={formData.toolNr}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007945]"
              required
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm p-2 bg-red-50 rounded">
              Failed to create Airtag: {error}
            </div>
          )}

          {success && (
            <div className="text-green-500 text-sm p-2 bg-green-50 rounded">
              Airtag created successfully!
            </div>
          )}

          {isLoading && (
            <div className="text-blue-500 text-sm p-2 bg-blue-50 rounded">
              Creating Airtag...
            </div>
          )}

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={closePopup}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              disabled={isLoading}
            >
              {success ? "Close" : "Cancel"}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#007945] text-white rounded-md hover:bg-[#006935]"
              disabled={isLoading}
            >
              {isLoading ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AirtagPopup;
