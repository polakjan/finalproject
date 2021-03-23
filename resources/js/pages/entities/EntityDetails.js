import {
    Container,
    Row,
    Image,
    Col,
    ButtonGroup,
    Button,
    ButtonToolbar,
    Card,
    Tabs,
    Table,
    Tab,
    Form,
    // Sonnet,
} from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Weather from "../../components/Weather";
import Comment from "../../components/Comment";
// import { UserContext } from "../../Hike";
import Admin from "../../components/Admin";
import Moment from "react-moment";
import Mapper from "../../components/Mapper";

const EntityDetails = () => {
    // const user = useContext(UserContext);
    // state section
    const [entity, setEntity] = useState(null);
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
        console.log(entity);
    }, []);

    const content = !entity ? (
        <div>
            <h1>loading...</h1>
        </div>
    ) : (
        <Container className="px-4">
            <Row className="justify-content-center h-25 d-inline-block">
                <Image className="w-100 h-auto" src={entity.photo} />
            </Row>
            <Row>
                <Mapper entity={entity} />
            </Row>
            <Row className="justify-content-around mt-1">
                <LinkContainer to={`/map/${id}`}>
                    {/* LINK TO ENTITY MAP */}
                    <Button variant="success">Map</Button>
                </LinkContainer>
                <Button variant="success">Download</Button>
                <Button variant="success">Favourite</Button>
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
                    {/* <Sonnet /> */}
                    <div>?? what goes here ??</div>
                </Tab>

                <Tab eventKey="reviews" title="Reviews">
                    {/* <Sonnet /> */}
                    <Container>
                        <h1 className="mt-2">Reviews</h1>
                        <Row>
                            <Col>
                                <h3>Username</h3>
                            </Col>
                            <Col>
                                <h3>Review</h3>
                            </Col>
                        </Row>
                        {entity.comments &&
                            entity.comments.map((comment) => (
                                <Row key={comment.id}>
                                    <Col>{comment.user.username}</Col>
                                    <Col>
                                        {comment.comment}{" "}
                                        <Moment fromNow ago>
                                            {comment.updated_at}
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
                    {/* <Sonnet /> */}
                    <div>{entity.description}</div>
                </Tab>
                <Tab eventKey="elev" title="Elevation">
                    {/* <Sonnet /> */}
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sequi, excepturi?
                    </div>
                </Tab>
                <Tab eventKey="weather" title="Weather Forecast">
                    {/* <Sonnet /> */}
                    <div>
                        <Weather />
                    </div>
                </Tab>
            </Tabs>
        </Container>
    );

    return <>{content}</>;
};

export default EntityDetails;
