import React from "react";
import ReactDOM from "react-dom/client";

import List from './components/List';
import ChangeColor from "./components/color";

function Lapp() { 
    return ( 
        <div>
            <ChangeColor />
            <h1>Rick and Morty</h1>
            <List />
        </div>
    )
}

function Characters() {
    return <Character_two />
}

const roost = ReactDOM.createRoot(document.getElementById('root'));
roost.render(<Lapp />);