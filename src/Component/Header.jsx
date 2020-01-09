import React from "react";
import { render } from "@testing-library/react";

import { Route, Link, Switch } from "react-router-dom";
// import Home from "./Component/Main.jsx";
// import Just from './Component/EntertainNews/EntertainmentNewsTitle.jsx';

function Header() {
  render();
  return (
    <>
      <div className="nav">
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="nav">
        <div className="nav-item">
          <Link to="/entertainment">Entertainment News</Link>
        </div>
      </div>

      {/* <main>
        <Switch>
        <Route exact path="/">
          <Home />
          </Route>  
        </Switch>
      </main> */}

       
       {/* <button type="button" id="header-btn" class="btn btn-light btn-lg">
         <Link to="/Businessnews">Business News</Link> 
        Business News
      </button> */}

      {/* <button type="button" id="header-btn" class="btn btn-light btn-lg">
         <Link to="/Entertainment">Entertainment</Link>
        Entertainment
      </button> */}

      {/* <button type="button" id="header-btn" class="btn btn-light btn-lg">
        <Link to="/Technews">Tech News</Link> 
        Tech News
      </button> */}

      {/* <button type="button" id="header-btn" class="btn btn-light btn-lg">
        <Link to="/Latinonews">Latino News</Link> 
        Latino News
      </button>    */}
    </>
  );
}

export default Header;
