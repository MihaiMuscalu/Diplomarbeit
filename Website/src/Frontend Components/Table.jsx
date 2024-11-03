import React from 'react';


const loadData = () => {

  fetch("https://672255ce2108960b9cc40294.mockapi.io/data").then((result) => {
      result.json().then((data) => {
          fillTable(data);
      })
  })
} 

const fillTable = (data) => {
  let Werkzeug = ""
  let Adresse = ""

  for (let i = 0; i <=10; i++) {
      Werkzeug = '<td class="border-3 border-green-600 py-8 px-4">' + data[i].first +'</td>';
      Adresse = '<td class="border-3 border-green-600 py-8 px-4">'+ data[i].second +'</td>'
      document.getElementById("rows").innerHTML += "<tr class='bg-white text-green-600 font-bold text-lg text-center'>" + Werkzeug + Adresse +"</tr>";

  };

}
loadData();


function Table() {
  return (
    <div  className="w-3/4 mx-auto"> {/* Adjusted width and centered */}
      <table className="w-full border border-green-600">
        <thead>
          <tr className="bg-white text-green-600 font-bold text-2xl">
            <th className="border-3 border-green-600 py-5 px-6">Werkzeug</th>
            <th className="border-3 border-green-600 py-5 px-6">Adresse</th>
          </tr>
        </thead>
        <tbody id="rows">
      
        </tbody>
      </table>
    </div>
  );
}


export default Table;
