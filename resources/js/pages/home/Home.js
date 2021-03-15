import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Car from "./Car";
import Homecard from "./Homecard";

const Home = () => {
    return (
        <Container>
            <Jumbotron fluid>
                <Container>
                    <h2 className="text-primary my-3">
                        Pick your next adventure
                    </h2>
                </Container>
            </Jumbotron>
            <Car />
            {Array(3)
                .fill(null)
                .map((a, i) => (
                    <Homecard key={i} />
                ))}
        </Container>
    );
};

export default Home;
