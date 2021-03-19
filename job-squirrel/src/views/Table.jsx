import React, {useState} from 'react'
import moment from 'moment'

function Table({ job }) {

    const [isChecked, setCheckbox] = useState(false);
    const [checkedJobs, setCheckedJobs] = useState([])

    const handleChange = (e, job) => {
        setCheckbox({
          ...isChecked,
          [job]: e.target.isChecked,
        })

        let index

        if(e.target.checked){
            var checkedJobs = e.target.value
            setCheckedJobs(setCheckedJobs => [setCheckedJobs, checkedJobs])
            console.log("checked: ", checkedJobs)

        }else{
            index = checkedJobs.indexOf(e.target.value)
            if(index !== -1){
                checkedJobs.splice(index, 1)
                setCheckedJobs(checkedJobs)

            }
            
        }
      };
    

    return (
        <div className="viewJobs">
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
                            <td> <input type="checkbox" value={item.jobName} checked={isChecked[item.jobID]} onChange={(e)=>{handleChange(e, item.jobID)}}/></td>
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
            <h4>Checked jobs: {checkedJobs} </h4>
            <button style={{marginLeft: '75%' , marginTop: '20px'}}>Submit job</button>
            </form>
             
        </div>
    )
}

export default Table
