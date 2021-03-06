import React from "react";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";


function Footer() {
  render();

  return (
    <>
      <div className="nav">
        <button id="header-btn" type="button" class="btn btn-outline-primary btn-sm">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Home
          </Link>
        </button>

        {/* <div className="nav-item"> */}
        <button id="header-btn" type="button" class="btn btn-outline-primary btn-sm">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/entertainment"
          >
            Entertainment News
          </Link>
        </button>
        {/* </div> */}

        <button id="header-btn" type="button" class="btn btn-outline-primary btn-sm">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/businessnews"
          >
            Business News
          </Link>
        </button>

        <button id="header-btn" type="button" class="btn btn-outline-primary btn-sm">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/technews"
          >
            Tech News
          </Link>
        </button>

        <button id="header-btn" type="button" class="btn btn-outline-primary btn-sm">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/latinonews"
          >
            Latino News
          </Link>
        </button>
      </div>
      <div className="footer-section">
        <h6 className='footer-title'>GA-Project 2 @ 2019. All rights reserved.</h6>
        
      </div>
    </>
  );
}

export default Footer;
