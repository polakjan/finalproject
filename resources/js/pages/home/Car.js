import React from "react";
import { Carousel } from "react-bootstrap";

const Car = () => {
    return (
        <Carousel className="shadow rounded w-100 ">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/400/300"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h4>On your bike!</h4>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src="https://picsum.photos/400/301"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Relaxing walks</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/400/302"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Get fit</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Car;
