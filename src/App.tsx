import React from 'react';

import './App.css';
import ProductGrid from './Components/ProductGrid';
import SearchBar from './Components/SearchBar';
import TopBar from './Components/TopBar';
import BG from './images/bg.png';

function App() {
  return (
    <>
      <TopBar />
      <SearchBar />

      <img src={BG} width='100%'></img>

      <ProductGrid/>
    </>
  );
}

export default App;
