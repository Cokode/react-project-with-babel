import React from "react";
import ReactDOM from "react-dom/client";

import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Header"

function Lapp() { 
    return ( 
        <div className="container">
            <Nav />
            <List />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Lapp />);