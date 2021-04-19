import React, {useState, useEffect} from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Geocode from "react-geocode";
import * as addressData from "../data/address.json";
import Axios from "axios";

Geocode.setApiKey("AIzaSyAD9W_BKtjjIUFDJKJ3dRGf14iLJKfuG7U");


function Map(){


    const [address, setAddress] = useState([]);
    const [job, setJob] = useState([]);
    const [employerID, setJobEmployerID] = useState([]);
    const [jobEmployerID, setEmployerID] = useState([]);
    const [description, setDescription] = useState([]);
    const [selectedAdd, setSelectedAdd] = useState(null);
    //here down were the commented out ones
    const [address, setAddress] = useState([]);
    const [employerID, setEmployerID] = useState([]);
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [selectedAdd, setSelectedAdd] = useState(null);
    const [locateLat, setLocateLat] = useState([]);
    const [locateLng, setLocateLng] = useState([]);

    
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

          //console.log(response.data)
        })
    }

    useEffect(() => {
        getAddress();

    }, []) 
    useEffect(() => {
        getJob();

    }, []) 


    }, [])    

    useEffect(() => {
        address.map((a) => {
            // console.log(a.address)
            Geocode.fromAddress(a.address).then(
                response => {
                    setLat(response.results[0].geometry.location.lat)
                    setLng(response.results[0].geometry.location.lng)

                    console.log(a.address)
                    
                    // console.log(response.results[0].geometry.location.lat)
                    // console.log(response.results[0].geometry.location.lng)

                    locateLat.push(response.results[0].geometry.location.lat)
                    locateLng.push(response.results[0].geometry.location.lng)
                    setLocateLat(arr => [...arr])
                    setLocateLng(arr => [...arr])
                    console.log(locateLat)
                    console.log(locateLng)

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

        {/* {address.map((a)=>(
            <Marker 
            position={{
                lat: lat,
                lng: lng
            }}
            onClick={()=>{
                setSelectedAdd(a);
            }}
            />

        ))} */}
        {locateLat.map((la) => (
            locateLng.map((ln) => (
                <Marker 
                position={{
                    lat: la,
                    lng: ln
                }}
            // onClick={()=>{
            //     setSelectedAdd(a);
            // }}
                />
            ))   
        ))}
        
        {selectedAdd &&(
            <InfoWindow
            position={{lat:lat, lng:lng}}
            onCloseClick={()=>{setSelectedAdd(null)}}>
                <div>This is where Job info will be</div>
            </InfoWindow>
        )}
        {/* <div>
        {address.map((a) => (
            <p>{lat},{lng}</p>
           
        ))}
        </div> */}

        
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


    </div>;
}

