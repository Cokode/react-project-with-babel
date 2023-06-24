import React from "react";
import { useState } from "react";
import App from "./App";

export default function Person(props) {
    const [name, setName] = useState("John");

    return (
        <div className='card'>
            <h1> This Information is for {name}</h1>
            <p>my name is {name} and  I am {props.age} years old</p>
            <button type="button" onClick={()=>setName(props.name)}>Button</button>
        </div>
    )
}