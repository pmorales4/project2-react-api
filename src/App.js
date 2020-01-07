import React from "react";
import Footer from "./Component/Footer.jsx";
import Header from "./Component/Header.jsx";
import Main from "./Component/Main.jsx";
import Break from "./Component/BreakNews/BreakingNews.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p></p>
      <p></p>

      
      <Header />
      <Break />
      <div className='breakingnews-section-div'>
      <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
