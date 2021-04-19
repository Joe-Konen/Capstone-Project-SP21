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
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  
  const history = useHistory();
  
  const routeChange = () => {
    let path = 'Login';
    history.push(path);
    }

    const getAddress = () => {
        Axios.get("http://localhost:3001/SjobBoard").then((response)=>{
            setAddress(response.data)
            setEmployerID(response.data.employerID)
            //console.log(response.data)
        })
    }

    useEffect(() => {
        getAddress();

    }, []) 

    useEffect(() => {
        address.map((a) => {
            // console.log(a.address)
            Geocode.fromAddress(a.address).then(
                response => {
                    setLat(response.results[0].geometry.location.lat)
                    setLng(response.results[0].geometry.location.lng)

                    
                        Axios.post("http://localhost:3001/SjobBoard", {
                            latitude: response.results[0].geometry.location.lat,
                            longitude: response.results[0].geometry.location.lng
                        }).then((response2) => {
                            console.log("F1" + response2);
                        });
                    

                    console.log(a.address)
                    
                    // console.log(response.results[0].geometry.location.lat)
                    // console.log(response.results[0].geometry.location.lng)

        

                }
            )
            
        })
        
    }, [address])
  
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