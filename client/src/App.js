import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
    const [apiState, setApiState] = useState([]);

    useEffect(() => axios.get("/api/data").then(({ data }) => setApiState(data)), []);


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
                <p>API Data:</p>
                <ol>
                    {apiState.map(obj => <li key={obj.id}>{obj.title}</li>)}
                </ol>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
