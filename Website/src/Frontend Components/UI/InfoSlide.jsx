import React from 'react';
import Card from './Card';


const App = () => (
  <div className="flex flex-col items-center">
    <div className="w-full h-8 bg-green-800 mb-4"></div>
    <Card name="Türtscher Daniel" role="PL" />
    <Card name="Ehe Immanuel" role="PM" />
    <Card name="Muscalu Mihai" role="PM" />
    <Card name="Hallinger Eduard" role="Betreuer" />
  </div>
);

export default App;
