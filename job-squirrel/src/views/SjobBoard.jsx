import React, {useState, useEffect} from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
import Geocode from "react-geocode";
import Axios from "axios";
import Table from "./Table"
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';

Geocode.setApiKey("AIzaSyAD9W_BKtjjIUFDJKJ3dRGf14iLJKfuG7U");


function Map(){
    const [address, setAddress] = useState([]);
    const [employeeID, setEmployeeID] = useState([]);
    const [lat, setLat] = useState([]);
    const [lng, setLng] = useState(0);
    
    const getAddress = () => {
        Axios.get("http://localhost:3001/SjobBoard").then((response)=>{
            setAddress(response.data)
            setEmployeeID(response.data.employerID)
            //console.log(response.data)
        })
    }

    useEffect(() => {
        getAddress();

    }, [])
   
    

    useEffect(() => {
        address.map((a) => {
            console.log(a.address)
            Geocode.fromAddress(a.address).then(
                response => {
                    setLat(response.results[0].geometry.location.lat)
                    setLng(response.results[0].geometry.location.lng)
                    
                    console.log(response.results[0].geometry.location.lat)
                    console.log(response.results[0].geometry.location.lng)
                }
            )
            
        })
        
    }, [address])



    
    return(
                
        <GoogleMap defaultZoom={10} defaultCenter={{lat: 41.754468, lng: -88.348941}}>

        {address.map((a)=>(
            <Marker 
            key={a.employerID}
            position={{
                lat: lat,
                lng: lng
            }}
            />

        ))}
        <div>
        {address.map((a) => (
            <p>{lat}</p>
            
        ))}
        </div>
        
        </GoogleMap>

    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export function jobBoard(){
    return <div style={{width: '50vw', height: '25vw', margin: '50px auto'}}>
            <div style={{display: "flex", justifyContent: "center", fontSize:'50px'}}>
                Job Board Page<br></br><br></br>
            </div>
        <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp6libraries=geometry,drawing,places&key=AIzaSyAD9W_BKtjjIUFDJKJ3dRGf14iLJKfuG7U`}
        loadingElement={<div style={{height:"100%"}}/>}
        containerElement={<div style={{height:"100%"}}/>}
        mapElement={<div style={{height:"100%"}}/>}
        />

    </div>;
}

//import React, {useState, useEffect} from 'react';
//import Axios from "axios";
//import './stylesheets/Style.css';


function SjobBoard() {

    const [job, setJob] = useState([]);
    //const [chooseJob, setChooseJob] = useState([]);
    const [search, setSearch] = useState("")
    //const [isChecked, setCheckbox] = useState(false);
    //const [checkedJobs, setCheckedJobs] = useState([])

    const getBoard = () => {
        Axios.get("http://localhost:3001/JobBoard").then((response) => {
        setJob(response.data);

    });
    }

    useEffect(() => {
        getBoard();

        
    }, []);

    // useEffect(() => {
    //     checkedJobs.map((check) => {
            
    //         for(var i=0; i<job.length; i++){

    //             if(job[i].jobID == check){
    //                 console.log(job[i])
    //                 chooseJob.push(job[i])
    //                 setChooseJob(arr => [...arr])
    //                 console.log(chooseJob)
                    
    //             }
    //         }
    //     });
    
    // }, [isChecked])

    

    function searchBar(job) {
        return job.filter(job => job.jobName.toLowerCase().indexOf(search) > -1)
    }
    
    // const handleChange = (e, job) => {
    //     setCheckbox({
    //       ...isChecked,
    //       [job]: e.target.isChecked,
    //     })

    //     let index

    //     if(e.target.checked){
    //         var checkedJobs = e.target.value
    //         setCheckedJobs(setCheckedJobs => [setCheckedJobs, checkedJobs])

    //     }else{
    //         index = checkedJobs.indexOf(e.target.value)
    //         if(index !== -1){
    //             checkedJobs.splice(index, 1)
    //             setCheckedJobs(checkedJobs)

    //         } 
    //     }
    //   };

    
    return (
        <body>
        <div>
            <h1 style={{textAlign: 'center', padding: '25px'}}>Welcome to the Student Job Board</h1>
            <div style={{paddingLeft: '15%', paddingBottom: '20px'}}>
                <label>Search by job name: </label>
                <input style={{height: '25px'}} type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <Table job={searchBar(job)}/>
            
        </div>
        <div style={{paddingLeft: '15%', paddingBottom: '20px'}}className="reveal-from-bottom" data-reveal-delay="600">
        <ButtonGroup>
            <Button tag="a" color="primary" wideMobile href="/HomeStudent">
            Go Back
            </Button>
        </ButtonGroup>
      </div>
      </body>
        
        // <div>
        //     <h1 style={{textAlign: 'center', padding: '25px'}}>Welcome to the Student Job Board</h1>
        //     <div style={{paddingLeft: '15%', paddingBottom: '20px'}}>
        //         <label>Search by job name: </label>
        //         <input style={{height: '25px'}} type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
        //     </div>
        //     <div>
        //         {/* <Table job={searchBar(job)}/> */}
        //     <table style={{width: '70%', margin: 'auto'}}>
        //         <thead style={{width: '70%'}}> 
        //             <tr>
        //             <th>Check jobs</th>
        //             <th>Job ID</th>
        //             <th>Job Name</th>
        //             <th>Category</th>
        //             <th>Pay</th>
        //             <th>Skill Level</th>
        //             <th>Experience</th>
        //             <th>Date Posted</th>
        //             <th>Description</th>
        //             </tr>
        //         </thead>
        //         <tbody style={{textAlign: 'left'}}>
        //             {job.map((item) => (
        //                 <tr key={item.jobID} >
        //                     <td> <input type="checkbox" value={item.jobID} checked={isChecked[item.jobID]} onChange={(e)=>{handleChange(e, item.jobID)}}/></td>
        //                     <td>{item.jobID}</td>
        //                     <td>{item.jobName}</td>
        //                     <td>{item.jobCategory}</td>
        //                     <td>${item.wage}</td>
        //                     <td>{item.skillLevel}</td>
        //                     <td>{item.experienceRequired}</td>
        //                     <td>{moment(item.datePosted).format('MM/DD/YYYY')}</td>
        //                     <td>{item.description}</td>   
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        //     {/* <input type="button" onClick={updateJob} value="update"/> */}
        //     <div style={{paddingLeft: '15%', paddingBottom: '20px'}}> <h4>Chosen jobs:</h4>
        //     {chooseJob.map((item) => (
        //             <p>{item.jobName}</p>
        //         ))}
        //     </div>
        //     </div>
        // </div>
    )
}

export default SjobBoard;

