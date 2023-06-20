import React from "react";
import ReactDOM from "react-dom/client";

import List from './components/List';
import App from "./components/App";

function Lapp() { 
    return ( 
        <div>
            <h1>Rick and Morty</h1>
            <List />
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Lapp />);