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
                className="form-input"
                id = "fName"
                defaultValue = {fNameStu}
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}
            />
            <label for="lName">Last Name: </label>
                <input type="text"
                placeholder="Last Name"
                className="form-input"
                id = "lName"
                defaultValue = {lNameStu}
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
            />
            <label for="email">Email: </label>
                <input type="text"
                placeholder="Email"
                className="form-input"
                id = "email"
                defaultValue = {emailStu}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <label for="username">Username: </label>
                <input type="text"
                placeholder="Username"
                className="form-input"
                id = "username"
                defaultValue = {usernameStu}
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />
            <label for="password">Password: </label>
                <input type="password"
                placeholder="Password"
                className="form-input"
                id = "password"
                defaultValue = {passwordStu}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <label for="school">School: </label>
                <input type="text"
                placeholder="School"
                className="form-input"
                id = "school"
                defaultValue = {schoolStu}
                onChange={(e) => {
                    setSchool(e.target.value);
                }}
            />
            <label for="age">Age: </label>
                <input type="text"
                placeholder="Age"
                className="form-input"
                id = "age"
                defaultValue = {ageStu}
                onChange={(e) => {
                    setAge(e.target.value);
                }}
            />
            <button className="button button-primary button-wide-mobile" onClick={routeChange}>Cancel</button>
            <button className="button button-primary button-wide-mobile" onClick={employerRegister}>Confirm Edits</button>
        </div>
    </div>
    );
}

export default StudentProfile;


