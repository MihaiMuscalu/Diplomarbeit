import React from 'react';


const loadData = () => {

  fetch("https://672255ce2108960b9cc40294.mockapi.io/data").then((result) => {
      result.json().then((data) => {
          fillTable(data);
      })
  })
} 
//Loads the API Data into the HTML Element with the ID Rows
const fillTable = (data) => {
  let Werkzeug = ""
  let Adresse = ""
  let Info = ""

  for (let i = 0; i <=10; i++) {
      Werkzeug = '<td class="border-3 border-green-600 py-8 px-4">' + data[i].first +'</td>';
      Adresse = '<td class="border-3 border-green-600 py-8 px-4">'+ data[i].second +'</td>';
      Info = '<td class="border-3 border-green-600 py-8 px-4"> <button className="  text-white transition-transform  duration-100  ease-in-out transform active:scale-90 bg-green-600 py-2 px-4 w-3/4 h-10 text-center font-bold m-1">Informationen</button></td>';
      document.getElementById("rows").innerHTML += "<tr class='bg-white text-black font-bold text-lg text-center'>" +Werkzeug + Adresse +Info+ "</tr>";
//BUG: If the function (className) is left as is and not changed to (class), it will break the code as Tailwind does not recognize it.
  };

}
//Call of load Data function to load the API data and put it into the HTML Element
loadData();


function Table() {
  return (
    <div  className="w-3/4 mx-auto"> {/* Adjusted width and centered */}
    {/* Main Table */}
      <table className="w-full border border-green-600">
        <thead>
          <tr className="bg-white text-green-600 font-bold text-2xl">
            <th className="border-3 border-green-600 py-5 px-6">Werkzeug</th>
            <th className="border-3 border-green-600 py-5 px-6">Adresse</th>
            <th className="border-3 border-green-600 py-5 px-6">Mehr Info</th>
            
          </tr>
        </thead>
        <tbody id="rows">
        {/* API Data comes here */}
        </tbody>
      </table>
    </div>
  );
}


export default Table;
