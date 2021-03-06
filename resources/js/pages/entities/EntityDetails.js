import {
    Container,
    Row,
    Image,
    Col,
    Button,
    Card,
    Tabs,
    Tab,
} from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";

import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Weather from "../../components/Weather";
import Comment from "../../components/Comment";
import { UserContext } from "../../Hike";
import Admin from "../../components/Admin";
import Moment from "react-moment";
import Mapper from "../../components/Mapper";

const EntityDetails = () => {
    const user = useContext(UserContext);
    // state section
    const [entity, setEntity] = useState(null);
    const [favorite, setFavorite] = useState(0);
    let { id } = useParams();

    // Fetch entity data
    async function fetchEntity() {
        const url = `/api/details/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setEntity(data);
    }

    useEffect(() => {
        fetchEntity();
    }, []);

    function handleFavorite() {
        // // let id = user;
        // console.log(user);
        // const url = `/api/my_favorites`;
        // const response = await fetch(url);
        // const data = await response.json();
        // console.log(data);
        favorite === 1 ? setFavorite(0) : setFavorite(1);
    }

    const content = !entity ? (
        <div>
            <h1>loading...</h1>
        </div>
    ) : (
        <Container className="px-4">
            <Row>
                <Mapper entity={entity} />
            </Row>
            <Row className="justify-content-around mt-1">
                <LinkContainer to={`/map/${id}`}>
                    {/* LINK TO ENTITY MAP */}
                    <Button variant="success">Map</Button>
                </LinkContainer>
                <Button variant="success">Download</Button>

                <Button variant="outline-danger" onClick={handleFavorite}>
                    {favorite === 1 ? <HeartFill /> : <Heart />}
                </Button>

                <Button variant="success">Gallery</Button>
                <Admin entity={entity} type={"entity"} />
            </Row>
            <Card body className="text-center my-2">
                <h2>{entity.name}</h2>
            </Card>
            <Tabs
                defaultActiveKey="general"
                id="uncontrolled-tab-example"
                className="text-center my-2"
            >
                <Tab eventKey="general" title="General Info">
                    <div>?? what goes here ??</div>
                </Tab>
                <Tab eventKey="gallery" title="Gallery">
                    <Container>
                        <Row xs={2} md={4}>
                            <Image src={entity.photo} thumbnail />
                            <Image src={entity.photo} thumbnail />
                            <Image src={entity.photo} thumbnail />
                            <Image src={entity.photo} thumbnail />
                            <Image src={entity.photo} thumbnail />
                            <Image src={entity.photo} thumbnail />
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                    <Container>
                        <h1 className="mt-2">Reviews</h1>
                        <Row>
                            <Col>
                                <h3>Username</h3>
                            </Col>
                            <Col sm={8}>
                                <h3>Review</h3>
                            </Col>
                        </Row>
                        {entity.comments &&
                            entity.comments.map((comment) => (
                                <Row key={comment.id}>
                                    <Col>{comment.user.username}</Col>
                                    <Col sm={8}>
                                        {comment.comment}{" "}
                                        <Moment fromNow ago>
                                            {comment.created_at}
                                        </Moment>{" "}
                                        ago
                                    </Col>
                                    <Admin comment={comment} type={"comment"} />
                                </Row>
                            ))}
                    </Container>

                    <Comment id={id} />
                </Tab>
                <Tab eventKey="desc" title="Description">
                    <div>{entity.description}</div>
                </Tab>
                <Tab eventKey="elev" title="Elevation">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sequi, excepturi?
                    </div>
                </Tab>
                <Tab eventKey="weather" title="Weather Forecast">
                    <div>
                        <Weather />
                    </div>

                    <Button variant="success">Gallery</Button>
                </Tab>
            </Tabs>
        </Container>
    );

    return <>{content}</>;
};

export default EntityDetails;
