import React, { useState } from "react";
import Table from "../Frontend Components/UI/Table";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [searchColumn, setSearchColumn] = useState("first"); // State for selected column

  return (
    <main className="flex flex-col justify-center items-center mt-10">
      <div className="flex items-center gap-4 mb-2">
        {/* Dropdown to select search column */}
        <select
          value={searchColumn}
          onChange={(e) => setSearchColumn(e.target.value)}
          className="mr-2 p-2 rounded-2xl border-[#007945] border-2 text-black"
        >
          <option value="first">Werkzeug</option>
          <option value="second">Adresse</option>
        </select>
        {/* Search Input */}
        <input
          type="text"
          placeholder={`Suchen... `}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          className="p-2 rounded-2xl border-2 border-[#007945] text-black placeholder-gray-500"
        />
      </div>
      {/* Pass searchQuery and searchColumn as props to Table */}
      <Table searchQuery={searchQuery} searchColumn={searchColumn} />
    </main>
  );
};

export default Home;
