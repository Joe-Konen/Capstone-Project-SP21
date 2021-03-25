import React, {useState, useEffect} from 'react'
import moment from 'moment'

function Table({ job }) {
    const [chooseJob, setChooseJob] = useState([]);
    const [isChecked, setCheckbox] = useState(false);
    const [checkedJobs, setCheckedJobs] = useState([])


    useEffect(() => {
        checkedJobs.map((check) => {
            
            for(var i=0; i<job.length; i++){

                if(job[i].jobID == check){
                    console.log(job[i])
                    chooseJob.push(job[i])
                    setChooseJob(arr => [...arr])
                    console.log(chooseJob)
                    
                }
            }
        });
    
    }, [isChecked])

    
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
            
            <div style={{paddingLeft: '15%', paddingBottom: '20px'}}> 
                <h4>Chosen jobs:</h4>
                    {chooseJob.map((item) => (
                            <p>{item.jobName}, with a wage of ${item.wage}</p>
                        ))}
            </div>
        </div>
    )
    
}

export default Table