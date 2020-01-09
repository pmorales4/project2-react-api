import React from 'react';
import { render } from '@testing-library/react';
import { Link } from "react-router-dom";

function Footer() {
    render() 













        return (
        
<>
      <div className="nav">
      <button id='header-btn' type="button" class="btn btn-warning btn-sm">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">Home</Link>
          </button>

        {/* <div className="nav-item"> */}
        <button id='header-btn' type="button" class="btn btn-warning btn-sm">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/entertainment">Entertainment News</Link>
        </button>
        {/* </div> */}

        <button id='header-btn' type="button" class="btn btn-warning btn-sm">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/businessnews">Business News</Link>
          </button>

        <button id='header-btn' type="button" class="btn btn-warning btn-sm">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/technews">Tech News</Link>
          </button>

        <button id='header-btn' type="button" class="btn btn-warning btn-sm">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/latinonews">Latino News</Link>
          </button>
      </div>
      <div className='footer-section'>GA-Project 2 @ 2019. All rights reserved!!!!!!!</div>
    </>


        
        
      
        );
    

}

export default Footer;
