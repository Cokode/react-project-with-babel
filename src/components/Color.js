import {useState } from "react";
import React from "react";

function ChangeColor() {
    const [color, setColor] = useState("RED");

    function HandleColorChange() {
        setColor('BLUE');
    }

    return (
        <div>
            <h1>my favourite color is {color}!</h1> 
            <button type="button" 
                onClick={HandleColorChange}>Blue</button>
        </div>
    )
}

export default ChangeColor;
