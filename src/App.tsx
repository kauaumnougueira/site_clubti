import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Principal from "./pages/Principal";
import Cases from "./pages/Cases";

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
            {page === 'principal' ? (
                <div id="index">
                    <Principal />
                </div>
            ) : (
                <Cases />
            )}
        </div>
    );
}

export default App;
