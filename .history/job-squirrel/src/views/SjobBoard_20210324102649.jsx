import React, {useState} from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
import Geocode from "react-geocode";
import * as addressData from "../data/address.json";
import Axios from "axios";
Geocode.setApiKey("AIzaSyAD9W_BKtjjIUFDJKJ3dRGf14iLJKfuG7U");


function Map(){
    const [address, setAddress] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");

    Axios.get("http://localhost:3001/SjobBoard").then((response)=>{
        let data = Array.from(response.data)
        setAddress(data)
        console.log("here is the response  " + response.data)
    })
    {
        address.map(a =>{
            return(
                console.log(a)
            )
        })
    }


    Geocode.fromAddress("509 Stetzer St, Elburn").then(
        (response) => {
        const location = response.results[0].geometry.location;
        setLat(response.results[0].geometry.location.lat)
        setLng(response.results[0].geometry.location.lng)
        
        console.log(location)
      
        },
        (error) => {
        
         console.error(error);
        }
    
  )
    
    return(
                
        <GoogleMap defaultZoom={10} defaultCenter={{lat: 41.754468, lng: -88.348941}}>

        {/* {addressData.map(hosue=>( */}
            <Marker 
            position={{
                lat: lat,
                lng: lng
            }}
            />
        // ))}
       
        
        
        
        </GoogleMap>

    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function jobBoard(){
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