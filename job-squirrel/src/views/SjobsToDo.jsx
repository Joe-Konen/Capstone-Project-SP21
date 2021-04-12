import React, {useState, useEffect} from "react";
import "./stylesheets/Style.css";
import Axios from 'axios';
import moment from 'moment';
import ButtonGroup from "../components/elements/ButtonGroup";
import Button from '../components/elements/Button';

function SjobsToDo() {
  const [stuID, setStuID] = useState("")
  const [job, setJob] = useState([]);

  const getID = () => {
  
    Axios.get('http://localhost:3001/studentID')
    .then(function (response) {
        const user = response.data
        console.log(user[0])
        
        setStuID(user[0]);
    })
  }

  const getTable = (stuID) => {
    console.log("Student" ,stuID)
    Axios.get(`http://localhost:3001/chosenJobs/${stuID}`)
    .then(function(response) {
      setJob(response.data)
      console.log(response.data)

    })
  }

//   const deleteJob = (jobID) => {
//     Axios.delete(`http://localhost:3001/delete/${jobID}`)
//     .then(function(response) {
//         console.log("Deleted")
//         setJob(job.filter((val) => {
//           return val.jobID != jobID
//         }))
//     })

//   }

  useEffect(() => {
      getID();
      getTable(stuID);
  }, [stuID])
  
  return (
    <div>
      
      <h3 style={{textAlign: 'center', padding: '40px'}}>Current selections for student ID: {stuID}</h3>

      <div>
        <table style={{width: '70%', margin: 'auto'}}>
            <thead style={{width: '70%'}}> 
                <tr>
                <th>Student ID</th>
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
                        <td>{item.studentID}</td>
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
        </table>
      
      </div>

      <div style={{paddingLeft: '15%', paddingBottom: '20px', paddingTop: '20px'}}className="reveal-from-bottom" data-reveal-delay="600">
        <ButtonGroup>
            <Button tag="a" color="primary" wideMobile href="/HomeStudent">
            Go Back
            </Button>
        </ButtonGroup>
      </div>
      
    </div>
  );
}

export default SjobsToDo;