import React, {Component, useState} from "react";
import './stylesheets/Style.css';
import Axios from "axios";
import { useHistory } from "react-router-dom";
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';




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

  const [error, setError] = useState("");

  const history = useHistory();

  Axios.defaults.withCredentials = true;
  
  const login = () => {
      Axios.post("http://localhost:3001/Login",{
          username: username,
          password: password,
      }).then((response) => { 
          setUsername(response.data.username);
          console.log(username)
          console.log(response.data)
          const user = localStorage.setItem('username', username)
          if(response.data == "You are logged in as a student"){
            history.push("/HomeStudent");
            console.log(user)

        }else if(response.data == "You are logged in as an employer"){
            history.push("/HomeEmployer");
            
        }else{
            console.log("Login incorrect, try again.");
            setError("Login incorrect, try again.");
        }
      });
    
  };

  function handleSubmit(event){
    event.preventDefault(); 
    
  }

    return (

        <div className="container-xs">
        <div className="register">
            <h1>Need to register?</h1>
            <ButtonGroup>
                <Button tag="a" color="primary" wideMobile href="StudentRegister">
                I'm looking for work
                </Button>
                <Button tag="a" color="primary" wideMobile href="EmployerRegister">
                I'm looking for help
                </Button>
            </ButtonGroup>        

        </div>
        <div className="login">
            <form onSubmit={handleSubmit}>
            <h1>Already have an account?</h1>
            <h3>Sign in here</h3>
            {(error != "") ? (<div className="error">{error}</div>) : ""}
            <input type="text"
            placeholder="username"
            className="form-input"
            onChange={(e) => {
                setUsername(e.target.value);
            }}
            />
            <input type="password"
            placeholder="password"
            className="form-input"
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            />
            <button onClick={login} type="submit" 
                    className="button button-primary button-wide-mobile" >Login</button>
            </form>
        </div>
        
    </div>
);
}

export default Login;
