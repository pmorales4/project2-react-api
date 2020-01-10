import React from "react";
import { render } from "@testing-library/react";
import TheDate from "../Component/CurrentDate/Date.jsx";
import { Link } from "react-router-dom";

function Header() {
  render();
  return (
    <>
      <div className="title-header">
        <h1> World News Report </h1>
      </div>
      <div className="nav">
        <button
          id="header-btn"
          type="button"
          class="btn btn-outline-light btn-lg"
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Home
          </Link>
        </button>

        <button
          id="header-btn"
          type="button"
          class="btn btn-outline-light btn-lg"
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/entertainment"
          >
            Entertainment News
          </Link>
        </button>

        <button
          id="header-btn"
          type="button"
          class="btn btn-outline-light btn-lg"
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/businessnews"
          >
            Business News
          </Link>
        </button>

        <button
          id="header-btn"
          type="button"
          class="btn btn-outline-light btn-lg"
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/technews"
          >
            Tech News
          </Link>
        </button>

        <button
          id="header-btn"
          type="button"
          class="btn btn-outline-light btn-lg"
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/latinonews"
          >
            Latino News
          </Link>
        </button>
      </div>
      <h6>
        {/* Date Component on each page in Header */}
        <TheDate />
      </h6>
    </>
  );
}

export default Header;
