import React, { useState, useEffect } from "react";

function Table({ searchQuery }) {
  const [data, setData] = useState([]); // Store fetched data

  // Fetch data when authenticated
  useEffect(() => {
    fetch("http://10.0.0.201:8080/mainTable")
      .then((result) => result.json())
      .then((apiData) => {
        console.log("API Data: " + apiData); // Inspect the fetched data

        const newDataArray = [];

        if (Array.isArray(apiData)) {
          setData(apiData);
        } else {
          // If it's an object, add it to an array
          newDataArray.push(apiData);
          setData(newDataArray);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredData = data.filter(
    (item) =>
      item &&
      item.name &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("Filtered Data: " + filteredData);

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
          {filteredData.slice(0, 10).map((item) => (
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
