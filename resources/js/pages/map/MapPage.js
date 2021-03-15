import React from "react";
import { Container, Image } from "react-bootstrap";

const MapPage = () => {
    return (
        <Container>
            <h1>Map Page</h1>

            <Image
                src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
                fluid
            />

            <div className="items">
                <div className="card">Difficulty</div>
                <div className="card">Elevation difference</div>
                <div className="card">Distance</div>
                <div className="card">Terrain Type</div>
                <div className="card">Ideal weather conditions</div>
                <div className="card">Weather warnings</div>
            </div>
        </Container>
    );
};

export default MapPage;
