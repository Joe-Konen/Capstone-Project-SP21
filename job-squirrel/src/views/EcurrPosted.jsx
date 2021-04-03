import React, {useState, useEffect} from "react";
import "./stylesheets/Style.css";
import Axios from 'axios';

function EcurrPosted() {
  const [empID, setEmpID] = useState("")
  const [job, setJob] = useState([])

  const getID = () => {
  
    Axios.get('http://localhost:3001/employerID')
    .then(function (response) {
        const user = response.data
        console.log(user[0])
        
        setEmpID(user[0]);
        //console.log(user)
    })
  }

  const getTable = () => {
    Axios.get('http://localhost:3001/myJobsPosted')
    .then(function(response) {

    })
  }

  useEffect(() => {
    getID();
  }, [empID])
  
  return (
    <div>
      
      <h3 style={{textAlign: 'center', padding: '40px'}}>Currently Open Job Postings for Employee ID: {empID}</h3>
      
    </div>
  );
}

export default EcurrPosted;