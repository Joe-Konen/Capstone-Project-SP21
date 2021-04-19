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

function SjobBoard() {

    const [job, setJob] = useState([]);
    const [search, setSearch] = useState("")

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
            {/* <ButtonGroup>
                <Button tag="a" color="primary">Submit Job</Button>
            </ButtonGroup> */}
        </ButtonGroup>
      </div>
      </body>
       
    )
}

export default SjobBoard;

