import React from 'react';
import './App.css';
import Banner from './Components.js/Banner/Banner';
import Navbar from './Components.js/Navbar/Navbar';
import RowPost from './Components.js/RowPost/RowPost';
import {originals,actions,romance,horror,comedy,documentaries} from './urls'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={originals} />
      <RowPost title='Action' isSmall url={actions} />
      <RowPost title='Comedy' isSmall url={comedy} />
      <RowPost title='Horror' isSmall url={horror} />
      <RowPost title='Romance' isSmall url={romance} />
      <RowPost title='Documentaries' isSmall url={documentaries} />
    </div>
  );
}

export default App;
