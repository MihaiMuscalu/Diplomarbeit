import React, { useState, useEffect, useMemo } from "react";

function Table({ searchQuery, searchColumn }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://10.0.0.201:8080/mainTable");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const apiData = await response.json();
        setData(Array.isArray(apiData) ? apiData : [apiData]);
      } catch (err) {
        setError("Failed to fetch data");
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return data.slice(0, 10);

    const query = searchQuery.toLowerCase().trim();
    return data
      .filter((item) => {
        if (!item) return false;

        if (searchColumn === "first") {
          return item.name?.toLowerCase().includes(query);
        } else {
          const address = item.address?.formattedAddressLines || [];
          return address.join(", ").toLowerCase().includes(query);
        }
      })
      .slice(0, 10);
  }, [data, searchQuery, searchColumn]);

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  return (
    <div className="w-3/4 mx-auto">
      <table className="w-full border border-[#007945]">
        <thead>
          <tr className="bg-white text-[#007945] font-bold text-2xl">
            <th className="border-3 border-[#007945] py-5 px-6">Werkzeug</th>
            <th className="border-3 border-[#007945] py-5 px-6">Adresse</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr
              key={item._id}
              className="bg-white text-black font-bold text-lg text-center"
            >
              <td className="border-3 border-[#007945] py-8 px-4">
                {item.name}
              </td>
              <td className="border-3 border-[#007945] py-8 px-4">
                {item.address && item.address.formattedAddressLines
                  ? item.address.formattedAddressLines.join(", ")
                  : "Address not available"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
