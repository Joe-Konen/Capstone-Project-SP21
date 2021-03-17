import React, {useState} from "react";
import Axios from "axios";
import "./stylesheets/Style.css";
import {useHistory} from "react-router-dom";

function RegisterEmployer() {
  const [usernameReg, setUsername] = useState("");
  const [passwordReg, setPassword] = useState("");
  const [addressReg, setAddress] = useState("");
  const [phoneNumReg, setPhone] = useState("");
  const [fNameReg, setFirstName] = useState("");
  const [lNameReg, setLastName] = useState("");
  const [emailReg, setEmail] = useState("");
  
  const history = useHistory();
  
  const routeChange = () => {
    let path = 'Login';
    history.push(path);
    }
  
  const employerRegister = () => {
      Axios.post("http://localhost:3001/employerRegister", {
        username: usernameReg,
        password: passwordReg,
        address: addressReg,
        phone: phoneNumReg,
        fName: fNameReg,
        lName: lNameReg,
        email: emailReg,
      }).then((response) => {
        console.log(response);
        if(response.data == "registered"){
            history.push("/HomeEmployer");
        };
      });
    }
    return (
        <div className="Login">
            <div className="Register">
                <h1>Employer Registration</h1>
            </div>
                <div class="Register">
                    <label for="fName">First Name: </label>
                    <input type="text"
                    placeholder="First Name"
                    id = "fName"
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                    required
                    />
                    <label for="lName">Last Name: </label>
                    <input type="text"
                    placeholder="Last Name"
                    id = "lName"
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                    required
                    />
                    <label for="user">Username: </label>
                    <input type="text"
                    placeholder="username"
                    id = "user"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    required
                    />
                    <label for="password">Password: </label>
                    <input type="password"
                    placeholder="password"
                    id = "password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required
                    />
                    <label for="email">Email: </label>
                    <input type="text"
                    placeholder="Email"
                    id = "email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required
                    />
                    <label for="address">Address: </label>
                    <input type="text"
                    placeholder="address"
                    id = "address"
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                    required
                    />
                    <label for="phoneNum">Phone Number: </label>
                    <input type="text"
                    placeholder="phone number"
                    id = "phoneNum"
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                    required
                    />
                    <button className="backButton" onClick={routeChange}>Cancel</button>
                    <button onClick={employerRegister}>Register</button>
                </div>
        </div>
    );
}

export default RegisterEmployer;