import React, {Component, useState} from "react";
import './stylesheets/Style.css';



function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
    return (

        <body classname="LogPage" style={{display: "flex", justifyContent: "center"}}>
        <div className="LogPageDiv">
            <div className="register">
                <h1>Need to register?</h1>
                <button className="help">I'm looking for help</button>
                <button className="work">I'm looking for work</button>
            </div>
            <div className="login">
                <h1>Already have an account?</h1>
                <h3>Sign in here</h3>
                <input type="text"
                placeholder="username"
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
                />
                <input type="password"
                placeholder="password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                />
                <button className="loginButton">Login</button>
            </div>
        </div>
        </body>
    );
}


export default Login;