import React, {useState, useEffect} from "react";
import "./stylesheets/Style.css";
import Axios from 'axios';

function EcurrPosted() {
  const [empID, setEmpID] = useState("")
  const [jobID, setJobID] = useState("")
  const [jobName, setJobName] = useState("")
  const [jobCat, setJobCat] = useState("")
  const [wage, setWage] = useState("")
  const [skill, setSkill] = useState("")
  const [exp, setExp] = useState("")
  const [date, setDate] = useState("")
  const [status, setStatus] = useState("")
  const [desc, setDesc] = useState("")

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
    Axios.get('http://localhost:3001/employerJob')
    .then(function(response) {
      const user = response.data;
      setJobID(user[0])
      console.log(user)

    })
  }

  useEffect(() => {
    getID();
    getTable();
  }, [empID])
  
  return (
    <div>
      
      <h3 style={{textAlign: 'center', padding: '40px'}}>Currently Open Job Postings for Employee ID: {empID}</h3>
      
    </div>
  );
}

export default EcurrPosted;