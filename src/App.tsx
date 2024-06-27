import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Banner1 from "./components/banners/Banner1";
import FitaEmserh from "./components/Faixa/FitaEmserh";
import Banner2 from "./components/banners/Banner2";
import Banner3 from "./components/banners/Banner3";
import Banner4 from "./components/banners/Banner4";
import Banner5 from "./components/banners/Banner5";
import LogoRibbon from "./components/Faixa/LogoRibbon";

function App() {
    return (
        <div className="App">
            <div id="index">
                <Header />
            </div>
            <div>
                <Banner1 />
            </div>
            <LogoRibbon />
            <div id="beneficios">
                <Banner2 />
            </div>
            <div>
                <Banner3 />
            </div>
            {/*
            <div id="banner4">
                <Banner4 />
            </div>
            <Banner5 />
            */}
        </div>
    );
}

export default App;
