import React from "react";
import Footer from "./Component/Footer.jsx";
import Header from "./Component/Header.jsx";
import Main from "./Component/Main.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Main />
        <Footer />
      </main>
    </div>
  );
}

export default App;
