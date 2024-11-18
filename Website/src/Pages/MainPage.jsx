import React, { useState } from 'react';
import Table from '../Frontend Components/UI/Table';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [searchColumn, setSearchColumn] = useState('first'); // State for selected column

  return (
    <main className="flex flex-col justify-center items-center mt-10">
      <div className="flex items-center gap-2 mb-4">
        {/* Dropdown to select search column */}
        <select
          value={searchColumn}
          onChange={(e) => setSearchColumn(e.target.value)}
          className="p-2 border border-gray-400 rounded"
        >
          <option value="first">Werkzeug</option>
          <option value="second">Adresse</option>
        </select>
        {/* Search Input */}
        <input
          type="text"
          placeholder={`Search in ${searchColumn === 'first' ? 'Werkzeug' : 'Adresse'}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          className="p-2 border border-gray-400 rounded"
        />
      </div>
      {/* Pass searchQuery and searchColumn as props to Table */}
      <Table searchQuery={searchQuery} searchColumn={searchColumn} />
    </main>
  );
};

export default Home;
