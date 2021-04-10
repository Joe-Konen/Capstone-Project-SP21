import React, {useState, useEffect} from "react";
import "./stylesheets/Style.css";
import Axios from 'axios';
import moment from 'moment';

function EcurrPosted() {
  const [empID, setEmpID] = useState("")
  const [job, setJob] = useState([]);

  const getID = () => {
  
    Axios.get('http://localhost:3001/employerID')
    .then(function (response) {
        const user = response.data
        console.log(user[0])
        
        setEmpID(user[0]);
    })
  }

  const getTable = () => {
    Axios.get('http://localhost:3001/employerJob')
    .then(function(response) {
      setJob(response.data)
      console.log(response.data)

    })
  }

  useEffect(() => {
    getID();
    getTable();
  }, [empID])
  
  return (
    <div>
      
      <h3 style={{textAlign: 'center', padding: '40px'}}>Currently Open Job Postings for Employee ID: {empID}</h3>

      <div>
        {job ? <table style={{width: '70%', margin: 'auto'}}>
                <thead style={{width: '70%'}}> 
                    <tr>
                    <th>Employer ID</th>
                    <th>Job ID</th>
                    <th>Job Name</th>
                    <th>Category</th>
                    <th>Pay</th>
                    <th>Skill Level</th>
                    <th>Experience</th>
                    <th>Date Posted</th>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: 'left'}}>
                
                    {job.map((item) => (
                        <tr key={item.jobID} >
                            <td>{item.employerID}</td>
                            <td>{item.jobID}</td>
                            <td>{item.jobName}</td>
                            <td>{item.jobCategory}</td>
                            <td>${item.wage}</td>
                            <td>{item.skillLevel}</td>
                            <td>{item.experienceRequired}</td>
                            <td>{moment(item.datePosted).format('MM/DD/YYYY')}</td>
                            <td>{item.description}</td>   
                        </tr>
                    ))}
                </tbody>
            </table> : <h3 style={{textAlign: 'center'}}> You have no jobs posted</h3>}
      
      </div>
      
    </div>
  );
}

export default EcurrPosted;