import React from 'react';

function Table() {
  return (
    <div className="w-3/4 mx-auto"> {/* Adjusted width and centered */}
      <table className="w-full border border-green-600">
        <thead>
          <tr className="bg-white text-green-600 font-bold text-2xl">
            <th className="border-3 border-green-600 py-5 px-6">Werkzeug</th>
            <th className="border-3 border-green-600 py-5 px-6">Adresse</th>
          </tr>
        </thead>
        <tbody>
          {Array(8).fill().map((_, idx) => (
            <tr key={idx}>
              <td className="border-3 border-green-600 py-8 px-4"></td>
              <td className="border-3 border-green-600 py-8 px-4"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Table;
