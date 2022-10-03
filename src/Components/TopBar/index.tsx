import React from 'react';
import './index.css'

function TopBar() {
  return (
    <div className="top-bar">
      <div className='company-logo'>Dealerz.</div>

      <div className="top-bar-links">

        <div className='dimOnHover link'>
          <span className='icon-phone icon'></span>
          Call Center
        </div>

        <div className='dimOnHover link'>
          <span className='icon-truck icon'></span>
          Shipping & Returns
        </div>

      </div>

    </div>
  );
}

export default TopBar;
