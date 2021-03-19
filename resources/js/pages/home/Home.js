import React, { useState, useEffect } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Car from "./Car";
import Homecard from "./Homecard";

const Home = () => {
    // state section
    const [entities, setEntities] = useState({});

    // Fetch entity data
    async function fetchEntities() {
        const url = "/api/entity/fetch";
        const response = await fetch(url);
        const data = await response.json();
        setEntities(data);
    }

    useEffect(() => {
        fetchEntities();
    }, []);

    useEffect(() => {
        console.log(entities);
    }, [entities]);

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
            {/* {Array(0)
                .fill(null)
                .map((a, i) => (
                    <Homecard key={i} />
                ))} */}
            {entities.length > 0
                ? entities.map((i) => <Homecard key={i.id} data={i} />)
                : null}
        </Container>
    );
};

export default Home;

{
    /* <Homecard props={entities} />; */
}
