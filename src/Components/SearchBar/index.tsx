import React from 'react';
import './index.css'

function SearchBar() {
  return (
    <div className="search-bar">

      <div className="search-bar-links">

        <div className='dimOnHover link' style={{ paddingLeft: 0 }}>
          Shop
        </div>

        <div className='dimOnHover link'>
          Promo
        </div>

        <div className='dimOnHover link'>
          About
        </div>

        <div className='dimOnHover link'>
          Blog
        </div>

      </div>

      <input className='search-input' type="text" placeholder='Search what you need' ></input>

      <div className='search-bar-buttons'>
        <span className='icon icon-heart dimOnHover'></span>
        <span className='icon icon-cart dimOnHover'></span>
        <span className='icon icon-user dimOnHover'></span>
        <span className='icon icon-alarm dimOnHover'></span>
      </div>

    </div>
  );
}

export default SearchBar;
