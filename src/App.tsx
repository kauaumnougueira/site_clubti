import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Principal from "./pages/Principal";
import Cases from "./pages/Cases";

function App() {
    const [page, setPage] = useState('principal')

    return (
        <div className="App">
            <Header setPage={setPage}/>
            {page === 'principal' ? <div id="index">
                <Principal />
            </div> : <Cases/>}

        </div>
    );
}

export default App;
