import React, {useState} from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";
import Geocode from "react-geocode";    

function Map(){
    Geocode.setApiKey("AIzaSyBAcyrGIOYn7oQjczRonO3B2fs6ltoT_l0");
    Geocode.setLanguage("en");
    Geocode.setRegion("en");

    db.getConnection(function(err, connection){

        db.query(
            "SELECT address FROM Employer", function(err, result, fields)
            address = result;

        })   
    });
    
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");

    //const coordinates = {};
    Geocode.fromAddress("509 Stetzer St, Elburn Illinois 60119").then(
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

        return <Marker position={{
            lat: lat,
            lng: lng
        }}/>

        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function jobBoard(){
    return <div style={{width: '50vw', height: '25vw', margin: '50px auto'}}>
            <div style={{display: "flex", justifyContent: "center", fontSize:'50px'}}>
                Job Board Page<br></br><br></br>
            </div>
        <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp6libraries=geometry,drawing,places&key=AIzaSyBAcyrGIOYn7oQjczRonO3B2fs6ltoT_l0`}
        loadingElement={<div style={{height:"100%"}}/>}
        containerElement={<div style={{height:"100%"}}/>}
        mapElement={<div style={{height:"100%"}}/>}
        />
    </div>;
}