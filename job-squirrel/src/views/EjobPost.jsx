import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import "./stylesheets/Style.css";
import Axios from 'axios';

function EjobPost() {
    const [jName, setJName] = useState("")
    const [jCat, setJCat] = useState("")
    const [wage, setWage] = useState(0)
    const [skill, setSkill] = useState(0)
    const [exp, setExp] = useState(0)
    const [date, setDate] = useState("")
    const [status, setStatus] = useState(0)
    const [desc, setDesc] = useState("")
    const [empID, setEmpID] = useState("")
    const history = useHistory();

    const postJob = () => {
        console.log(jCat)
        Axios.post('http://localhost:3001/jobPosting', {
            jobName: jName,
            category: jCat,
            wage: wage,
            jobSkill: skill,
            jobExp: exp,
            date: date,
            jobStatus: status,
            description: desc,
            empID: empID,
        }).then((response) => {
            //console.log(response.data)
            alert('Job Posted!')
        })

    }

    useEffect(() => {
        getID();
    }, [empID])

    const getID = () => {
  
        Axios.get('http://localhost:3001/employerID')
        .then(function (response) {
            const user = response.data
            console.log(user[0])
            
            setEmpID(user[0]);
        })
      }

    const routeChange = () => {
        let path = 'HomeEmployer';
        history.push(path);
    }
    return (
        <div>  
            <h1 style={{textAlign: 'center', padding: '30px'}}>Post a New Job</h1>
                <div class="Instructions">
                    <p>Instructions:</p>
                        <p>The job's skill level is on a scale of 1-5, with 5 being the highest level</p>
                        <p>The experience level is also on a scale of 1-5, with 5 being an expert</p>
                        <p>Job status will consist of either a 1 or 0. 1 means the job is done and 0 means it's still available</p>
                    
                </div>
            <div class="Register">
                <label for ="empID">Your employee ID: </label>
                    <div>
                        {empID}
                    </div>

                <label for ="jobName">What's the name of the job? </label>
                    <input type="text"
                    id="jobName"
                    onChange={(e) => {
                        setJName(e.target.value);
                    }}/>

                <label for ="jobCat">Job Category: </label>
                    <input type="text"
                    id="jobCat"
                    onChange={(e) => {
                        setJCat(e.target.value);
                    }}/>

                <label for ="wage">How much will this job pay? </label>
                    <input type="text"
                    id="wage"
                    onChange={(e) => {
                        setWage(e.target.value);
                    }}/>

                <label for ="skillLvl">Job skill level: </label>
                    <select name="skill" id="skillLvl" onChange={(e) => {
                        setSkill(e.target.value);
                    }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                <label for ="expReq">How much experience do you require? </label>
                <select name="exp" id="expReq" onChange={(e) => {
                        setExp(e.target.value);
                    }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                <label for ="date">Today's Date (MM/DD/YYYY): </label>
                    <input type="date"
                    id="date"
                    onChange={(e) => {
                        setDate(e.target.value);
                    }}/>

                <label for ="status">Job Status: </label>
                    <select name="jStatus" id="status" onChange={(e) => {
                        setStatus(e.target.value);
                    }}>
                        <option value="option1">0</option>
                        <option value="option2">1</option>
                    </select>

                <label for ="description">Brief description of the job: </label>
                    <input type="text"
                    id="description"
                    onChange={(e) => {
                        setDesc(e.target.value);
                    }}/>

                <button className="button button-primary button-wide-mobile button-sm" onClick={routeChange}>Cancel</button>
                <button className="button button-primary button-wide-mobile button-sm" onClick={postJob}> Post</button>
            </div>   
        </div>
    )
}

export default EjobPost
