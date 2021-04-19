import React, {useState, useEffect} from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Geocode from "react-geocode";
import Axios from "axios";
import {useHistory} from "react-router-dom";

Geocode.setApiKey("AIzaSyAD9W_BKtjjIUFDJKJ3dRGf14iLJKfuG7U");

var loggedIn = false;
function Map(){
    const history = useHistory();

    const userCheck = () => {
        if(!loggedIn){
            console.log("authenticating")
            Axios.get('http://localhost:3001/checkAccess')
            .then(function (res) {
                if(res.data == "not logged in"){
                    history.push("/");
                }
                if(res.data == "logged in"){
                    loggedIn = true;
                }
            })
          }
      }

      userCheck();
    const [address, setAddress] = useState([]);
    const [job, setJob] = useState([]);
    const [employerID, setJobEmployerID] = useState([]);
    const [jobEmployerID, setEmployerID] = useState([]);
    const [description, setDescription] = useState([]);
    const [selectedAdd, setSelectedAdd] = useState(null);
    
    const getAddress = () => {
        Axios.get("http://localhost:3001/SjobBoard").then((response)=>{
            setAddress(response.data)
            setEmployerID(response.data.employerID)
        })
    }
    const getJob = () => {
        Axios.get("http://localhost:3001/JobBoard").then((response)=>{
            setJob(response.data.jobName)
            setJobEmployerID(response.data.employerID)
            setDescription(response.data.description)
        })
    }

    useEffect(() => {
        getAddress();

    }, []) 
    useEffect(() => {
        getJob();

    }, []) 

    
    return(
                
        <GoogleMap defaultZoom={10} defaultCenter={{lat: 41.754468, lng: -88.348941}}>

        {address.map((a)=>(
            <Marker 
                key={a.employerID}
                position={{
                    lat: parseFloat(a.latitude),
                    lng: parseFloat(a.longitude)
                }}
                onClick={()=>{
                    setSelectedAdd(a);
                }}
            />
        ))}
        {selectedAdd &&(
                <InfoWindow
                    position={{lat: parseFloat(selectedAdd.latitude), lng: parseFloat(selectedAdd.longitude)}}
                    onCloseClick={()=>{setSelectedAdd(null)}}>
                <div>
                    <p>Job Information:</p>
                    <p>Address: {selectedAdd.address}</p>
                    <p>Employer ID: {selectedAdd.employerID}</p>
                    
                </div>
            </InfoWindow>
        )}
        
        </GoogleMap>

    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function mapBoard(){
    return <div style={{width: '50vw', height: '25vw', margin: '50px auto'}}>
            <div style={{display: "flex", justifyContent: "center", fontSize:'50px'}}>
                Job Board Page<br></br><br></br>
            </div>
        <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp6libraries=geometry,drawing,places&key=AIzaSyAD9W_BKtjjIUFDJKJ3dRGf14iLJKfuG7U`}
        loadingElement={<div style={{height:"100%"}}/>}
        containerElement={<div style={{height:"100%"}}/>}
        mapElement={<div style={{height:"100%"}}/>}
        />
        <br></br>
        <ButtonGroup>
            <Button tag="a" color="primary" wideMobile href="/sJobBoard">
            Go Back
            </Button>
        </ButtonGroup>

    </div>;
}