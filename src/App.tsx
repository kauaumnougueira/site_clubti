import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Principal from "./pages/Principal";
import Cases from "./pages/Cases";
import Case from "./components/banners/cases/cases_individuais/layout/Case"

function App() {
    const [page, setPage] = useState(() => {
        // Recupera a página do localStorage ou usa 'principal' como padrão
        return localStorage.getItem('page') || 'principal';
    });

    useEffect(() => {
        // Atualiza o localStorage sempre que a página muda
        localStorage.setItem('page', page);
    }, [page]);



    return (
        <div className="App">
            <Header setPage={setPage} />
            {page === 'principal' && <div id="index"> <Principal /> </div>}
            {page === 'cases' && <Cases setPage={setPage} />}
            {page === 'case' && <Case/>}
        </div>
    );
}

export default App;

