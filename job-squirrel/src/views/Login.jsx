import React, {useState} from "react";
import './stylesheets/Style.css';
import Axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const[loginStatus, setLoginStatus] = useState("");

  const login = () => {
      Axios.post("http://localhost:3001/loginUser",{
          username: username,
          password: password,
      }).then((response) => {
          console.log(response);
      });
  };

    return (

        <div className="Login">
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
            <button onClick={login} className="loginButton">Login</button>
        </div>
        <h1>{loginStatus}</h1>
    </div>
);
}


export default Login;