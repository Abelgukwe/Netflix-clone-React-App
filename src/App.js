import React from 'react';
import './App.css';
import Banner from './Components.js/Banner/Banner';
import Navbar from './Components.js/Navbar/Navbar';
import RowPost from './Components.js/RowPost/RowPost';


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
