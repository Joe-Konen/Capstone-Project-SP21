import React, {Compenent} from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";
import Geocode from "react-geocode";


const WrappedMap = withScriptjs(withGoogleMap(Map));
function jobBoard(){



    return(
        

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
    )
}