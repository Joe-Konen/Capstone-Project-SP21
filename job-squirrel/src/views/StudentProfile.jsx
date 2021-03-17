import React, {useState} from "react";
import Axios from "axios";
import "./stylesheets/Style.css";
import {useHistory} from "react-router-dom";

function StudentProfile () {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [fName, setFirstName] = useState("");
const [lName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [age, setAge] = useState("");
const [school, setSchool] = useState("");

const getData = () => {
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

    getData();

    return (
    <div class="EditProfile">
        <div class="Register">
            <h1>Edit Profile</h1>
        </div>
        <div class="Register">
            <label for="fName">First Name: </label>
                <input type="text"
                placeholder="First Name"
                id = "fName"
                defaultValue = {fName}
            />
            <label for="lName">Last Name: </label>
                <input type="text"
                placeholder="Last Name"
                id = "lName"
                defaultValue = {lName}
            />
            <label for="email">Email: </label>
                <input type="text"
                placeholder="Email"
                id = "email"
                defaultValue = {email}
            />
            <label for="username">Username: </label>
                <input type="text"
                placeholder="Username"
                id = "username"
                defaultValue = {username}
            />
            <label for="password">Password: </label>
                <input type="password"
                placeholder="Password"
                id = "password"
                defaultValue = {password}
            />
            <label for="school">School: </label>
                <input type="text"
                placeholder="School"
                id = "school"
                defaultValue = {school}
            />
            <label for="age">Age: </label>
                <input type="text"
                placeholder="Age"
                id = "age"
                defaultValue = {age}
            />
        </div>
    </div>
    );
}

export default StudentProfile;