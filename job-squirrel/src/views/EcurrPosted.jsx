import React, {useState, useEffect} from "react";
import "./stylesheets/Style.css";
import Axios from 'axios';
import moment from 'moment';
import ButtonGroup from "../components/elements/ButtonGroup";
import Button from '../components/elements/Button';

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

  const getTable = (empID) => {
    Axios.get(`http://localhost:3001/employerJob/${empID}`)
    .then(function(response) {
      setJob(response.data)
      console.log(response.data)

    })
  }

  const deleteJob = (jobID) => {
    Axios.delete(`http://localhost:3001/delete/${jobID}`)
    .then(function(response) {
        console.log("Deleted")
        setJob(job.filter((val) => {
          return val.jobID != jobID
        }))
    })

  }

  useEffect(() => {
    getID();
    getTable(empID);
  }, [empID])
  
  return (
    <div>
      
      <h3 style={{textAlign: 'center', padding: '40px'}}>Currently Open Job Postings for Employee ID: {empID}</h3>

      <div>
        <table style={{width: '70%', margin: 'auto'}}>
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
                    <th>Delete job?</th>
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
                            <td>
                              <ButtonGroup>
                              <Button tag="a" color="primary" wideMobile onClick={() => {deleteJob(item.jobID)}}>
                                Delete
                                </Button>
                              </ButtonGroup>
                              </td> 
                        </tr>
                    ))}
                </tbody>
            </table>
      
      </div>

      <div style={{paddingLeft: '15%', paddingBottom: '20px', paddingTop: '20px'}}className="reveal-from-bottom" data-reveal-delay="600">
        <ButtonGroup>
            <Button tag="a" color="primary" wideMobile href="/HomeEmployer">
            Go Back
            </Button>
        </ButtonGroup>
      </div>
      
    </div>
  );
}

export default EcurrPosted;