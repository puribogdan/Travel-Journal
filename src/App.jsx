import { useState } from 'react';
import React from 'react';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import './Style.css';
import Data from './Data';

export default function App() {
  const [count, setCount] = useState(0);

  const dataElements = Data.map((data) => {
    return <Cards key={data.title} {...data} />;
  });

  return (
    <div className="App">
      <Navbar />

      <section>{dataElements}</section>
    </div>
  );
}
