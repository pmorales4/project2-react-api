import React from "react";
import { render } from "@testing-library/react";

import { Route, Link, Switch } from "react-router-dom";


function Header() {
  render();
  return (
    <>
      <div className="nav">
      <button id='header-btn' type="button" class="btn btn-warning btn-lg">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">Home</Link>
          </button>

        {/* <div className="nav-item"> */}
        <button id='header-btn' type="button" class="btn btn-warning btn-lg">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/entertainment">Entertainment News</Link>
        </button>
        {/* </div> */}

        <button id='header-btn' type="button" class="btn btn-warning btn-lg">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/businessnews">Business News</Link>
          </button>

        <button id='header-btn' type="button" class="btn btn-warning btn-lg">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/technews">Tech News</Link>
          </button>

        <button id='header-btn' type="button" class="btn btn-warning btn-lg">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/latinonews">Latino News</Link>
          </button>
      </div>
     
    </>
  );
}

export default Header;
