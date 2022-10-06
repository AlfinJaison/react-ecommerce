import React, { useContext } from 'react';
import { GlobalState } from '../../GlobalState';
import './index.css'

function SearchBar() {

  const { wishList } = useContext(GlobalState)

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

      <div className='search-input'>
        <input type="text" placeholder='Search what you need' ></input>
        <span className='icon icon-search'></span>
      </div>

      <div className='search-bar-buttons'>
        <div className='icon-badge-container'>
          <span className='icon icon-heart dimOnHover pointer'></span>
          <div className='icon-badge'>{wishList.length}</div>
        </div>
        <span className='icon icon-cart dimOnHover pointer'></span>
        <span className='icon icon-user dimOnHover pointer'></span>
        <span className='icon icon-alarm dimOnHover pointer'></span>
      </div>

    </div>
  );
}

export default SearchBar;
