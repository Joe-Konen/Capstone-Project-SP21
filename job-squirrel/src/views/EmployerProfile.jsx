import React, {useState} from "react";
import Axios from "axios";
import "./stylesheets/Style.css";
import {useHistory} from "react-router-dom";

var grabbedData = false;

function EmployerProfile() {
  const [usernameEmp, setUsername] = useState("");
  const [passwordEmp, setPassword] = useState("");
  const [addressEmp, setAddress] = useState("");
  const [fNameEmp, setFirstName] = useState("");
  const [lNameEmp, setLastName] = useState("");
  const [emailEmp, setEmail] = useState("");

  const history = useHistory();

 
const getData = () => {
    if(!grabbedData){
        grabbedData = true;
        Axios.get('http://localhost:3001/getEmployer')
        .then(function (res) {
            const user = res.data;
            setUsername(user[0]);
            setPassword(user[1]);
            setEmail(user[2]);
            setAddress(user[3]);
            setFirstName(user[4]);
            setLastName(user[5]);
        })
    }
}

    const routeChange = () => {
        let path = 'HomeEmployer';
        history.push(path);
    }

    const employerRegister = () => {
        Axios.post("http://localhost:3001/employerEdit", {
            username: usernameEmp,
            password: passwordEmp,
            fName: fNameEmp,
            lName: lNameEmp,
            email: emailEmp,
            address: addressEmp,
        }).then((response) => {
            console.log(response);
            if(response.data == "editedEmployer"){
                history.push("/HomeEmployer");
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
                defaultValue = {fNameEmp}
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}
            />
            <label for="lName">Last Name: </label>
                <input type="text"
                placeholder="Last Name"
                id = "lName"
                defaultValue = {lNameEmp}
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
            />
            <label for="email">Email: </label>
                <input type="text"
                placeholder="Email"
                id = "email"
                defaultValue = {emailEmp}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <label for="username">Username: </label>
                <input type="text"
                placeholder="Username"
                id = "username"
                defaultValue = {usernameEmp}
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />
            <label for="password">Password: </label>
                <input type="password"
                placeholder="Password"
                id = "password"
                defaultValue = {passwordEmp}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <label for="age">Address: </label>
                <input type="text"
                placeholder="Address"
                id = "address"
                defaultValue = {addressEmp}
                onChange={(e) => {
                    setAddress(e.target.value);
                }}
            />
            <button className="backButton" onClick={routeChange}>Cancel</button>
            <button onClick={employerRegister}>Confirm Edits</button>
        </div>
    </div>
    );
}

export default EmployerProfile;