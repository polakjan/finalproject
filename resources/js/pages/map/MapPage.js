import { Container, Image, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import React, { useState, useEffect } from "react";
import { data } from "jquery";
import BigMap from "../../components/BigMap";
    
    const MapPage = () => {

        // state section
    const [points, setPoints] = useState(null);

    // Fetch entity data
    async function fetchEntities() {
        const url = "/api/entity/fetch";
        const response = await fetch(url);
        
        const data = await response.json();
        console.log(data);
        setPoints(listPoints(data));
        
    }

    function listPoints (data) {

        return data.map(e => JSON.parse(e.coordinates)[0]);

    }

    useEffect(() => {
        fetchEntities();
    }, []);

    useEffect(() => {
        console.log(points);
    }, [points]);

        return (
            <Container fluid>
                <h1>Map Page</h1>
                <Container>
                    <Image
                        src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
                        fluid
                    />
                    <BigMap points={points}/>
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
