import React from 'react'
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
    Form
    // Sonnet,
} from "react-bootstrap";
import {useState, useEffect} from 'react';

const Comment = () => {
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState(null);
    const [data, setData] = useState(null);

    const handleSubmit = () => { 
        let request_data = {comment};

        sendToServer(request_data);
    }

    const sendToServer = async (request_data) => {
        event.preventDefault();

        setErrors({});

        const response = await fetch("/api/comment/store", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
            body: JSON.stringify(request_data),
        });

        // Redirect after submit
        console.log("success, redirecting");
        location.href = "/details";
    };

    const handleChange = (event) => {
        const allowed_names = ["comment"],
            name = event.target.name,
            value = event.target.value;

        if (-1 !== allowed_names.indexOf(name)) {
            setData((prev_values) => {
                return { ...prev_values, [name]: value };
            });
        }
    };
    return (
        <div>
            <Form method='post' onSubmit={handleSubmit}>
            <Form.Group controlId="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        size="lg"
                        type="text"
                        value={comment}
                        onChange={handleChange}
                        name="comment"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                        Submit
                </Button> 
            </Form>
        </div>
    )
}

export default Comment
