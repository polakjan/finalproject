import React from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";
import Car from "./Car";
import Homecard from "./Homecard";

const Home = () => {
    return (
        <>
            {/* <Jumbotron fluid> */}

            <Container fluid>
                <Row>
                    <div className="wrap">
                        <div className="headin">HikeCzech</div>
                        <div className="upper">
                            <img src="https://i.ibb.co/h2BWRP8/left.png" />
                            <img src="https://i.ibb.co/h2BWRP8/left.png" />
                            <img src="https://i.ibb.co/h2BWRP8/left.png" />
                            <img src="https://i.ibb.co/h2BWRP8/left.png" />
                            <img src="https://i.ibb.co/h2BWRP8/left.png" />
                            <img src="https://i.ibb.co/h2BWRP8/left.png" />
                            <img src="https://i.ibb.co/h2BWRP8/left.png" />
                            <img src="https://i.ibb.co/h2BWRP8/left.png" />
                        </div>
                        <div className="lower">
                            <img src="https://i.ibb.co/PmhbNJP/right.png" />
                            <img src="https://i.ibb.co/PmhbNJP/right.png" />
                            <img src="https://i.ibb.co/PmhbNJP/right.png" />
                            <img src="https://i.ibb.co/PmhbNJP/right.png" />
                            <img src="https://i.ibb.co/PmhbNJP/right.png" />
                            <img src="https://i.ibb.co/PmhbNJP/right.png" />
                            <img src="https://i.ibb.co/PmhbNJP/right.png" />
                        </div>
                    </div>
                </Row>
            </Container>

            {/* </Jumbotron> */}
            <Container>
                <Car />
                {Array(3)
                    .fill(null)
                    .map((a, i) => (
                        <Homecard key={i} />
                    ))}
            </Container>
        </>
    );
};

export default Home;
