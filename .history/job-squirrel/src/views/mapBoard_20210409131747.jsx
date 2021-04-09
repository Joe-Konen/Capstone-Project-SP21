import React, {useState, useEffect} from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
import Geocode from "react-geocode";
import Axios from "axios";

Geocode.setApiKey("AIzaSyAD9W_BKtjjIUFDJKJ3dRGf14iLJKfuG7U");


function Map(){

    const [address, setAddress] = useState([]);
    const [employerID, setEmployerID] = useState([]);
    const [selectedAdd, setSelectedAdd] = useState(null);


    
    const getAddress = () => {
        Axios.get("http://localhost:3001/SjobBoard").then((response)=>{
            setAddress(response.data)
            setEmployerID(response.data.employerID)
        })
    }

    useEffect(() => {
        getAddress();

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
            address.map((a)=>(
                <InfoWindow
                    position={{lat: parseFloat(selectedAdd.latitude), lng: parseFloat(selectedAdd.longitude)}}
                    onCloseClick={()=>{setSelectedAdd(null)}}>
                <div>
                    <p>Information:</p>
                    {a.address}
                </div>
            </InfoWindow>
            ))
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

    </div>;
}