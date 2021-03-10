import React, {useState, useEffect} from 'react';
import Axios from "axios";
import './stylesheets/Style.css';

function SjobBoard() {
    const [jobID, setJobID] = useState("");
    const [jobName, setJobName] = useState("");
    const [jobCat, setJobCat] = useState("");
    const [wage, setWage] = useState("");
    const [expReq, setExpReq] = useState("");
    const [datePosted, setDatePosted] = useState("");
    const [status, setStatus] = useState("");
    const [desc, setDesc] = useState("");
    const [empID, setEmpID] = useState("");

    const getBoard = () => {
        Axios.get("http://localhost:3001/JobBoard").then((response) => {
        console.log(response.data);
        
    });
    }

    useEffect(() => {
        getBoard();
    }, []);
    

    
    return (
        <div className="viewJobs">
            <h1>Welcome to the Student Job Board</h1>
            <table>
                <thead> 
                    <tr>
                    <th>Job Name</th>
                    <th>Category</th>
                    <th>Pay</th>
                    <th>Skill Level</th>
                    <th>Experience</th>
                    <th>Date Posted</th>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            
                        </td>
                        <td>
                        
                        </td>
                    </tr>
                </tbody>
            </table>  
        </div>
    )
}

export default SjobBoard;
