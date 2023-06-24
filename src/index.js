import React from "react";
import ReactDOM from "react-dom/client";

import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from "./components/Person";

function Lapp() { 
    return ( 
        <div className="container">
            <h1>Rick and Morty</h1>
            <List />
        </div>
    )
}

function Package() {
    return (
        <div className="container">
            <Person
            name = "Collins"
            age = "29" />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Package />);