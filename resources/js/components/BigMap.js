////////// ////////// //////////
// NOTE Google maps API needed: https://developers.google.com/maps/documentation/maps-static/get-api-key
// Add to .env as: REACT_APP_GOOGLE_KEY='KeyGoesHere'. Make sure it is in gitIgnore
// line 80 picks up that key very time app is built

import React, { useState, useEffect, useContext } from "react";

import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Polyline,
    Marker,
    InfoWindow,
} from "react-google-maps";

import {GoogleContext} from "../Hike";

function BigMap(props) {

    const apiKeyContext = useContext(GoogleContext);
    const apiKey = apiKeyContext['REACT_APP_GOOGLE_API_KEY'];

    console.log(apiKey);



    let points = props.points;

    function getPoints() {
        return points;
    }


    ////////// ////////// ////////// google code
    
    function Map() {

        let pts = getPoints();
        
        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: 49.81, lng: 15.47 }}
            >

                {
                    // console.log(pts)
                    
                    pts && pts.map((point, index) =>(
                        <Marker key={index} position={point}/>
                        
                    ))
                }

                <InfoWindow position={{ lat: 49.81, lng: 15.47 }}>
                    <div>CZ here</div>
                </InfoWindow>
            </GoogleMap>
        );
    }

    const WrappedMap = withScriptjs(withGoogleMap(Map));

    return (
        <>
            <div className="Mapper" style={{ width: "100vw", height: "20rem" }}>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </>
    );
}
export default BigMap;
