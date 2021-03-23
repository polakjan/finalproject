////////// ////////// ////////// 
// NOTE Google maps API needed: https://developers.google.com/maps/documentation/maps-static/get-api-key
// Add to .env as: REACT_APP_GOOGLE_KEY='KeyGoesHere'. Make sure it is in gitIgnore
// line 80 picks up that key very time app is built
// can test it by passing the following from parent container (will plot the Bermuda Triangle) - will need to zoon out.
  // const polycoords = [
  //   { lat: 25.774, lng: -80.19 },
  //   { lat: 18.466, lng: -66.118 },
  //   { lat: 32.321, lng: -64.757 },
  //   { lat: 25.774, lng: -80.19 },
  // ];
  // line 36 pops off the last object in array of coordinates. Mapy.cz KML->geoJSON->coords array has, for some reason, weirdness in the fianl element.
  // should a Czech route place you in the Gulf of Aden...we've been there. Warm water. Switch lat/lng.
  ////////// ////////// ////////// 
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


  function Mapper(props) {

    let polycoords = JSON.parse(props.entity.coordinates);
    console.log(polycoords);

    const apiKeyContext = useContext(GoogleContext);
    const apiKey = apiKeyContext['REACT_APP_GOOGLE_API_KEY'];

    console.log(apiKey);






    // return (
    //     <p>XXXXXX</p>
    // )

    ////////// ////////// ////////// deterine start, end, zero
 
    polycoords.pop()      /// BUT WHY????

    function getStart() {
      let start = polycoords[0];
      console.log(start);
      return start;
    }
    function getEnd() {
      const length = polycoords.length;
      let end = polycoords[length-1];    ////// WHY is the last one different?
      console.log(end);
      return end;
    }
    function getZero() {
      let zero = { lat: 0, lng: 0 };
      const length = polycoords.length;
      for (let i = 0; i < polycoords.length; i++)
      {
        zero['lat'] += polycoords[i]['lat'] / length;
        zero['lng'] += polycoords[i]['lng'] / length;
      };
      console.log(zero);
      return zero;
    }
    ////////// ////////// ////////// google code
    function Map() {
      return (
        <GoogleMap defaultZoom={10} defaultCenter={getZero()}>
          <Polyline
            path={polycoords}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
          />
          <Marker position={getStart()}></Marker>
          <InfoWindow position={getEnd()}>
            <div>zero here</div>
          </InfoWindow>
          <Marker position={getEnd()} />
        </GoogleMap>
      );
    }
    const WrappedMap = withScriptjs(withGoogleMap(Map));
    console.log("google key", process.env.REACT_APP_GOOGLE_KEY);
    console.log(process.env);
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
  export default Mapper;