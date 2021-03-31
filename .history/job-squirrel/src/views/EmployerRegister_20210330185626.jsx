import React, {useState} from "react";
import Axios from "axios";
import "./stylesheets/Style.css";
import {useHistory} from "react-router-dom";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyAD9W_BKtjjIUFDJKJ3dRGf14iLJKfuG7U");

function RegisterEmployer() {
  const [usernameReg, setUsername] = useState("");
  const [passwordReg, setPassword] = useState("");
  const [addressReg, setAddress] = useState("");
  const [phoneNumReg, setPhone] = useState("");
  const [fNameReg, setFirstName] = useState("");
  const [lNameReg, setLastName] = useState("");
  const [emailReg, setEmail] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  
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
        latitude: lat,
        longitude: lng,
      }).then((response) => {
        console.log(response);
        if(response.data == "registered"){
            history.push("/HomeEmployer");
        }
      });
      Geocode.fromAddress(addressReg).then(
        response => {
            setLat(response.results[0].geometry.location.lat)
            setLng(response.results[0].geometry.location.lng)
            console.log(response.results[0].geometry.location.lat)
            console.log(response.results[0].geometry.location.lng)
        }
    )
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
                    <button className="button button-primary button-wide-mobile" onClick={routeChange}>Cancel</button>
                    <button onClick={employerRegister} type="submit"
                        className="button button-primary button-wide-mobile">Register</button>
                </div>
        </div>
    );
}

export default RegisterEmployer;