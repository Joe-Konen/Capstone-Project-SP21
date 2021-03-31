import React, {useState, useEffect} from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
import Geocode from "react-geocode";
import * as addressData from "../data/address.json";
import Axios from "axios";

Geocode.setApiKey("AIzaSyAD9W_BKtjjIUFDJKJ3dRGf14iLJKfuG7U");


function Map(){
    const [address, setAddress] = useState([]);
    const [employerID, setEmployerID] = useState([]);
    const [lat, setLat] = useState([]);
    const [lng, setLng] = useState(0);
    const [selectedAdd, setSelectedAdd] = useState(null);
    
    const getAddress = () => {
        Axios.get("http://localhost:3001/SjobBoard").then((response)=>{
            setAddress(response.data)
            setEmployerID(response.data.employerID)
            console.log(employerID)
            console.log(address)
            //console.log(response.data)
        })
    }

    useEffect(() => {
        getAddress();

    }, [])
   
    

    useEffect(() => {
        address.map((a) => {
            // console.log(a.address)
            Geocode.fromAddress(a.address).then(
                response => {
                    setLat(response.results[0].geometry.location.lat)
                    setLng(response.results[0].geometry.location.lng)

                    console.log(a.address)
                    
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
            onClick={()=>{
                <InfoWindow>
                <div>Hello</div>
            </InfoWindow>
            }}
            />

        ))}
        {selectedAdd &&(
            <InfoWindow>
                <div>Hello</div>
            </InfoWindow>
        )}
        <div>
        {address.map((a) => (
            <p>{lat},{lng}</p>
           
        ))}
        </div>
        
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
