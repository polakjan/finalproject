import React, { useState, useEffect, useContext } from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import Car from "./Car";
import Homecard from "./Homecard";
import ScrollToTop from "react-scroll-up";
import { ArrowUpCircle } from "react-bootstrap-icons";

import GoogleContext from "../../Hike";

const Home = (props) => {
    const value = useContext(GoogleContext);
    console.log(value);

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

    // useEffect(() => {
    //     console.log(entities);
    // }, [entities]);

    return (
        <Container className="bg-light pb-2 my-2">
            {/* <Jumbotron fluid className="bg-light">
                <Container>
                    <h1 className="text-primary mt-5 ">
                        Find your next adventure!
                    </h1>
                </Container>
            </Jumbotron> */}
            <Car />
            <Container>
                <Row xs={1} md={2}>
                    {" "}
                    {entities.length > 0
                        ? entities.map((i) => (
                              <Col key={i.id} className="p-2">
                                  <Homecard data={i} />{" "}
                              </Col>
                          ))
                        : null}
                </Row>
            </Container>
            <ScrollToTop
                showUnder={160}
                style={{
                    position: "fixed",
                    bottom: 30,
                    right: 15,
                    cursor: "pointer",
                    transitionDuration: "0.2s",
                    transitionTimingFunction: "linear",
                    transitionDelay: "0s",
                }}
            >
                <span>
                    <ArrowUpCircle class="text-dark" width="32" height="32" />
                </span>
            </ScrollToTop>
        </Container>
    );
};

export default Home;
