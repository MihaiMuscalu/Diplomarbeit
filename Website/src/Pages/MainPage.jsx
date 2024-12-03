import React, { useState } from "react";
import Table from "../Frontend Components/UI/Table";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [searchColumn, setSearchColumn] = useState("first"); // State for selected column

  return (
    <main className="flex flex-col items-center mt-10">
      <div className="w-3/4 flex justify-center mb-4">
        <div className="flex items-center gap-4">
          <select
            value={searchColumn}
            onChange={(e) => setSearchColumn(e.target.value)}
            className="w-48 p-2 rounded-2xl border-[#007945] border-2 text-black"
          >
            <option value="first">Werkzeug</option>
            <option value="second">Adresse</option>
          </select>
          <input
            type="text"
            placeholder="Suchen... "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-48 p-2 rounded-2xl border-2 border-[#007945] text-black placeholder-gray-500"
          />
        </div>
      </div>
      <Table searchQuery={searchQuery} searchColumn={searchColumn} />
    </main>
  );
};

export default Home;
