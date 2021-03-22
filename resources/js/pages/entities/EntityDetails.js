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

const EntityDetails = () => {
    // const user = useContext(UserContext);
    // state section
    const [entity, setEntity] = useState({});
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

    return (
        <>
            {entity ? (
                <Container className="px-4">
                    <Row className="justify-content-center h-25 d-inline-block">
                        <Image className="w-100 h-auto" src={entity.photo} />
                    </Row>
                    <Row className="justify-content-around mt-1">
                        <LinkContainer to={"/map"}>
                            <Button variant="success">Map</Button>
                        </LinkContainer>
                        <Button variant="success">Download</Button>
                        <Button variant="success">Favourite</Button>
                        <Button variant="success">Gallery</Button>
                        <Admin props={entity} />
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
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Deserunt voluptatibus animi
                                eius id reprehenderit architecto nisi, obcaecati
                                dolor veritatis? Tenetur ex repellat assumenda
                                natus ad deserunt beatae dolore culpa
                                voluptatum!
                            </div>
                        </Tab>
                        <Tab eventKey="reviews" title="Reviews">
                            {/* <Sonnet /> */}

                            <Row>
                                <h1 className="mt-2">Reviews</h1>

                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>⭐</th>
                                            <th>Username</th>
                                            <th>Comment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>5</td>
                                            <td>Mark</td>
                                            <td>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. Ab
                                                laudantium eligendi temporibus
                                                tenetur omnis quae.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Jacob</td>
                                            <td>
                                                Lorem ipsum, dolor sit amet
                                                consectetur adipisicing elit.
                                                Qui tempore aspernatur, voluptas
                                                tenetur eius in incidunt optio
                                                eaque consequuntur! Aliquid a
                                                minima dicta corrupti odit?
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Bob</td>
                                            <td>pretty good</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Comment />
                            </Row>
                        </Tab>
                        <Tab eventKey="desc" title="Description">
                            {/* <Sonnet /> */}
                            <div>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptas, aliquam laudantium
                                numquam nostrum in ea porro. Hic vitae culpa ad!
                            </div>
                        </Tab>
                        <Tab eventKey="elev" title="Elevation">
                            {/* <Sonnet /> */}
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Sequi, excepturi?
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
            ) : null}
        </>
    );
};

export default EntityDetails;
