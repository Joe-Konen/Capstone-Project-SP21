import React, {useState, useEffect} from 'react';
import Axios from "axios";
import './stylesheets/Style.css';
import moment from 'moment'
import Table from './Table';

function SjobBoard() {

    const [job, setJob] = useState([]);
    const [chooseJob, setChooseJob] = useState([]);
    const [search, setSearch] = useState("")
    const [isChecked, setCheckbox] = useState(false);
    const [checkedJobs, setCheckedJobs] = useState([])

    const getBoard = () => {
        Axios.get("http://localhost:3001/JobBoard").then((response) => {
        setJob(response.data);

    });
    }

    useEffect(() => {
        getBoard();
    }, []);

    function searchBar(job) {
        return job.filter(job => job.jobName.toLowerCase().indexOf(search) > -1)
    }
    
    

    const handleChange = (e, job) => {
        setCheckbox({
          ...isChecked,
          [job]: e.target.isChecked,
        })

        let index

        if(e.target.checked){
            var checkedJobs = e.target.value
            setCheckedJobs(setCheckedJobs => [setCheckedJobs, checkedJobs])

        }else{
            index = checkedJobs.indexOf(e.target.value)
            if(index !== -1){
                checkedJobs.splice(index, 1)
                setCheckedJobs(checkedJobs)

            }
            
        }
      };

      const handleSelection = () => {
        const newArr = [];
        job.map((i) => {
            newArr.push(i);
            console.log(newArr)
        })
        checkedJobs.map((check) => {
            
            const jobObj = job.find(j => j.jobID == check)
            //newArr.push(jobObj)
            console.log(jobObj)
        }) 
        //setChooseJob(newArr[1])
      }

    
    return (
        <div>
            <h1 style={{textAlign: 'center', padding: '25px'}}>Welcome to the Student Job Board</h1>
            <div style={{paddingLeft: '15%', paddingBottom: '20px'}}>
                <label>Search by job name: </label>
                <input style={{height: '25px'}} type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div>
                {/* <Table job={searchBar(job)}/> */}
                <form >
            <table style={{width: '70%', margin: 'auto'}}>
                <thead style={{width: '70%'}}> 
                    <tr>
                    <th><input type="checkbox"/></th>
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
                            <td> <input type="checkbox" value={item.jobID} checked={isChecked[item.jobID]} onChange={(e)=>{handleChange(e, item.jobID)}}/></td>
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
            <h4>Checked: {isChecked ? "Checked" : "NotChecked"}</h4>
            <h4>Checked job: {checkedJobs} </h4>
            <div>
                Jobs chosen: {handleSelection()}
            </div>
            </form>
            </div>
        </div>
    )
}

export default SjobBoard;
