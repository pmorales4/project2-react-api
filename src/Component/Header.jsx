import React from "react";
import { render } from "@testing-library/react";

function Header() {
  render();
  return (
    <div className="nav">
      <button type="button" id='header-btn'  class="btn btn-light btn-lg">
        Home
      </button>

      <button type="button" id='header-btn' class="btn btn-light btn-lg">
        Business News
      </button>

      <button type="button" id='header-btn' class="btn btn-light btn-lg">
        Entertainment
      </button>

      <button type="button" id='header-btn' class="btn btn-light btn-lg">
        Tech News
      </button>

      <button type="button" id='header-btn' class="btn btn-light btn-lg">
        Latino News
      </button>
    </div>
  );
}

export default Header;
