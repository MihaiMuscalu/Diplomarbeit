import React, { useState, useEffect, useMemo } from "react";

function Table({ searchQuery, searchColumn }) {
  const [data, setData] = useState([]); // Store fetched data

  // Fetch data when authenticated
  useEffect(() => {
    fetch("http://10.0.0.201:8080/mainTable")
      .then((result) => result.json())
      .then((apiData) => {
        console.log("API Data: ", apiData); // Inspect the fetched data

        const newDataArray = [];

        if (Array.isArray(apiData)) {
          setData(apiData);
        } else {
          newDataArray.push(apiData);
          setData(newDataArray);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredData = useMemo(() => {
    console.log("Search Query: ", searchQuery); // Log the search query
    return data
      .filter((item) => {
        if (!item) return false;

        if (searchColumn === "first") {
          return item.name?.toLowerCase().includes(searchQuery.toLowerCase());
        } else {
          return item.address?.formattedAddressLines
            ?.join(", ")
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        }
      })
      .slice(0, 10);
  }, [data, searchQuery, searchColumn]);

  console.log("Filtered Data: ", filteredData);

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
