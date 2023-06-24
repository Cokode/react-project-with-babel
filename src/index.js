import React from "react";
import ReactDOM from "react-dom/client";

import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';

function Lapp() { 
    return ( 
        <div className="container">
            <h1>Rick and Morty</h1>
            <List />
        </div>
    )
}

const roost = ReactDOM.createRoot(document.getElementById('root'));
roost.render(<Lapp />);