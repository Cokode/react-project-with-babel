import React from "react";
import ReactDOM from "react-dom";

//import App from '../components/App';
//import Lapp from '../components/Lapp';



function Lapp() {
   
    return ( 
        <div>
            <h1>Rick and Morty</h1>
            <h2>Collins Web App</h2>
            <ul>
                <li>
                    Collins
                </li>
                <li>
                    Paul
                </li>
                <li>
                    Doris
                </li>
            </ul>
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Lapp />);


//ReactDOM.render(<App />, document.getElementById('root')); 