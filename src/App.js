import React from "react";
import Footer from "./Component/Footer.jsx";
import Header from "./Component/Header.jsx";

import Main from "./Component/Main.jsx";
import Break from "./Component/BreakNews/BreakingNews.jsx";
import EntertainNews from "./Component/EntertainNews/EntertainmentNews.jsx";
import TechnologyNews from "./Component/TechnologyNews/TechnologyNews.jsx";
import LatNews from "./Component/LatinNews/LatinNews.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
    

      <Header />
      {/* <Break /> */}
      <Main />
      {/* <EntertainNews />
      <TechnologyNews />
      <LatNews /> */}
      <Footer />
    </div>
  );
}

export default App;
