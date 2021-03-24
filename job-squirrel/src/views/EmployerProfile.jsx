import React, {useState} from "react";
import Axios from "axios";
import "./stylesheets/Style.css";
import {useHistory} from "react-router-dom";

function EmployerProfile() {
  const [usernameEd, setUsername] = useState("");
  const [passwordEd, setPassword] = useState("");
  const [addressEd, setAddress] = useState("");
  const [phoneNumEd, setPhone] = useState("");
  const [fNameEd, setFirstName] = useState("");
  const [lNameEd, setLastName] = useState("");
  const [emailEd, setEmail] = useState("");

  const history = useHistory();

  const routeChange = () => {
    let path = 'EmployerHome';
    history.push(path);
    }

  const employerProfile = () => {
      Axios.post("http://localhost:3001/employerEdit", {
        username: usernameEd,
        password: passwordEd,
        address: addressEd,
        phone: phoneNumEd,
        fName: fNameEd,
        lName: lNameEd,
        email: emailEd,
      }).then((response) => {
        console.log(response);
        //if(response.data == "dataEditedByUser"){
        //    history.push("/HomeEmployer");
        //};
      });
    }
    return (
        <div className="login">
            <div className="Register">
                <h1>Employer Profile</h1>
            </div>
                <div class="container">
                    <label for="fName">First Name:  </label>
                    <input type="text"
                    placeholder = 'firstname'
                    className="form-input"
                    id = "fName"
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                    required
                    />
                    <label for="lName">Last Name: </label>
                    <input type="text"
                    placeholder="Last Name"
                    className="form-input"
                    id = "lName"
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                    required
                    />
                    <label for="user">Username: </label>
                    <input type="text"
                    placeholder="username"
                    className="form-input"
                    id = "user"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    required
                    />
                    <label for="password">Password: </label>
                    <input type="password"
                    placeholder="password"
                    className="form-input"
                    id = "password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required
                    />
                    <label for="email">Email: </label>
                    <input type="text"
                    placeholder="Email"
                    className="form-input"
                    id = "email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required
                    />
                    <label for="address">Address: </label>
                    <input type="text"
                    placeholder="address"
                    className="form-input"
                    id = "address"
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                    required
                    />
                    <label for="phoneNum">Phone Number: </label>
                    <input type="text"
                    placeholder="phone number"
                    className="form-input"
                    id = "phoneNum"
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                    required
                    />
                    <div className="container-xs">
                    <button className="button button-primary button-wide-mobile" onClick={routeChange}>Cancel</button>
                    
                    <button onClick={employerProfile} className="button button-primary button-wide-mobile">Save</button>
                    </div>
                </div>
        </div>
    );
}

export default EmployerProfile;