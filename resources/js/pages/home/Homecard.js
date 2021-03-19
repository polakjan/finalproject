import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Homecard = (props) => {
    const { name, photo, region, description, id } = props.data;

    return (
        <Card className="my-3 shadow w-100">
            <Card.Body>
                <Card.Title className="">{name}</Card.Title>
                <Card.Img variant="top" src={photo && photo} />
                <Card.Text className="p-1">{description}</Card.Text>
                <ListGroup variant="flush">
                    <ListGroup.Item>Region: {region}</ListGroup.Item>
                    <ListGroup.Item>Difficulty: 4/5</ListGroup.Item>
                    <ListGroup.Item>Rating: 5/5</ListGroup.Item>
                </ListGroup>
            </Card.Body>

            <LinkContainer to={"/details/" + id}>
                <Button variant="success">Find out more</Button>
            </LinkContainer>
            {/* <Button variant="primary">Find out more</Button> */}
        </Card>
    );
};

export default Homecard;
