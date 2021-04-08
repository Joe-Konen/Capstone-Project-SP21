import React, {useState, useEffect} from 'react'
import moment from 'moment'
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Axios from 'axios';

function Table({ job }) {
    const [chooseJob, setChooseJob] = useState([]);
    const [isChecked, setCheckbox] = useState(false);
    const [checkedJobs, setCheckedJobs] = useState([])
    const [stuID, setStuID] = useState("");

    useEffect(() => {
        checkedJobs.map((check) => {
            
            for(var i=0; i<job.length; i++){

                if(job[i].jobID == check){
                    //console.log(job[i])
                    chooseJob.push(job[i])
                    setChooseJob(arr => [...arr])
                    console.log("Chosen jobs:", chooseJob)
                    
                }
            }
        });
    
    }, [isChecked])

    useEffect(() => {
        getID();
    }, [stuID])

    
    const handleChange = (e, job) => {
        setCheckbox({
          ...isChecked,
          [job]: e.target.isChecked,
        })
        

        if(e.target.checked){
            var checkedJobs = e.target.value
            setCheckedJobs(setCheckedJobs => [setCheckedJobs, checkedJobs])
            console.log(e.target.checked)
            
         }else{
            setCheckbox(false);
            console.log(e.target.checked)
            console.log("Popped!", chooseJob.pop())
            
            //console.log("Popped again",chooseJob.pop())
            console.log("New job list", chooseJob)
            chooseJob.pop();
            console.log("Modified job list: ", chooseJob)
            
            
        }
    };

    const getID = () => {
        Axios.get("http://localhost:3001/studentID")
        .then(function(response){
            const user = response.data
            console.log(user[0])
        
            setStuID(user[0]);
        })
    }

    const studentToDo = () => {
        
        Axios.post("http://localhost:3001/insertJobs", chooseJob, {
            
        })
        .then((response) => {
            console.log("ResPONSE: ",response.data);
          });
        
    };

    
    return (
        <div>
            <table style={{width: '70%', margin: 'auto'}}>
                <thead style={{width: '70%'}}> 
                    <tr>
                    <th>Check jobs</th>
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
                            <td> <input type="checkbox" value={item.jobID} checked={isChecked[item.jobID]} onClick={(e)=>{handleChange(e, item.jobID)}}/></td>
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
            
            <div style={{paddingLeft: '15%', paddingBottom: '20px'}}> 
            <h2>Checked: {isChecked ? "true" : "false"}</h2>
                <h4>Chosen jobs:</h4>
                    {chooseJob.map((item) => (
                            <p>{item.jobName}, with a wage of ${item.wage}</p>
                        ))}
            </div>
            <div style={{paddingLeft: '15%'}}>
                <ButtonGroup>
                <Button onClick={studentToDo} tag="a" color="primary">Submit Job</Button>
                </ButtonGroup>
            </div>
            
        </div>
    )
    
}

export default Table
