import React, {useState, useEffect} from 'react';
import Axios from "axios";
import './stylesheets/Style.css';

function SjobBoard() {

    const [job, setJob] = useState([]);

    const getBoard = () => {
        Axios.get("http://localhost:3001/JobBoard").then((response) => {
        console.log(response);
        setJob(response.data)

        console.log(job)
        
    });
    }

    useEffect(() => {
        getBoard();
    }, []);
    

    
    return (
        <div className="viewJobs">
            <h1 style={{textAlign: 'center', padding: '25px'}}>Welcome to the Student Job Board</h1>
            <table style={{width: '70%', margin: 'auto'}}>
                <thead> 
                    <tr>
                    <th scope="col"><input type="checkbox"></input></th>
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
                    <tr>
                    <td scope="col"><input type="checkbox"></input></td>
                        <td>
                            {job.map(post => {
                                return(
                                    <h6>{post.jobName}</h6>
                                )
                            })}
                        </td>
                        <td>
                        {job.map(post => {
                                return(
                                    <h6>{post.jobCategory}</h6>
                                )
                            })}
                        </td>
                        <td>
                        {job.map(post => {
                                return(
                                    <h6>${post.wage}</h6>
                                )
                            })}
                        </td>
                        <td>
                        {job.map(post => {
                                return(
                                    <h6>{post.skillLevel}</h6>
                                )
                            })}
                        </td>
                        <td>
                        {job.map(post => {
                                return(
                                    <h6>{post.experienceRequired}</h6>
                                )
                            })}
                        </td>
                        <td>
                        {job.map(post => {
                                return(
                                    <h6>{post.datePosted}</h6>
                                )
                            })}
                        </td>
                        <td>
                        {job.map(post => {
                                return(
                                    <h6>{post.description}</h6>
                                )
                            })}
                        </td>
                    </tr>
                </tbody>
            </table>  
        </div>
    )
}

export default SjobBoard;
