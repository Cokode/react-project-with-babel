import React from "react";
import { useState } from "react";

function ChangeColor() {
    const [color, setColor] = useState("RED");

    return (
        <div>
            <h1> My colors</h1>
            <p> my favourite color is {color}!</p> 
            <button type="button" 
                onClick={setColor("BLUE")}>Blue</button>
        </div>
    )
}

export default ChangeColor;