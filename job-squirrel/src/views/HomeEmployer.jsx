import React from 'react';
import Axios from 'axios';
import {useHistory} from "react-router-dom";
// import sections

import EmployerHome from '../components/sections//employerHome/employerHome';

var loggedIn = false;

const HomeEmployer = () => {

  const history = useHistory();

  const userCheck = () => {
    if(!loggedIn){
        loggedIn = true;
        Axios.get('http://localhost:3001/checkAccess')
        .then(function (res) {
            if(res.data == "not logged in"){
              history.push("/");
            }
        })
      }
  }

  userCheck();

  return (
    <>
      <EmployerHome invertMobile topDivider imageFill className="illustration-section-02" />
    </>
  );
}

export default HomeEmployer;