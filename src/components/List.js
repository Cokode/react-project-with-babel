import React from "react";
import Character from "./Character";
import { useState } from "react";

function List() {
    const [characters, setCharacters] = useState([]);
    return (
        <div>
            <h2>Characters</h2>
            <Character />
            <Character />
        </div>
    )
}

export default List;