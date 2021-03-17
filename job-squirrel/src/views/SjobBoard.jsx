import React, {useState, useEffect} from 'react';
import Axios from "axios";
import './stylesheets/Style.css';
import Table from './Table';

function SjobBoard() {

    const [job, setJob] = useState([]);
    const [search, setSearch] = useState("")

    const getBoard = () => {
        Axios.get("http://localhost:3001/JobBoard").then((response) => {
        console.log(response);
        setJob(response.data);
    });
    }

    useEffect(() => {
        getBoard();
    }, []);

    function searchBar(job) {
        return job.filter(job => job.jobName.toLowerCase().indexOf(search) > -1)
    }
    

    
    return (
        <div>
            <h1 style={{textAlign: 'center', padding: '25px'}}>Welcome to the Student Job Board</h1>
            <div style={{paddingLeft: '15%', paddingBottom: '20px'}}>
                <label>Search by job name: </label>
                <input style={{height: '25px'}} type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div>
                <Table job={searchBar(job)}/>
            </div>
        </div>
    )
}

export default SjobBoard;
