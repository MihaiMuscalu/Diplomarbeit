import React, { useState, useEffect } from 'react';

function Table() {
  const [data, setData] = useState([]); // Declare the state for storing data

  // Fetch data when the component mounts
  useEffect(() => {
    const loadData = () => {
      fetch("https://672255ce2108960b9cc40294.mockapi.io/data")
        .then((result) => result.json())
        .then((data) => {
          setData(data); // Update state with fetched data
        })
        .catch((error) => console.error('Error fetching data:', error));
    };

    loadData(); // Trigger the data fetching
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div className="w-3/4 mx-auto">
      {/* Main Table */}
      <table className="w-full border border-[#007945]">
        <thead>
          <tr className="bg-white text-[#007945] font-bold text-2xl">
            <th className="border-3 border-[#007945] py-5 px-6">Werkzeug</th>
            <th className="border-3 border-[#007945] py-5 px-6">Adresse</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the fetched data to display it */}
          {data.slice(0, 10).map((item, index) => (
            <tr key={item.id} className="bg-white text-black font-bold text-lg text-center">
              <td className="border-3 border-[#007945] py-8 px-4">{item.first}</td>
              <td className="border-3 border-[#007945] py-8 px-4">{item.second}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
