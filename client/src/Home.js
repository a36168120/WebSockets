import React from "react";
import "./App.css";
import brofist from "./assets/img/brofist.png";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={brofist} className="App-logo" alt="logo" />
        <h1>The beginning of everything</h1>
      </header>
    </div>
  );
};

export default Home;
