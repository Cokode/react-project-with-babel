import React, {Component} from "react";
import List from "./List";

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <forList />
            </div>
        )
    }
}

class forList extends Component{
    render() {
        return (
            <List />
        )
    }
}

export default App;
