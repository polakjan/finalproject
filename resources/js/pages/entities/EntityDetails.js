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
    // Sonnet,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const EntityDetails = () => {
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

    useEffect(() => {
        console.log(entity);
    }, [entity]);

    return (
        <>
            {entity ? (
                <Container className="my-5">
                    <Row className="justify-content-center h-50">
                        <Image className="w-100 " src={entity.photo} />
                    </Row>
                    <Row className="justify-content-around mt-1">
                        <LinkContainer to={"/map"}>
                            <Button variant="secondary">Map</Button>
                        </LinkContainer>
                        <Button variant="secondary">Download</Button>
                        <Button variant="secondary">Favourite</Button>
                        <Button variant="secondary">Gallery</Button>
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
                            <div>Region: {entity.region}</div>
                        </Tab>
                        <Tab eventKey="desc" title="Description">
                            {/* <Sonnet /> */}
                            <div>{entity.description}</div>
                        </Tab>
                        <Tab eventKey="elev" title="Elevation">
                            {/* <Sonnet /> */}
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Sequi, excepturi?
                            </div>
                        </Tab>
                    </Tabs>
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
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ab laudantium eligendi
                                        temporibus tenetur omnis quae.
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Jacob</td>
                                    <td>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Qui tempore
                                        aspernatur, voluptas tenetur eius in
                                        incidunt optio eaque consequuntur!
                                        Aliquid a minima dicta corrupti odit?
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Bob</td>
                                    <td>pretty good</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            ) : null}
        </>
    );
};

export default EntityDetails;
