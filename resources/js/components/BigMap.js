////////// ////////// //////////
// NOTE Google maps API needed: https://developers.google.com/maps/documentation/maps-static/get-api-key
// Add to .env as: REACT_APP_GOOGLE_KEY='KeyGoesHere'. Make sure it is in gitIgnore
// line 80 picks up that key very time app is built

import React, { useState, useEffect } from "react";

import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Polyline,
    Marker,
    InfoWindow,
} from "react-google-maps";

function BigMap(props) {
    let points = props.points;


    ////////// ////////// ////////// google code
    
    function Map() {
      console.log(points);
        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: 49.81, lng: 15.47 }}
            >

                {
                // points.map((element) => {
                //     console.log(element);
                //   // <Marker position={element}></Marker>
                // })
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
                    // googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDKK-nywrULN5O7_p5hd287jTKb-aSdV9o`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </>
    );
}
export default BigMap;
