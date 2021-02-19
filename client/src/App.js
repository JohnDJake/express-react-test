import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
    const [apiState, setApiState] = useState([]);
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [accessToken, setAccessToken] = useState();

    useEffect(() => axios.get("/api/data", { headers: { "x-access-token": accessToken } }).then(({ data }) => setApiState(data)), [accessToken]);

    function signin(event) {
        event.preventDefault();
        axios.post("/api/auth/signin", { username: usernameInput, password: passwordInput }).then(({ data: user }) => {
            setAccessToken(user.accessToken);
            console.log(user);
        });
    }


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
            <main>
                <form onSubmit={signin}>
                    <input value={usernameInput} name="username" type="text" onChange={event => setUsernameInput(event.target.value)} />
                    <input value={passwordInput} name="password" type="password" onChange={event => setPasswordInput(event.target.value)} />
                    <button type="submit">Submit</button>
                </form>
            </main>
        </div>
    );
}

export default App;
