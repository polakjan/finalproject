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


    const handleSubmit = async (event) => { 
        event.preventDefault();

        let request_data = { comment };
        const response = await fetch("/comment", {
            method: "POST",
            body: JSON.stringify(request_data),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });
        const response_data = await response.json();

        if (response.status == 200) {
            location.href = "/";
        } else {
            setErrors(response_data.errors);
        }
    }

    // const handleChange = (event) => {
    //     const allowed_names = ["email", "password"],
    //         name = event.target.name,
    //         value = event.target.value;

    //     if (-1 !== allowed_names.indexOf(name)) {
    //         setValues((prev_values) => {
    //             return { ...prev_values, [name]: value };
    //         });
    //     }
    // };

    return (
        <div>
            <Form action="/comment" method='post' onSubmit={handleSubmit}>
            <Form.Group>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        size="lg"
                        type="text"
                        // value={comment}
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
