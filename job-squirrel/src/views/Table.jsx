import React from 'react'
import moment from 'moment'

function Table({ job }) {

    return (
        <div className="viewJobs">
            <table style={{width: '70%', margin: 'auto'}}>
                <thead style={{width: '70%'}}> 
                    <tr>
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
                        <tr key={item.jobID}>
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
            <button style={{marginLeft: '75%' , marginTop: '20px'}}>Submit job</button> 
        </div>
    )
}

export default Table
