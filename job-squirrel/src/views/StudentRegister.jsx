import React, {useState} from "react";
import "./stylesheets/Style.css";

function RegisterStudent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNum, setPhone] = useState("");
  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");

    return (

        <div className="Login">
            <div class="Register">
                <h1>Student Registration</h1>
            </div>
            <form method = "post">
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
                        <button className="backButton">Cancel</button>
                        <input type="submit" value ="Register" class="Submit"></input>
                    </div>
            </form>
        </div>
    );
}

export default RegisterStudent;