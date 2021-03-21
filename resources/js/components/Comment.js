import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const Comment = () => {
    const [comment, setComment] = useState("");
    // const [errors, setErrors] = useState(null);
    // const [data, setData] = useState(null);

    /**
     * added event as arument for handleSubmit
     * moved .preventDefault() here
     */
    const handleSubmit = (event) => {
        event.preventDefault();

        let request_data = { comment };

        sendToServer(request_data);
    };

    const sendToServer = async (request_data) => {
        // event.preventDefault();

        // setErrors({});

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
        /**
         * simplified logic
         */

        setComment(event.target.value);
        // const allowed_names = ["comment"],
        //     name = event.target.name,
        //     value = event.target.value;

        // if (-1 !== allowed_names.indexOf(name)) {
        //     setValues((prev_values) => {
        //         return { ...prev_values, [name]: value };
        //     });
        // }
    };

    return (
        <div>
            <Form method="post" onSubmit={handleSubmit}>
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
    );
};

export default Comment;
