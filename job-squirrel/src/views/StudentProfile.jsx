import React, {useState} from "react";
import Axios from "axios";
import "./stylesheets/Style.css";
import {useHistory} from "react-router-dom";

var grabbedData = false;

function StudentProfile () {

const [usernameStu, setUsername] = useState("");
const [passwordStu, setPassword] = useState("");
const [fNameStu, setFirstName] = useState("");
const [lNameStu, setLastName] = useState("");
const [emailStu, setEmail] = useState("");
const [ageStu, setAge] = useState("");
const [schoolStu, setSchool] = useState("");

const history = useHistory();

const getData = () => {
    if(!grabbedData){
        grabbedData = true;
        Axios.get('http://localhost:3001/getStudent')
        .then(function (res) {
            const user = res.data;
            setUsername(user[0]);
            setPassword(user[1]);
            setEmail(user[2]);
            setAge(user[3]);
            setFirstName(user[4]);
            setLastName(user[5]);
            setSchool(user[6]);
        })
    }
}

    const routeChange = () => {
        let path = 'HomeStudent';
        history.push(path);
    }

    const employerRegister = () => {
        Axios.post("http://localhost:3001/editStudent", {
            username: usernameStu,
            password: passwordStu,
            school: schoolStu,
            fName: fNameStu,
            lName: lNameStu,
            email: emailStu,
            age: ageStu,
        }).then((response) => {
            console.log(response);
            if(response.data == "edited"){
                history.push("/HomeStudent");
            };
        });
    }

    getData();

    return (
    <div class="EditProfile">
        <div class="Register">
            <h1>Edit Profile</h1>
        </div>
        <div class="Register">
            <p>Here, you can make any desired edits to your profile. Just change what you like and click "Confirm Edits"</p>
        </div>
        <div class="Register">
            <label for="fName">First Name: </label>
                <input type="text"
                placeholder="First Name"
                id = "fName"
                defaultValue = {fNameStu}
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}
            />
            <label for="lName">Last Name: </label>
                <input type="text"
                placeholder="Last Name"
                id = "lName"
                defaultValue = {lNameStu}
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
            />
            <label for="email">Email: </label>
                <input type="text"
                placeholder="Email"
                id = "email"
                defaultValue = {emailStu}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <label for="username">Username: </label>
                <input type="text"
                placeholder="Username"
                id = "username"
                defaultValue = {usernameStu}
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />
            <label for="password">Password: </label>
                <input type="password"
                placeholder="Password"
                id = "password"
                defaultValue = {passwordStu}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <label for="school">School: </label>
                <input type="text"
                placeholder="School"
                id = "school"
                defaultValue = {schoolStu}
                onChange={(e) => {
                    setSchool(e.target.value);
                }}
            />
            <label for="age">Age: </label>
                <input type="text"
                placeholder="Age"
                id = "age"
                defaultValue = {ageStu}
                onChange={(e) => {
                    setAge(e.target.value);
                }}
            />
            <button className="backButton" onClick={routeChange}>Cancel</button>
            <button onClick={employerRegister}>Confirm Edits</button>
        </div>
    </div>
    );
}

export default StudentProfile;

import './stylesheets/Style.css';
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
        <div className="currentInfo">
            <h1>My Profile</h1>
            <p>Username: {username}</p>
            <p>First Name: {username}</p>
            <p>Last Name: {username}</p>
            <p>School: {username}</p>
            <p>Current Password: {password}</p>
            
        </div>
        <div className="change-info">
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
                    className="button button-primary button-wide-mobile" >Change Selected Fields</button>
            </form>
        </div>
        
    </div>
);
}

export default Login;

