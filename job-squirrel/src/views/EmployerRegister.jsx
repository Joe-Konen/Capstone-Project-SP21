import React, {useState} from "react";
//import "../App.css";

function RegisterStudent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNum, setPhone] = useState("");
  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");

    return (

        <div className="Login">
            <div className="register">
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
                />
                <label for="lName">Last Name: </label>
                <input type="text"
                placeholder="Last Name"
                id = "lName"
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
                />
                <label for="user">Username: </label>
                <input type="text"
                placeholder="username"
                id = "user"
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
                />
                <label for="password">Password: </label>
                <input type="password"
                placeholder="password"
                id = "password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                />
                <label for="address">Address: </label>
                <input type="text"
                placeholder="address"
                id = "address"
                onChange={(e) => {
                    setAddress(e.target.value);
                }}
                />
                <label for="phoneNum">Phone Number: </label>
                <input type="text"
                placeholder="phone number"
                id = "phoneNum"
                onChange={(e) => {
                    setPhone(e.target.value);
                }}
                />
                <button className="registerButton">Register</button>
                <button className="backButton">Cancel</button>
            </div>
        </div>
    );
}


export default RegisterStudent;