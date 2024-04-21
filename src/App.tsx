import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Banner1 from "./components/banners/Banner1";
import FitaEmserh from "./components/FitaEmserh";
import Banner2 from "./components/banners/Banner2";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Banner3 from "./components/banners/Banner3";
import Banner4 from "./components/banners/Banner4";


function App() {
  return (
    <div className="App">
      <Header />
      <Banner1 />
      {/* <LogoRibbon /> fita que gira*/}
      <FitaEmserh />
      <Banner2 />
      <Banner3 />
      <Banner4/> 
    </div>
  );
}

export default App;
