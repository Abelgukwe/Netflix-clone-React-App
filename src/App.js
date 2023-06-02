import React from 'react';
import './App.css';
import Banner from './Components.js/Banner/Banner';
import Navbar from './Components.js/Navbar/Navbar';
import RowPost from './Components.js/RowPost/RowPost';
import {originals,actions} from './urls'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={originals} />
      <RowPost title='Action' isSmall url={actions} />
    </div>
  );
}

export default App;
