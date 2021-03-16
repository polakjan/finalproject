import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

function Logout() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("/logout", {
            method: "POST",

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
    };

    return (
        <Container>
            <Form action="/logout" method="post" onSubmit={handleSubmit}>
                <Button>Log out</Button>
            </Form>
        </Container>
    );
}

export default Logout;
