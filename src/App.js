import React from "react";
import Footer from "./Component/Footer.jsx";
import Header from "./Component/Header.jsx";
import Main from "./Component/Main.jsx";
import Break from "./Component/BreakNews/BreakingNews.jsx";
import EntertainNews from "./Component/EntertainNews/EntertainmentNews.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <p></p>
      <p></p>

      <Header />

      <Break />

      <Main />

      <EntertainNews />

      <Footer />
    </div>
  );
}

export default App;
