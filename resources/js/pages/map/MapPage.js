import React from "react";
import { Container, Image } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
/**
 *
 * map of the czech republic with all hikes
 */
const MapPage = () => {
    return (
        <Container fluid>
            <h1>Map Page</h1>
            <Container>
                <Image
                    src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
                    fluid
                />
            </Container>
            {/* <div className="items">
                <div className="card">Difficulty</div>
                <div className="card">Elevation difference</div>
                <div className="card">Distance</div>
                <div className="card">Terrain Type</div>
                <div className="card">Ideal weather conditions</div>
                <div className="card">Weather warnings</div>
            </div> */}
            <div>
                <h5 className="pt-2">Sorting</h5>
            </div>

            <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action href="#link1" className="p-2">
                    Type
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" className="p-2">
                    Length
                </ListGroup.Item>
                <ListGroup.Item action href="#link3" className="p-2">
                    Elevation gain
                </ListGroup.Item>
                <ListGroup.Item action href="#link4" className="p-2">
                    Rating
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default MapPage;
