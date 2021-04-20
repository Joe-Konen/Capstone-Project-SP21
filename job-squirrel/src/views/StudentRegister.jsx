import React, {useState} from "react";
import Axios from "axios";
import "./stylesheets/Style.css";
import {useHistory} from "react-router-dom";

function RegisterStudent() {
  const [usernameReg, setUsername] = useState("");
  const [passwordReg, setPassword] = useState("");
  const [schoolReg, setSchool] = useState("");
  const [phoneNumReg, setPhone] = useState("");
  const [fNameReg, setFirstName] = useState("");
  const [lNameReg, setLastName] = useState("");
  const [ageReg, setAge] = useState("");
  const [emailReg, setEmail] = useState("");

  const history = useHistory();

  const routeChange = () => {
      let path = 'Login';
      history.push(path);
  }

  const studentRegister = () => {
      Axios.post("http://localhost:3001/studentRegister", {
        username: usernameReg,
        password: passwordReg,
        school: schoolReg,
        phone: phoneNumReg,
        fName: fNameReg,
        lName: lNameReg,
        age: ageReg,
        email: emailReg,
      }).then((response) => {
        console.log(response);
        if(response.data == "registered"){
            history.push("/Login");
        };
      });
    }
    return (

    <div className="container-xs">
        <div>
            <div>
                <h1>Student Registration</h1>
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
                        <label for="age">Age: </label>
                        <input type="text"
                        placeholder="Age"
                        className="form-input"
                        id = "age"
                        onChange={(e) => {
                            setAge(e.target.value);
                        }}
                        required
                        />
                        <label for="user">Username: </label>
                        <input type="text"
                        placeholder="Username"
                        className="form-input"
                        id = "user"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        required
                        />
                        <label for="password">Password: </label>
                        <input type="password"
                        placeholder="Password"
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
                        <label for="school">School: </label>
                        <input type="text"
                        placeholder="School"
                        className="form-input"
                        id = "school"
                        onChange={(e) => {
                            setSchool(e.target.value);
                        }}
                        required
                        />
                        <label for="phoneNum">Phone Number: </label>
                        <input type="text"
                        placeholder="Phone Number"
                        className="form-input"
                        id = "phoneNum"
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                        required
                        />
                        <button className="button button-primary button-wide-mobile" onClick={routeChange}>Cancel</button>
                        <button onClick={studentRegister} type="submit"
                        className="button button-primary button-wide-mobile">Register</button>
                </div>
        </div>
        </div>    
    );
}
export default RegisterStudent;